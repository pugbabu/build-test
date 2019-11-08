<template>
    <div>
        <a-checkbox 
            :disabled="disabled"
            :checked="value"
            :defaultChecked="defaultChecked"
            :indeterminate="indeterminate"
            @change="onChange">
            {{checkboxName}}
        </a-checkbox>
    </div>
</template>
<script>
export default {
    name:"BiCheckBox",
    props: {
        /** 是否可用 */
        disabled: {
            type:Boolean,
            default:false
        },
        /**当前是否选中 */
        checked: {
            type:Boolean,
            default:false
        },
        /** 默认是否选中 */
        defaultChecked: {
            type:Boolean,
            default:false
        },
        /** 设置 indeterminate 状态，只负责样式控制 */
        indeterminate: {
            type:Boolean,
            default:false
        },
        /** 后缀名称 */
        checkboxName: {
            type:String,
            required:false
        },
    },
    methods: {
      onChange(e) {
        if(`${e.target.checked}` == 'true') {
            this.value = true
        }
        else {
            this.value = false
        }
        this.$emit('change',e);
      }
    },
    created() {
        this.value = this.checked;
        if (this.defaultChecked == true || this.checked == true) {
            this.value = true
        }
        else {
            this.value = false
        } 
    },
    data() {
        return {
            value:false
        }
    },
}
</script>
<style lang="less"  src="../../styles/components/BiCheckBox.css">
</style>