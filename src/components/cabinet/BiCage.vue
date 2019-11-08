
<script>
  import BiSlot from "./BiSlot";
  export default {
    // 机柜三级结构的中间级——机笼。
    name: "BiCage",

    props: {
      // 机笼的配置文件
      cageConfiguration: {
        Type: Array
      },

      // 机柜的宽度
      width: {
        Type: Number,
        default: 336
      },

      // 判断模块类型
      type:{
        Type: String,
        default: 'other'
      }
    },

    methods:{
      // emit事件
      // 传递 click 事件
      emitEvent(id){
        this.$emit('eventFromCage',id)
        //console.log('cage',id)
      },
      // 传递 mouseup 事件
      emitMouseupEvent(name){
        this.$emit('mouseEventFromCage', name)
        //console.info('cage',name)
      }
    },

    render(h, context) {
      const cageConfiguration = this.cageConfiguration;
      const type = this.type;
      let _this = this;
      return h(
        'div',
        // cage的样式，这些样式与内容无关
        {
          'class':'bi-cage'
        },
        [
        cageConfiguration.map(function (item) {
          return h(
            BiSlot,
            {
              props:
                {
                  configuration: item,
                  type: type
                },
              on:{
                // 接收来自机缝的事件（双击），并向父组件传递
                emitEventFromSlot:(id)=>{
                  _this.emitEvent(id)
                },

                // 接收来自机缝的事件（mouseup)， 并向父组件传递
                mouseupEventFromSlot: (name) => {
                  _this.emitMouseupEvent(name);
                }
              }
            }
          )
        })
      ])
    }
  }
</script>

<style lang="less" src="../../styles/components/BiCabinet.css">

</style>
