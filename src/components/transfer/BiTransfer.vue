<template>
  <div>
    <a-transfer
      :listStyle="objectStyle"
      :dataSource="dataSource"
      :titles="['Source', 'Target']"
      :targetKeys="currentTargetKeys"
      :selectedKeys="currentSelectedKeys"
      @change="handleChange"
      @selectChange="handleSelectChange"
      :render="item=>item.title"
    />
  </div>
</template>
<script>
  export default {

    props: {

      /** 一侧穿梭框的宽度（单位px） */
      width: {
        Type: Number,
        default: 200
      },

      /** 穿梭框的高度（单位px） */
      height: {
        Type: Number,
        default: 280
      },

      /** 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。 */
      dataSource: {
        Type: Array,
        default: ()=>[]
      },

      /** 被选中的项 */
      selectedKeys: {
        Type: Array,
        default: ()=>[]
      },

      /** 显示在右侧框数据的key集合 */
      targetKeys: {
        Type: Array,
        default: ()=>[]
      }
    },

    data () {
      return {
        /** 样式属性 */
        objectStyle:{},
        /**  */
        currentSelectedKeys:[],

        currentTargetKeys: []
      }

    },

    mounted(){
      this.objectStyle = {
        'height': this.width + 'px',
        'width': this.height + 'px'
      };
      this.currentSelectedKeys = this.selectedKeys;
      this.currentTargetKeys = this.targetKeys;
    },

    methods: {
      /**
       *   点击移动按键时触发此方法
       *   nextTargetKeys: 右侧分选框的所有数据的键值（移动后的结果）
       *   moveKeys: 被移动数据的键
       *   direction: 移动方向
       *
       * */
      handleChange(nextTargetKeys, direction, moveKeys) {
        this.currentTargetKeys = nextTargetKeys
        /*        console.log('targetKeys: ', nextTargetKeys);
                console.log('direction: ', direction);
                console.log('moveKeys: ', moveKeys);*/
        // 具体要传什么
        this.$emit("change",nextTargetKeys,direction,moveKeys)
      },

      /**
       *
       *   点击分选框中的checkbox时 触发此方法
       *   sourceSelectedKeys: 左侧框中 被选中数据的键
       *   targetSelectedKeys: 右侧选中 被选中数据的键
       *
       * */
      handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
        this.currentSelectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]
        /*        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
                console.log('targetSelectedKeys: ', targetSelectedKeys);*/
        this.$emit("selectChange",sourceSelectedKeys, targetSelectedKeys)
      },
      handleScroll(direction, e) {
        /*console.log('direction:', direction);
        console.log('target:', e.target);*/
      },
      /*
      handleDisable(disabled) {
        this.disabled = disabled
      },
      */
    },
  }
</script>

<style lang="less" src="../../styles/components/BiTransfer.css"></style>
<style lang="less" src="../../styles/common/CheckBox.css"></style>
