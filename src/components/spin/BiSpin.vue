<template>
   <div >
     <div class="bi-spin_spinning"
          v-if="spinning"
     >
       <span :class="[biSpinDot, biSpinDotSize]"
             :style="{animation: 'antRotate' + ' 1s '+' infinite linear'}"
       >
         <i :class="[biSpinDotIcon, biSpinDotIconSize, biSpinDotSpinIconIcon1]"></i>
         <i :class="[biSpinDotIcon, biSpinDotIconSize, biSpinDotSpinIconIcon2]"></i>
         <i :class="[biSpinDotIcon, biSpinDotIconSize, biSpinDotSpinIconIcon3]"></i>
         <i :class="[biSpinDotIcon, biSpinDotIconSize, biSpinDotSpinIconIcon4]"></i>
       </span>
     </div>
   </div>
</template>

<script>
  export default {
    name: "BiSpin",
    props: {
      /** 旋转尺寸 */
      size:{
        type: String,
        default: 'default',
        validator: function (value) {
          // 这个值必须匹配下列字符串中的一个
          return ['small', 'default', 'big'].indexOf(value) !== -1
        }
      },

      /** 加载中，默认为true */
      spinning: {
        type:Boolean,
        default: true
      }
    },

    mounted(){
      // 设置样式
      this.biSpinDotSize = this.biSpinDot + '_' + this.size;
      this.biSpinDotIconSize = this.biSpinDotIcon + '_' + this.size;

    },

    data(){
      return {
        /** 外层的样式，尺寸无关 */
        biSpinDot: 'bi-spin_dot',

        /** 外层的样式，尺寸相关 */
        biSpinDotSize:'',

        /** 图标的样式，尺寸无关 */
        biSpinDotIcon:'bi-spin_dot_icon',

        /** 图标的样式，尺寸相关 */
        biSpinDotIconSize:'',

        /** 设置四个图标,短横线手动转化成驼峰 */
        biSpinDotSpinIconIcon1: 'bi-spin_dot_icon_icon1',
        biSpinDotSpinIconIcon2: 'bi-spin_dot_icon_icon2',
        biSpinDotSpinIconIcon3: 'bi-spin_dot_icon_icon3',
        biSpinDotSpinIconIcon4: 'bi-spin_dot_icon_icon4'
      }
    }

  }
</script>

<style lang="less" src="../../styles/components/BiSpin.css">


</style>
