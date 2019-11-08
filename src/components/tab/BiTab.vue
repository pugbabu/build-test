<template>
  <div class="tab-style" :style = "{ width: width + 'px'}">
    <a-tabs style="text-align:left" @change = 'change' @tabClick = 'tabClick' v-model="activeKey" type="card">
        <a-tab-pane v-for="pane in normaltabKeyText" :key="pane.key">
            <span slot="tab" :class="addPaneClass(pane.status)">
               <img :src = "addPaneIcon(pane.status)" style="margin-top:-2px;">
               {{pane.tabText}}
            </span>
            <slot :name = "pane.currentPaneContent"></slot>
        </a-tab-pane>
    </a-tabs>
    
  </div>
</template>

<script>
export default {
     name: "bi-tab",
     props: {
        width: {
            type: Number, 
            default: 600
        },
        //选项卡键值对
        normaltabKeyText: {
            type: Array,
            default: function() { 
                 return []
             }
        },
        //初始化选中面板的 key
        defaultActiveKey: {
            type: String,
            default: function(){
                return this.normaltabKeyText[0].key
            }
        }, 
     },
     data() {
        return { 
           activeKey:this.defaultActiveKey
        }
    },
     methods: {
        //切换面板的回调
        change(key) {
            this.$emit('change',key)
        },
        //tab 被点击的回调
        tabClick() {
            this.$emit('tabClick')
        },
        //根据状态切换面板标题样式
        addPaneClass(paneStatus) {
          switch(paneStatus) {
              case "normal":
                  return "ant-tab-card-normal";
              case "alarm": 
                  return "ant-tab-card-alarm";
              case "offline": 
                  return "ant-tab-card-offline";
              default:
                  return "";
          }
        },
        //根据状态切换面板标题图标
         addPaneIcon(paneStatus) {
          switch(paneStatus) {
              case "normal":
                  return require("../../assets/正确.svg");
              case "alarm": 
                  return require("../../assets/错误.svg")
              case "offline": 
                  return require("../../assets/疑问.svg")
              default:
                  return "";
          }
        }
    }
}

</script>

<style src = "../../styles/components/BiTab.css">

</style>