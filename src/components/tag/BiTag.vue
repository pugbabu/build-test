<template>
  <div >
     <label :class="[basicCss, backgroundColorCss, textColorCss, textSizeCss]"
     >{{text}}</label>
  </div>
</template>

<script>
  export default {

      name: "BiTag",

      props: {
        /** 标签的内容 */
        text: {
          type: String,
          default: "计轴"
        },

        /** 字体大小 */
        textSize: {
          type: String,
          default:'text'
        },

        /** 字体颜色 */
        textColor: {
          type: String,
          default: 'dark1'
        },

        /** 标签背景色 */
        backgroundColor: {
          type: String,
          default: 'light1'
        }
      },

      data: function () {
        return{
          backgroundColorCss :'',
          textColorCss: '',
          textSizeCss: '',
          basicCss:'bi-tag'
        }
      },

      mounted() {
        // 拼接样式
        this.backgroundColorCss = 'bi-tag_color-background_' + this.backgroundColor
        this.textColorCss = 'bi-tag_color-font_' + this.textColor
        this.textSizeCss = 'bi-tag_size-font_' + this.textSize
      }
  }
</script>

<style lang="less" src="../../styles/components/BiTag.css">

</style>

