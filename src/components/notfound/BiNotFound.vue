<template>
    <div class="bi-not-found">
      <div class="bi-not-found_title">抱歉，您要前往的页面出了点问题...</div>
      <div class="bi-not-found_reason">{{errorReason}}</div>
      <img src="../../styles/common/iconfont/font/404.svg" style="width: 300px;height: 300px"/>
      <div class="bi-not-found_buttons">
        <BiButton
          class="bi-not-found_buttons_home"
          type="primary"
          name="返回首页"
          :width="92"
          size="big"
          @click="returnHome"
          style="font-size: 14px"
        ></BiButton>
        <BiButton
          class="bi-not-found_buttons_previous"
          type="primary"
          name="返回上一页"
          :width="106"
          size="big"
          style="font-size: 14px"
          @click="returnPrevious"
        ></BiButton>
      </div>
    </div>
</template>

<script>
  export default {
    name: "BiNotFound",
    props:{
      errorReason: {
        Type: String
      }
    },
    methods: {
      returnHome(){
        this.$emit("returnHome")
      },
      returnPrevious(){
        this.$emit("returnPrevious")
      },
    }
  }
</script>

<style src="../../styles/components/BiNotFound.css">

</style>
