<template>
<div>
    <img :src = 'imgUrl' v-if="withIcon"/>
    <a-badge id='biBadge' :count = count :overflowCount = setOverflowCount() :title = title :class="{'hasIcon' : withIcon}">
       
    </a-badge>
</div>
  
</template>

<script>

export default {
    name: 'bi-badge',
    props: {
        //展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
        count: {
            type: String,
            default: '0'
        },
        //展示封顶的数字值
        overflowCount: {
            type: Number,
            default: 99
        },
        //设置鼠标放在状态点上时显示的文字
        title: {
            type: String,
        },
        //是否带有图标
        withIcon: {
            type: Boolean,
            default: true
        },
        //图标链接
        iconSrc: {
            type: String, 
            default: require('../../assets/报警.svg')
        }
      
    },
    data(){
        return{
            imgUrl: this.iconSrc
        }
    },
    methods: {
      
        setOverflowCount: function(){
            console.log(this.iconSrc);
            return Number(this.overflowCount)
        },
    }
}
</script>

<style src="../../styles/components/BiBadge.css">

</style>
