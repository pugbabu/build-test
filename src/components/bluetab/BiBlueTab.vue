<template>
  <div :class = '["bluetab-style",tabType]'>
    <a-tabs @change = 'change' @tabClick = 'tabClick' v-model="activeKey" type="card" @prevClick="prevClick" @nextClick="nextClick">
        <a-tab-pane v-for="pane in tabKeyText" :tab="pane.tabText" :key="pane.key"></a-tab-pane>
    </a-tabs>
  </div>    
</template>

<script>

export default {
    name: 'bi-blue-tab',
    props: {
        //选项卡键值对
        tabKeyText: {
            type: Array,
            default:{ key: 'Tab1', tabText: 'Tab1' }
        },
        //初始化选中面板的 key
        defaultActiveKey: {
            type: String,
            default: function(){
                return this.tabKeyText[0].key
            }
        }, 
        //页签类型类型，可选值有'compact'和'sparse' 
        tabType: {
             type: String,
             default: 'compact'
        }
    },
    data() {
        return { 
           activeKey:this.defaultActiveKey
        }
    },
    methods :{
        //切换面板的回调
        change(key) {
            this.$emit('change',key)
        },
        //tab 被点击的回调
        tabClick() {
            this.$emit('tabClick')
        },
        //prev按钮被点击的回调
        prevClick() {
            this.$emit('prevClick')
        },
        //next按钮被点击的回调
        nextClick() {
            this.$emit('nextClick')
        },
    }
   
}
</script>

<style src="../../styles/components/BiBlueTab.css">    
</style>