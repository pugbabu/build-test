<template>
 <div class="picker-style">
  <LocaleProvider :locale="locale">
    <a-date-picker
      :placeholder="placeholder"
      suffixIcon=" "
      style="width: 196px"
      :disabledDate="disabledDate"
      :defaultValue="defaultValue" 
      :defaultPickerValue="defaultPickerValue"
      :format="format"
      :showTime=showTimeFormat()
      @openChange="openChange"
      @panelChange="panelChange"
      @change="change"
      @ok="ok"
      
    />
  </LocaleProvider>
 </div>
 
</template>

<script>
import moment from 'moment';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'ant-design-vue';

export default {
  name: 'bi-date-picker',
  components: {
      LocaleProvider
    },
  props: {
   //不可选择的日期
   disabledDate: {
     type: Function
   },
   //输入框提示文字
   placeholder: {
     type: String,
     default: "选择时间"
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
     default: 'YYYY-MM-DD'
   },
   //是否显示时间
   showTime: {
    default: false
   }
  },
  data(){
    return {
      locale: zhCN,
    }
  },
  methods: {
    //根据日期+时间格式以设置时间格式
    showTimeFormat() {
      if(this.showTime) {
        var listTimeFormat = this.format.split(" ");
        if(listTimeFormat.length > 1) {
          return {'format': listTimeFormat[1]};
        }else {
          return false;
        }     
      }else {
        return false;
      }
    },
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
    //点击确定按钮的回调
    ok(value) {
      this.$emit('ok',value)
    }
  }
}

</script>

<style src="../../styles/components/BiPicker.css">

</style>