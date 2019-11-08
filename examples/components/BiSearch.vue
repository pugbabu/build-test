<template>
  <div>
    <div>
      <BiSearch defaultValue="输入搜索内容"
                inputName="姓名"
                v-model="value">
      </BiSearch>
      {{value}}
    </div>
    <div>
      它被禁用了
      <BiSearch defaultValue="输入搜索内容"
                inputName="姓名"
                :disabled="true">
      </BiSearch>
    </div>
    <div>
      它很长
      <BiSearch defaultValue="输入搜索内容"
                inputName="姓名"
                :width="500"
                @change="change"
                @pressEnter="pressEnter">
      </BiSearch>
    </div>

   <!-- <a-input-search v-model="value">  </a-input-search>
    {{value}}-->
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value: ''
      }
    },
    methods: {
      change(value){
        console.info(value,'change')
      },
      pressEnter(value){
        console.info(value,'pressEnter')
      }
    }
  }
</script>

<style scoped>

</style>
