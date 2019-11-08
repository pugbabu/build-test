<template>
  <div class="bi-modal"
       :style="{height:height+'px', width: width+'px'}"
       v-show="visible">
    <div class="bi-modal-header">{{title}}
      <div class="bi-modal-x"
           @click="cancelButton"
      >
        <img src="../../styles/common/iconfont/font/close.svg"/>
      </div>
    </div>
    <div class="bi-modal-body" :style="{height:height - 84 +'px'}">
      <slot></slot>
    </div>
    <div class="bi-modal-footer">
      <bi-button class="bi-modal_button"
                 name="取消"
                 type="default"
                 size="medium"
                 @click="okButton"
      ></bi-button><bi-button class="bi-modal_button"
                 name="确定"
                 type="primary"
                 size="medium"
                 @click="cancelButton"
      ></bi-button>
    </div>
  </div>
</template>

<script>
  import BiButton from "../button/BiButton";
  export default {
    name: "BiModal",
    components: {BiButton},
    props: {
      title:{
        type: String,
        require: true
      },
      height: {
        type: Number,
        default: 400
      },
      width: {
        type: Number,
        default: 300
      },

    },
    data(){
      return{
        visible: true
      }
    },
    methods: {
      okButton(event){
        this.visible = false
        this.$emit("ok",event)
      },
      cancelButton(event){
        this.visible = false
        this.$emit("cancel",event)
      }
    }
  }
</script>

<style  src="../../styles/components/BiModal.css">

</style>
