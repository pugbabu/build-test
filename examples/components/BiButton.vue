<template>
  <div>
    <div>
      <BiButton type="primary" name="最大" size="big" > </BiButton>
      <BiButton type="primary" name="中等" size="medium" > </BiButton>
      <BiButton type="primary" name="最小" size="small"> </BiButton>
    </div>
    <div>
      <BiButton type="default" name="最大" size="big" > </BiButton>
      <BiButton type="default" name="中等" size="medium" > </BiButton>
      <BiButton type="default" name="最小" size="small"> </BiButton>
    </div>
    <div>
      <BiButton type="default" name="最大" size="big" state="unavailable"> </BiButton>
      <BiButton type="default" name="悬停" size="big" state="hover"> </BiButton>
      <BiButton type="default" name="点击" size="big" state="pressed"> </BiButton>
      <BiButton type="default" name="正常" size="big" state="default"> </BiButton>
      <BiButton type="primary" name="不可" size="big" state="unavailable"> </BiButton>
      <BiButton type="primary" name="悬停" size="big" state="hover"> </BiButton>
      <BiButton type="primary" name="点击" size="big" state="pressed"> </BiButton>
      <BiButton type="primary" name="正常" size="big" state="default"> </BiButton>
    </div>
    <div>
      <BiButton type="default" name="我很长" size="big" :width="500"> </BiButton>
    </div>
    <div>
      <BiButton name="点我有事件" :width="500" @click="clickFn" @mouseOver="HoverFn"> </BiButton>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      clickFn(){
        alert('别点我')
      },
      HoverFn(){
        alert('快走')
      },
    }
  }
</script>

<style>
  div{
    margin: 10px 0px 10px 10px;
  }
</style>


