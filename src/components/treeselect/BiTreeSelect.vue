<template>
    <div class="bi-treeselect">
        {{name}}
        <a-tree-select
            v-icon:that="that"
            :id="id"
            :style="{width: width+'px'}"
            :disabled="disabled"
            :selectName="name"
            :multiple=true
            :maxTagCount="maxTagCount"
            :placeholder="placeholder"
            :treeDefaultExpandAll="treeDefaultExpandAll"
            :treeCheckable="treeCheckable"
            :treeData="selectData"
            :value="selectValue"
            @change="onChange"
            @search="onSearch"
            @select="onSelect"
            @treeExpand="onTreeExpand"
            @click="dropUp"
        />
        <a-icon 
            type="down" 
            :class="iconStyle"
            @click="onIconClick"
        />
    </div>
</template>
<script>
export default {
    name:"BiTreeSelect",
    props: {
        /** 下拉框的宽度 */
        width:{
            type:Number,
            default: 200
        },
        treeSelectId:{
            type:String,
            required: true
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
        /** 显示最大标签数 */
        maxTagCount: {
            type:Number,
            default:1
        },
        /** 默认文字 */
        placeholder: {
            type:String,
            default:'请选择'
        },
        /** 是否默认展开 */
        treeDefaultExpandAll: {
            type:Boolean,
            default:true
        },
        /** 是否有checkbox */
        treeCheckable: {
            type:Boolean,
            default:true
        },
        /** 数据 */
        selectData: {
            type:Array,
            default:  () => []
        },
        /** 默认选择数据 */
        defaultValue: {
            type:Array,
            default: () => []
        },
        /** 当提前选择数据 */
        value: {
            type:Array,
            default: () => []
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
      dropUp() {
        this.iconStyle = 'bi-treeselect-dropUp-icon'
      },
      dropDown() {
        this.iconStyle = 'bi-treeselect-dropDown-icon'
      },
      onIconClick(value) {  
        this.IconClick = true
        if (this.iconStyle == 'bi-treeselect-dropDown-icon') {
            let treeSelect = document.getElementById(this.id);
            treeSelect.click();
        }
        else {
        }
      }
    },
    directives:{ 
      icon: {
        bind(el, binding) {
            let that = binding.value;
            let treeSelectClick = false
            el.addEventListener('click', function() {
                if (that.IconClick == true) {
                    that.IconClick = false
                }
                else {
                    if (el.getAttribute('aria-expanded')) {
                    that.iconStyle = 'bi-treeselect-dropUp-icon'
                    } else {
                        that.iconStyle = 'bi-treeselect-dropDown-icon'
                    }
                }
                treeSelectClick = true
            });
            document.body.addEventListener('click', (e) => {
                if (e.isTrusted == true) {
                    let isChildTree = false
                    for (let index = 0; index < e.path.length; index++) {
                        let element = e.path[index].className
                        if(element != "" && typeof(element) != "undefined" && typeof(element) != "object") {
                            if (element.includes(" ant-select-tree-child-tree") == true) {
                                isChildTree = true
                                break
                            }
                        }
                    }
                    if (isChildTree == true || treeSelectClick == true) {
                        treeSelectClick = false
                    }
                    else {
                        that.iconStyle = 'bi-treeselect-dropDown-icon'
                    }
                }
                else {

                }
            });
        }
      }
    },
    created() {
        this.id = this.treeSelectId
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
            name: '',
            id :'',
            selectValue: [],
            iconStyle: 'bi-treeselect-dropDown-icon',
            that: this,
            IconClick: false
        }
    },
}
</script>
<style lang="less"  src="../../styles/components/BiTreeSelect.css">
</style>