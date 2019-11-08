<template>
    <div  v-drag:that="that" >
      <div >
        <BiCabinetMultiple :cabinets-configuration="cabinetsConfiguration"
                           :moduleChange="moduleChange"
                           :batterySwitch="batterySwitch"
                           @eventFromMultipleCabinet="emitEvent"
                           @mouseupEventFromMultipleCabinet="emitMouseupEvent"
        > </BiCabinetMultiple>
      </div>
    </div>
</template>

<script>
  import BiCabinetMultiple from "./BiCabinetMultiple";
  export default {
    // 支持拖动的多机柜
    name: "BiCabinetMultipleDrag",
    components: {BiCabinetMultiple},
    data() {
      return {
        that: this
      }
    },

    props: {
      // 多机柜时的配置文件， 此组件中不处理，传给子组件
      cabinetsConfiguration: {
        Type: Array
      },

      // 接口，接收模块的变化信息， 此组件中不处理，传给子组件
      moduleChange:{
        Type: Object
      },

      // 接口， 接收机柜的宽度信息。辅助判断光标的边界
      width: {
        Type: Number,
        default: 800
      },

      // 接口，接收电源的变化
      // 此组件中不处理，传给子组件
      batterySwitch: {
        Type: Object
      },
    },

    methods: {
      emitEvent(id){
        this.$emit('eventFromDraggableMultipleCabinet',id)
      },
      // 传递 mouseup 事件
      emitMouseupEvent(name){
        this.$emit('mouseupEventFromDraggableMultipleCabinet', name);
      },
    },

    directives:{
      drag: (el, bindings) => {
        // 这里的拖动时需要先按下鼠标，这就跟代码中click事件冲突。计算事件的时间差，来判断是点击事件还是拖动事件。
        let downTime = 0;
        let upTime = 0;

        // 定义边界信息
        const leftBorder = el.offsetLeft;
        const rightBorder = el.offsetLeft + bindings.value.width;

        el.onmousedown = function (e) {
          let disx = e.pageX - el.offsetLeft;
          downTime = new Date().getTime();
          document.onmousemove = function (e) {
            upTime = new Date().getTime();
            if (upTime - downTime > 200) {
              el.style.left = e.pageX - disx + 'px';
              if (e.pageX < leftBorder) {
                el.style.left = leftBorder + 'px'
              }
              if (e.pageX > rightBorder) {
                el.style.left = leftBorder + 'px'
              }
            }
            e.stopPropagation()
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }
        }
      }
    }
  }
</script>

<style scoped>
  div{
    width: 600px;
    height: 900px;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
