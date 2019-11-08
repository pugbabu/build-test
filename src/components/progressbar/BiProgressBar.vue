<template>
  <div>
    <a-progress :percent="percent" :status="status" :showInfo="showInfo" />
  </div>
</template>

<script>
export default {
    data () {
        return {}
    },
    // 通过props接收父组件传递过来的进度条占比、进度状态
    props:{
        // 进度条占比
        percent: {
            type: Number,
            default: 100
        },
        // 进度状态
        status: {
            type: String,
            default: "normal"
        },
        showInfo: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: "line"
        }
    }
}
</script>

<style src="../../styles/components/BiProgressBar.css">

</style>