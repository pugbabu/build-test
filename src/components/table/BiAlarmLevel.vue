<template>
<div class="biAlarmLevel">
    <div id="state" :class="enAlarmLevel"></div>
    <div class="text">{{zhAlarmLevel}}</div>
</div>
</template>

<script>
export default{
    name:'BiAlarmLevel',
    data(){
        return{
            enAlarmLevel:''
        }
    },
    props:{
        zhAlarmLevel:{
            type: String,
            default: '一级',
            required: true,
        },
    },
    methods:{
        setAlarmLevel:function() {
            switch (this.zhAlarmLevel) {
                case "一级":
                    this.enAlarmLevel = 'firstLevel';
                    break;
                case "二级":
                    this.enAlarmLevel = 'secondLevel';
                    break;
                case "三级":
                    this.enAlarmLevel = 'thirdLevel';
                    break;
                case "四级":
                this.enAlarmLevel = 'fourthLevel';
                    break;
                default:
                    break;
            }
        },
    },
    mounted(){
      this.setAlarmLevel()
    }
}
</script>

<style>
@import "../../styles/custom.css";
.biAlarmLevel{
    height: 18px;
}

/* 报警等级样式 */
#state{
    width: 12px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0px;
    box-shadow: 0 0 2px 0 var(--alarmLevelShadow);
}

/* 报警等级文本样式 */
.text{
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
    font-family: var(--fontFamily);
    font-size: var(--text);
}

/* 一级报警样式 */
.firstLevel{
    background: #f01414;
}

/* 二级报警样式 */
.secondLevel{
    background: #ff7700;
}

/* 三级报警样式 */
.thirdLevel{
    background: #ffc107;
}

/* 四级报警样式 */
.fourthLevel{
    background: #ffeb3b;
}
</style>