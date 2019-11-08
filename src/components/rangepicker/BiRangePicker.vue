<template>
    <LocaleProvider :locale="locale">
      <div class = "picker-style" >
        <a-range-picker
          :ranges="{ '今天': [$moment(), $moment()], 
                 '昨天': [$moment().subtract(1, 'days'),$moment().subtract(1, 'days')],
                 '最近7天': [$moment().subtract(7, 'days'), $moment()],
                 '最近30天': [$moment().subtract(30, 'days'), $moment()],
                 '上个月': [$moment().subtract(1, 'month').startOf('month'), $moment().subtract(1, 'month').endOf('month')]
                  }"
          :showTime=showTimeFormat()
          :format="format"
          suffixIcon=" "
          @openChange="openChange"
          @panelChange="panelChange"
          @calendarChange="calendarChange"
          @change="change"
          @ok="ok"
          :disabledDate="disabledDate"
          :placeholder = "placeholder"
          :defaultValue = "defaultValue"
          :defaultPickerValue = "defaultPickerValue"
          :style="{'width': setWidth()}"
          >
          </a-range-picker>
      </div>
    </LocaleProvider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'ant-design-vue';
export default {
  name: 'bi-range-picker',
  props: {
   //不可选择的日期
   disabledDate: {
     type: Function
   },
   //输入框提示文字
   placeholder: {
     type: Array,
     default: ['开始时间','结束时间']
   },
   //日期格式
   format: {
     type: String,
     default: 'YYYY-MM-DD HH:mm:ss'
   },
   //是否显示时间
   showTime: {
     default: true
   },
   //默认日期
   defaultValue: {
     type: Array,
   },
   //默认面板日期
   defaultPickerValue: {
     type: Array,
   }
  },
  data(){
    return {
        locale: zhCN
    }
  },
  components: {
      LocaleProvider
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
    //设置输入框宽度
    setWidth() {
      if(this.format.length <= 10) {
        return "196px"
      } else if(this.format.length > 10 && this.format.length <= 14) {
        return "272px"
      }else if(this.format.length > 14 && this.format.length <= 18) {
        return "330px"
      }else {
        return "390px"
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
    //待选日期发生变化的回调
    calendarChange(dates,dateStrings) {
      this.$emit('calendarChange', dates, dateStrings)
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