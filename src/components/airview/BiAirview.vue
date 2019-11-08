<template>
  <div class="bi-air-view">
    <div class="bi-air-view_title">
      <div v-if="titleIsString" v-html="title"></div>
      <slot v-else name="title"></slot>
    </div>
    <div class="bi-air-view_content">
      <div v-if="contentIsString" v-html="content"></div>
      <slot v-else name="content" ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BiAirView",
    props: {
      /** 是否有title */
      hasTitle: {
        Type: Boolean,
        default: true
      },

      /** 接收一个html字符串作为标题 */
      title: {
        Type: String
      },

      /** 接收一个html字符串作为内容 */
      content: {
        Type: String
      }
    },

    data(){
      return {
         /** title 是否是字符串 */
         titleIsString: true,

        /** title是否是字符串 */
         contentIsString: true
      }
    },

    mounted() {
      // 判断是否有传值，如果没传值，则以slot的方式，插入DOM元素
      this.titleIsString = (this.title === null || this.title === undefined) ? false : true;
      this.contentIsString = (this.content === null || this.content === undefined) ? false : true;
    }

  }
</script>

<style lang="less" src="../../styles/components/BiAirview.css">

</style>
