<template>
  <div>
    <div>
      <BiSpin size="big" > </BiSpin>
    </div>
    <div>
      <!-- 默认的尺寸为default -->
      <BiSpin> </BiSpin>
    </div>
    <div>
      <BiSpin size="small" > </BiSpin>
    </div>
    <div>
      <span> 我被隐藏了 </span>
      <BiSpin size="small" :spinning="false" > </BiSpin>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div{
    margin: 20px 0 0 20px;
  }
</style>
