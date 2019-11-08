<template>
<div>
  <div>
    <bi-input-box input-type="big"
                  inputName="姓名"
                  :width="500"
                  default-value="输入文本"
                  error-prompt="也没啥问题，我就打出来看一下"
                  :necessary="true"
                  @change="change"
                  @pressEnter="pressEnter"
                  checked-result="success"
    ></bi-input-box>
  </div>
  <div>
    <bi-input-box input-type="medium"
                  :disabled="flag"
                  inputName="姓名"
                  :width="400"
                  default-value="输入文本"
                  error-prompt="也没啥问题，我就打出来看一下"
                  icon="head.jpg"
                  checked-result="fail"
                  @getInputBoxTextData="alertMsg"
    ></bi-input-box>
  </div>
  <div>
    <bi-input-box input-type="small"
                  :disabled="flag"
                  inputName="姓名"
                  :width="300"
                  default-value="输入文本"
                  icon="head.jpg"
                  :necessary="flag"
                  @getInputBoxTextData="alertMsg"
    ></bi-input-box>
  </div>
  <div>
    <bi-input-box input-type="small"
                  :disabled="true"
                  inputName="姓名"
                  default-value="输入文本"
                  error-prompt="也没啥问题，我就打出来看一下"
                  icon="head.jpg"
                  :necessary="flag"
                  @getInputBoxTextData="alertMsg"
    ></bi-input-box>
  </div>

  <div>
    {{value}}
    <bi-input-box input-type="small"
                  inputName="姓名"
                  default-value="输入文本"
                  error-prompt="也没啥问题，我就打出来看一下"
                  icon="head.jpg"
                  :necessary="flag"
                  v-model="value"
                  @getInputBoxTextData="alertMsg"
    ></bi-input-box>
  </div>
</div>
</template>

<script>
  export default {
    data: function () {
      return{
        flag : !true,
        value:'ss'
      }
    },
    methods: {
      change(value){
        console.info(value)
      },
      pressEnter(value){
        console.info(value)
      }
    }
  }
</script>

<style scoped>
  div{
    margin-top: 40px;
  }
</style>
