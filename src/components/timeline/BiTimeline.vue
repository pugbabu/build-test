<template>
<div class="bi-timeline">
  <a-timeline>
    <a-timeline-item v-for="(item,index) in dataObject"  :key="index" :color="item.state">
      {{item.text}}
    </a-timeline-item>
  </a-timeline>
</div>
</template>

<script>
  export default {
    name: "BiTimeline",

    props: {
      /**  时间轴界面描述文本 */
      texts:{
        Type: Array,
        /** 我觉得这里默认为空没有意义，应该是"require:true"， 下同 */
        default:()=>[],
        /** 校验函数，数组中的每个元素都应该为字符串 */
        validator(value){
          for (let i=0;i<value.length;i++){
            if( typeof value[i] != 'string'){
              return false;
            }
          }
          return true;
        }
      },
      /** 时间轴节点状态 */
      states: {
        Type: Array,
        /** 我觉得这里默认为空没有意义，应该是"require:true"， 下同 */
        default:()=>[],
        /** 校验函数，数组中的每个元素的可选值有'finished', 'processing', 'pending', */
        validator(value) {
          for (let i=0;i<value.length;i++){
            if( ['finished', 'processing', 'pending'].indexOf(value[i]) == -1 ){
              return false;
            }
          }
          return true;
        }
      }
    },

    data(){
      return {
        /** 将项目中的状态参数转化为ant-design的状态参数，并存入此数组中 */
        antStates: [],
        /** 对象数组，每个对象包括状态信息和文本信息 */
        dataObject:[]
      }
    },

    mounted() {
      // 将本项目的状态数据换成ant-design中的状态数据（green,red,blue)
      for(let i=0;i<this.states.length;i++){
        this.states[i] === 'finished' && this.antStates.push('green');
        this.states[i] === 'processing' && this.antStates.push('red');
        this.states[i] === 'pending' && this.antStates.push('blue');
      }
      // 将这两个数组拼接成对象数组，对象的属性为状态和文本
      if( this.states.length != this.texts.length){
        alert("text 和 states 长度不一致")
      }
      else {
        for(let i=0;i<this.texts.length;i++){
          this.dataObject.push({'text':this.texts[i],'state':this.antStates[i]})
        }
      }
    }
  }
</script>

<style lang="less" src="../../styles/components/BiTimeline.css">

</style>
