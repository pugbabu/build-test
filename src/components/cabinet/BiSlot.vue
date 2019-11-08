<script>
  export default {
    // 机柜三级结构的最下面一级，机缝。
    name: "BiSlot",

    props: {
      // 配置数据
      configuration:{},

      // 接口， 接收模块的类型信息
      type: {
        Type: String
      }
    },

    data(){
      return {
        downPx: null,
        upPx: null
      }
    },

    methods:{
      // emit事件
      // 传递 click 事件
      showModule(event,id){
        this.upPx = event.pageX
        console.info(event)
        console.info('upPx', this.upPx)
        if (this.downPx === this.upPx) {
          this.$emit('emitEventFromSlot',id)
        }
      },
      // 传递 mouseup 事件
      showModuleName(name,event){
        this.upPx = event.pageX
        this.$emit('mouseupEventFromSlot', typeof name === "undefined" ? '没名字': name )
      },

      mouseDownEvent(e){
        this.downPx = e.pageX;
        console.info('downPx', this.downPx)
      }
    },

    render(h, context) {
      const configuration = this.configuration;
      const type = this.type;
      let ref = this;


      return h(
        // slot的根节点为td,对应表格中的td
        'div',{
          ref: configuration.id,

          // 样式 不由配置文件决定。这些样式与内容无关
          'class': 'bi-slot',
          // slot的样式,内容相关的样式，比如说背景颜色之类的
          // 如果存在样式，则使用样式
          style: configuration.styles,

          // ！！ 如果存在id,则表明该节点为一个模块，需要绑定事件 ！！
          on:configuration.id?{
            click:(event)=>{
              ref.showModule(event, configuration.id)
            },
            "mouseover": (e)=>{
              ref.showModuleName(configuration.name,e)
            },
            "mousedown": (e) => {
              ref.mouseDownEvent(e)
            }
          }:{}
        },

        /*
        *
        *  遍历子节点。如果没有子节点则直接跳过
        *  子节点的类型包括三种，文本，图片，和有色div块。
        *  文本对应的children中存在text键的元素；
        *  图片对应children中存在img键的元素；
        *  有色div块只是单纯的色块，没有内容，只需要style显示下即可。
        *
        * */
        [
          configuration.children.map(function (item) {
            return h('div',
              {
                // 如果存在id,对子节点的id属性赋值
                ref: item.id,
                // 如果存在样式，则使用样式
                style:item.styles,
                // 如果是板卡的类型，则使用板卡的样式；如果类型为bi-slot_horizon-text, 则使用该类型的样式
                'class': type==='board'? 'bi-slot_board' :(type==='other'? 'bi-slot_horizon-text':''),
                // 如果子节点存在id,则表明该节点为一个模块，需要绑定事件
                on:item.id?{
                  click: (event)=>{
                    ref.showModule(event, item.id)
                  },
                  "mouseover": (e)=>{
                    ref.showModuleName(item.name, e)
                  },
                  "mousedown": (e) => {
                    ref.mouseDownEvent(e)
                  }
                }:{}
              },
              [
                item.text,
                item.img ? h('img',{
                attrs:{src:require('../../styles/common/iconfont/font/'+item.img)},
                class: 'bi-slot_image'
              }) : null])
          })
        ]
      );
    }
  }
</script>

<style lang="less" src="../../styles/components/BiCabinet.css">
</style>
