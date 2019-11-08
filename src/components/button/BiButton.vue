<template>
    <button :style="{width: width+'px'}"
            :class="[biButtonSizeCss, biButtonBasicCss, biButtonEventCss]"
            @mousedown="buttonMouseDown"
            @mouseup="buttonMouseUp"
            @mouseover="buttonMouseOver"
            @mouseleave="buttonMouseUp"
            @click="buttonClick"
    > {{name}} </button>
</template>

<script>

  export default {
    name: "BiButton",
    props:{
      /** 按键的文本 */
      name:{
        type:String,
        default:'Button'
      },

      /** 按键的宽度 */
      width:{
        type:Number,
        default: 64
      },

      /** 按键状态 */
      state:{
        type:String,
        default:'default',
        validator(value){
          return ['default','hover', 'pressed', 'unavailable'].indexOf(value) !== -1
        }
      },

      /** 按键的大小 */
      size:{
        type:String,
        default:'small',
        validator:function (value) {
          return ['big', 'medium' ,'small'].indexOf(value) !== -1
        }
      },

      /** 按键的主次 */
      type:{
        type:String,
        default:'default',
        validator:function (value) {
          return ['primary','default'].indexOf(value) !== -1
        }
      }
    },

    mounted(){
      this.biButtonBasicCss = 'bi-button';
      this.biButtonEventOriginalCss = 'bi-button_' + this.type;
      this.biButtonEventCss = 'bi-button_' + this.type +'_' +this.state;
      this.biButtonSizeCss = 'bi-button_' + this.size;
/*      if(this.state !== 'unavailable'){
        // 按键可用时的样式绑定
        this.biButtonBasicCss = 'bi-button';
        this.biButtonEventCss = 'bi-button_' + this.type;
        this.biButtonEventOriginalCss = this.biButtonEventCss;
        this.biButtonSizeCss = 'bi-button_' + this.size;
      }
      else{
        // 按键不可用时的样式绑定
        this.biButtonBasicCss = 'bi-button';
        this.biButtonEventCss = 'bi-button_' + this.type + '_unavailable';
        this.biButtonSizeCss = 'bi-button_' + this.size;
      }*/
    },
    data(){
      return {
        /** 基本样式 */
        biButtonBasicCss:'',

        /** 尺寸相关的样式 */
        biButtonSizeCss:'',

        /** 事件相关的样式 */
        biButtonEventCss:'',

        /** 默认事件下的样式，作为事件样式变换前的状态 */
        biButtonEventOriginalCss:''
      }
    },
    methods: {
      /** 鼠标摁下时触发，修改按键样式 */
      buttonMouseDown(){
        if(this.state != 'unavailable'){
          this.biButtonEventCss = this.biButtonEventOriginalCss + '_pressed'
        }
      },
      /** 鼠标松开或者悬停结束，修改按键样式 */
      buttonMouseUp(){
        if(this.state != 'unavailable'){
          this.biButtonEventCss = this.biButtonEventOriginalCss+'_default'
        }
      },
      /** 悬停时触发，修改按键样式 */
      buttonMouseOver(){
        if(this.state != 'unavailable'){
          this.biButtonEventCss = this.biButtonEventOriginalCss+'_hover'
          this.$emit("mouseOver")
        }
      },
      /** 鼠标点击事件，用于向父组件传递结果 */
      buttonClick(event){
        if(this.state != 'unavailable'){
          this.$emit("click",event)
        }
      }
    }
  }
</script>

<style lang="less" src="../../styles/components/BiButton.css">

</style>
