<template>
 <div class="picker-style" >
  <LocaleProvider :locale="locale" >
    <a-month-picker
      :format="format"
      :placeholder="placeholder"
      suffixIcon=" "
      style="width: 196px"
      :disabledDate="disabledDate"
      :defaultValue="defaultValue" 
      :defaultPickerValue="defaultPickerValue"
      @openChange="openChange"
      @panelChange="panelChange"
      @change="change"
    />
  </LocaleProvider>
 </div>
 
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'ant-design-vue';

export default {
  name: 'bi-month-picker',
  components: {
      LocaleProvider
    },
  props: {
  //不可选择的日期
    disabledDate: {
     type: Function,
    },
  //输入框提示文字
  placeholder: {
     type: String,
     default: "选择月份"
   },
   //默认日期
  defaultValue: {
     type: Object,
   },
    //默认面板日期
   defaultPickerValue: {
     type: Object,
   },
   //日期格式
  format: {
     type: String,
     default: 'YYYY-MM'
   },
  },
  data(){
    return {
      locale: zhCN
    }
  },
  methods: {
    //弹出日历和关闭日历的回调
    openChange(status) {
      this.$emit('openChange',status)
    },
    //日期面板变化时的回调
    panelChange(value, mode) {
      this.$emit('panelChange', value, mode)
    },
    //日期范围发生变化的回调
    change(dates, dateStrings) {
      this.$emit('change', dates, dateStrings)
    },
  }
}

</script>

<style src="../../styles/components/BiPicker.css">

</style>