<template>
    <div>
      <div>
        <span>我有标题</span>
        <BiContainer :hasTitle="true" title="传感器状态"></BiContainer>
      </div>
      <div>
        <span>我没标题</span>
        <BiContainer></BiContainer>
      </div>
      <div>
        <span>我长500，高640</span>
        <BiContainer :height="640" :width="500"></BiContainer>
      </div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  div{
    margin: 10px 0 20px 10px ;
  }
</style>
