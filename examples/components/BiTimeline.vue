<template>
    <BiTimeline :texts="texts" :states="states"></BiTimeline>
</template>

<script>
  export default {
    data(){
      return {
        texts: ['今天是个好日子','明天又是好日子','打开了家门','咱迎春风'],
        states:['finished', 'processing','pending','pending']
      }
    }
  }
</script>

<style scoped>

</style>
