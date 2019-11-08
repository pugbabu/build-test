<template>
  <div class="bi-search">
    <table>
      <tr>
        <td>
          <label class="bi-search_label"
                 :style="{paddingRight:intervalAfterInputBoxName}"
          >{{inputName}}</label>
        </td>
        <td>
          <input :class="[ searchCss, inputBoxBorderColorCss ]"
                 :placeholder="defaultValue"
                 :disabled="disabled"
                 :style="{backgroundImage:'url('+ urlIcon +')',width: widthStyle}"
                 :value="currentValue"
                 @input="input"
                 @keyup.enter="pressEnter"
                 @change="change"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "BiSearch",

    props: {

      /** 输入框默认内容 */
      defaultValue: {
        type: String
      },

      /** 是否禁用状态，默认不禁用 */
      disabled: {
        type: Boolean,
        default: false
      },

      /** 搜索框内容, 支持v-model双向绑定功能 */
      value: {
        type: String
      },

      /** 输入框的名称 */
      inputName:{
        type: String
      },

      /** 输入框的宽度 */
      width: {
        type: Number,
        default: 165
      }

    },

    data: function () {
      return {

        /** 输入框的文本框样式 */
        searchCss: 'bi-search_search',

        /** 输入框的边框颜色 */
        inputBoxBorderColorCss:'',

        /** 输入框内容 */
        currentValue: this.value,

        /** 搜索框的icon */
        urlIcon: null,

        /** 搜索框的宽度，组件加载时将父组件的参数拼接成字符串 */
        widthStyle:'',

        /** 输入框名称与输入框左边框的间距 */
        intervalAfterInputBoxName: ''

      }
    },

    /**
     * 加载后，根据props里的值进行相关的样式设置，就是不知道这个时间，props的有没有
     * 还有，就是如果表单里的页面发送的数据有变化，会不会触发这个时间狗子，如果不会的话，可能就要用监控器进行修改，先按这个方式写
     * */
    mounted: function(){

      // 根据输入框的checkedResult值 设置样式
      // 先判断是否禁用设置样式，在判断具体的样式
      if (this.disabled) {
        this.inputBoxBorderColorCss = 'bi-search_search_border-color_offline'
      }
      else {
        this.inputBoxBorderColorCss = 'bi-search_search_border-color_available'
      }
      // 根据当前语言，设置输入框名称和输入框的间隔
      if (this.$i18n.locale != null ) {
        let isChinese = this.$i18n.locale=== 'zh-CN'
        this.intervalAfterInputBoxName = (isChinese == true) ? '8px' : '4px'
      }

      // 获取背景图片的路径
      this.urlIcon = require('@/styles/common/iconfont/font/magnifier.svg')

      this.widthStyle = this.width + 'px'
    },

    methods: {
      /**
       *  将输入框中的内容传递给父组件
       * */
      change: function (event) {
        this.$emit("change",event)
      },
      pressEnter:function (event) {
        this.$emit("pressEnter",event)
      },
      input:function (event) {
        this.$emit("input",event.target.value)
      }
    },
  }
</script>

<style  src="../../styles/components/BiSearch.css">

</style>
