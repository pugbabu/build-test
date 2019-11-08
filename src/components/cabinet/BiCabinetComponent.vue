<template>
  <div class="bi-cabinet-component"
       :style="{height:height + 'px',width:width + 'px'}"
    >
    <BiCabinetMultipleDrag :cabinetsConfiguration="cabinetsConfiguration"
                           :moduleChange="moduleChange"
                           :batterySwitch="batterySwitch"
                           @eventFromDraggableMultipleCabinet="emitEvent"
                           @mouseupEventFromDraggableMultipleCabinet="emitMouseupEvent"
    ></BiCabinetMultipleDrag>
  </div>
</template>

<script>
  import BiCabinetMultipleDrag from "./BiCabinetMultipleDrag";
  export default {
    // 机柜组件，使用时调用这个组件
    name: "BiCabinetComponent",
    components: {BiCabinetMultipleDrag},
    props: {
      // 多机柜时的配置文件， 此组件中不处理，传给子组件
      cabinetsConfiguration: {
        Type: Array
      },

      // 接口，接收模块的变化信息， 此组件中不处理，传给子组件
      moduleChange:{
        Type: Object,
        // 自定义校验器。 传入的值必须包括这两个属性，且状态必须为三个值之一
        validator(value) {
          return (typeof value.moduleId !== 'undefined') && (typeof value.moduleState !== 'undefined')
            && ['healthy', 'faulty', 'offline'].indexOf(value.moduleState) !== -1;
        },
        default: () => {
          return {
            moduleId: '-1',
            moduleState: 'healthy'
          }
        }
      },

       // 接口， 接收机柜窗口的高度信息
       height: {
         Type: Number,
         default: 600
       },

       // 接口， 接收机柜窗口的宽度信息
       width: {
         Type: Number,
         default: 800
       },

      // 接口， 接收电源的状态变化， 此组件中不处理，传给子组件
      batterySwitch: {
        Type: Object,
        // 自定义校验器。 传入的值必须包括这两个属性，且状态必须为三个值之一
        validator(value) {
          return (typeof value.batteryId !== "undefined") && (typeof value.batteryState !== "undefined")
            && (['onlyA', 'onlyB', 'both'].indexOf(value.switchChange) !== -1);
        },
        default: () => {
          return {
            batteryId: '-1',
            batteryState: 'onlyA'
          }
        }
      },
    },

    methods: {
      emitEvent(id){
        this.$emit('clicked',id)
      },
      // 传递 mouseup 事件
      emitMouseupEvent(name){
        this.$emit('mouseupEvent', name);
      },
    },

  }
</script>

<style lang="less" src="../../styles/components/BiCabinet.css">

</style>
