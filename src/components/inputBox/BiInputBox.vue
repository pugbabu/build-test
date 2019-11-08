<template>
  <div class="bi-input-box">
    <table>
      <tr>
        <td>
          <img src="@/styles/common/iconfont/font/requiredField.svg"
               class="bi-input-box_img"
               v-if="necessary"
          />
          <label class="bi-input-box_label"
                 :style="{paddingRight:intervalAfterInputBoxName}"
          >{{inputName}}</label>
        </td>
        <td>
          <input :class="[inputBoxCss, inputIconCss, inputBoxSizeCss, inputBoxBorderColorCss]"
                 :placeholder="defaultValue"
                 :disabled="disabled"
                 :style="{backgroundImage:'url('+ urlIcon +')',width:width+'px'}"
                 :value="currentValue"
                 @input="vModel"
                 @keyup.enter="pressEnter"
                 @change="contentChange"
          />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <label  class="bi-input-box_label_error-prompt"  >{{errorPrompt}}</label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "BiInputBox",

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

      /** 输入框内容 */
      value: {
        type: String
      },

      /** 输入框类型，取值范围是'small', 'medium', 'big' */
      inputType: {
        type: String,
        default: 'big',
        validator: function (value) {
          // 这个值必须匹配下列字符串中的一个
          return ['small', 'medium', 'big'].indexOf(value) !== -1
        }
      },

      /** 输入框的名称 */
      inputName:{
        type: String
      },

      /** 是否必选项，默认非必选*/
      necessary: {
        type: Boolean,
        default: false
      },

      /** 是否需要校验 */
      checked: {
        type: Boolean,
        default: false
      },

      /** 校验状态，取值范围是'success', 'fail', 'unknown' */
      checkedResult: {
        type: String,
        default: 'unknown',
        validator: function (value) {
          // 这个值必须匹配下列字符串中的一个
          return ['success', 'fail', 'unknown'].indexOf(value) !== -1
        }
      },

      /** 错误提示的内容 */
      errorPrompt: {
        type: String
      },

      /** 内嵌的图标的路径 */
      icon:{
        type: String,
      },

      /** 文本框的宽度 */
      width: {
        Type: Number,
        default: 165
      }
    },

    data: function () {
      return {
        /** 输入框的icon样式 */
        inputIconCss: 'bi-input-box_input-box_icon',

        /** 输入框的文本框样式 */
        inputBoxCss: 'bi-input-box_input-box',

        /** 输入框的圆角特性 */
        inputBoxSizeCss: '',

        /** 输入框的边框颜色 */
        inputBoxBorderColorCss:'',

        /** 输入框名称与输入框左边框的间距 */
        intervalAfterInputBoxName:'',

        /** 保存require后的 路径 */
        urlIcon:null,

        /** 输入框内容 */
        currentValue: this.value

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
        this.inputBoxBorderColorCss = 'bi-input-box_input-box_border-color_offline'
      }
      else {
        switch (this.checkedResult) {
          case 'success': {
            this.inputBoxBorderColorCss = 'bi-input-box_input-box_border-color_success'
            break;
          }
          case 'fail': {
            this.inputBoxBorderColorCss = 'bi-input-box_input-box_border-color_wrong'
            break;
          }
          case 'unknown': {
            this.inputBoxBorderColorCss = 'bi-input-box_input-box_border-color_available'
            break;
          }
          default: {
            alert('error in value of checkedResult')
          }
        }
      }

      // 根据输入框的inputType值 设置样式
      this.inputBoxSizeCss = 'bi-input-box_input-box_'+this.inputType
/*      switch (this.inputType) {
        case 'small': {
          this.inputBoxSizeCss = 'bi-input-box_input-box_small'
          break;
        }
        case 'medium': {
          this.inputBoxSizeCss = 'bi-input-box_input-box_medium'
          break;
        }
        case 'big': {
          this.inputBoxSizeCss = 'bi-input-box_input-box_large'
          break;
        }
        default: {
          alert('error in value of inputType')
        }
      }*/

      // 根据当前语言，设置输入框名称和输入框的间隔
      if (this.$i18n.locale != null ) {
        let isChinese = this.$i18n.locale=== 'zh-CN'
        this.intervalAfterInputBoxName = (isChinese == true) ? '8px' : '4px'
      }

      // 获取背景图片的路径
      if (typeof (this.icon) !== 'undefined') {
        this.urlIcon = require('@/styles/common/iconfont/font/'+this.icon)
      }
      else {
        this.urlIcon = ''
      }
    },

    methods: {
      contentChange(event){
        this.$emit("change",event)
      },

      pressEnter(event){
        this.$emit("pressEnter",event)
      },

      vModel(event){
        this.$emit("input",event.target.value)
      }
    },

    watch: {
      checkedResult: function (newValue) {

      }
    }
  }
</script>

<style src="../../styles/components/BiInputbox.css">

</style>
