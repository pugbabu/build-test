<template>
    <bi-transfer :dataSource="dataSource"
                 :targetKeys="targetKeys"
                 :width="400"
                 :height="300"
                  @change="change"
                 @selectChange="selectChange"
                 :selectedKeys="selectedKeys"
    ></bi-transfer>
</template>

<script>
  export default {
    data(){
      return {
        dataSource: [
          {'key':'1',
            'title':'Mon',
            'description':'星期一',
            'disabled':false},
          {'key':'2',
            'title':'Tue',
            'description':'星期二',
            'disabled':false},
          {'key':'3',
            'title':'Wen',
            'description':'星期三',
            'disabled':false},
          {'key':'4',
            'title':'Thu',
            'description':'星期四',
            'disabled':false},
          {'key':'5',
            'title':'Fri',
            'description':'星期五',
            'disabled':false},
          {'key':'6',
            'title':'Sat',
            'description':'星期六',
            'disabled':true},
          {'key':'7',
            'title':'Sun',
            'description':'星期日',
            'disabled':false},
        ],
        targetKeys: ['6','7'],
        selectedKeys: ['1','3','6']
      }
    },
    methods: {
      change(targetKeys, direction, moveKeys){
        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
      },
      selectChange(sourceSelectedKeys, targetSelectedKeys) {
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys)
      }
    }
  }
</script>

<style scoped>

</style>
