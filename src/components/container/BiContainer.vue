<template>
  <div >
    <div :style="{width:width +'px'}"
         class="bi-container_title"
         v-if="hasTitle"
    >{{title}}</div>
    <div class="bi-container_content"
         :style="{width:width +'px',height:height +'px'}"
    ></div>
  </div>
</template>

<script>
  export default {
    name: "BiContainer",
    props: {
      /** 是否禁用状态 */
      hasTitle: {
        type: Boolean,
        default: false
      },

      /** 面板的标题 */
      title: {
        type:String
      },

      /** 面板的宽度（单位px) */
      width: {
        type: Number,
        default: 300
      },

      /** 面板的高度（单位px） */
      height: {
        type: Number,
        default: 400
      }
    }
  }
</script>

<style lang="less" src="../../styles/components/BiContainer.css">

</style>
