<template>
    <BiNotFound error-reason="问得好，我也不知道为什么"
                @returnHome="responseHome"
                @returnPrevious="responsePrevious"
    ></BiNotFound>
</template>

<script>
  export default {
    methods: {
      responseHome(){
        alert("返回home")
      },
      responsePrevious(){
        alert("返回上一页")
      }
    }
  }
</script>

<style scoped>

</style>
