<template>
    <div>
        {{name}}
        <a-select
            :style="{width: width+'px'}"
            :disabled="disabled"
            :selectName="name"
            :placeholder="placeholder"
            :showSearch="showSearch"
            :options="selectData"
            :value="selectValue"
            @change="onChange"
            @search="onSearch"
            @select="onSelect"
            @treeExpand="onTreeExpand"
        />
    </div>
</template>
<script>
export default {
    name:"BiSelect",
    props: {
        /** 下拉框的宽度 */
        width:{
            type:Number,
            default: 200
        },
        /** 是否可用 */
        disabled: {
            type:Boolean,
            default:false
        },
        /** 下拉框前缀名称 */
        selectName: {
            type:String,
            required:false
        },
        /** 默认文字 */
        placeholder: {
            type:String,
            default:'请选择'
        },
        /** 是否显示搜索框 */
        showSearch: {
            type:Boolean,
            default:false
        },
        /** 数据 */
        selectData: {
            type:Array,
            default:  () => []
        },
        /** 默认选择数据 */
        defaultValue: {
            type:String,
            required:false
        },
        /** 当提前选择数据 */
        value: {
            type:String,
            required:false
        }
    },
    created() {
        this.name = this.selectName
        if (typeof(this.defaultValue) == "undefined" && typeof(this.value) == "undefined") {
            this.selectValue = []
        }
        else if (typeof(this.defaultValue) == "undefined") {
            this.selectValue = this.value
        }
        else if (typeof(this.value) == "undefined") {
            this.selectValue = this.defaultValue
        }
        else {
            this.selectValue = this.defaultValue
            this.selectValue = this.value
        } 
    },
    data() {
        return {
            name:'',
            selectValue:''
        }
    },
    methods: {
      onChange(value) {
        this.selectValue = value;
        this.$emit('change',value);
      },
      onSearch(value) {
        this.$emit('search',value);
      },
      onSelect(value) {
        this.$emit('select',value);
      },
      onTreeExpand(value) {
        this.$emit('treeExpand',value);
      },
    },
}
</script>
<style lang="less"  src="../../styles/components/BiSelect.css">
</style>