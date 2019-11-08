<template>
  <div :class = '["collapse-style",type]'>
    <a-collapse :style = "{ width: width + 'px'}" @change="changeActivekey">
        <a-collapse-panel v-for="pane in collapses" :header="pane.header" :key="pane.key" :disabled = "pane.disabled" >
            <slot :name = "pane.currentPaneContent"></slot>
        </a-collapse-panel>
    </a-collapse>
  </div>    
</template>

<script>
  
   export default {
    name: 'bi-collapse',  
    props: {
        //设置面板宽度
        width: {
            type: Number,
            default: 600,
        },
        //设置类型，是否为圆角样式
        type: {
            type: String,
            default: 'fillet'
        },
        //面板信息，包括key、子面板标题、子面板内容、子面板是否可用
        collapses: {
             type: Array,
             default: function() { 
                 return []
             }
         },
     },
     data() {
        return {         
        }
     },
     methods: {
      changeActivekey(key) {
        console.log(this.props);
      },
    },
    
}

</script>

<style src = "../../styles/components/BiCollapse.css">
 
</style>