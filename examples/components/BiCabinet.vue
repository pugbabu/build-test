<template>
  <div >
    输入 模块id
    <input v-model="inputModuleId" />
    <br />
    输入 模块状态
    <input v-model="inputModuleState" />
    <button @click="changeProps"> 切换板卡状态 </button>

    <br />
    输入 开关
    <input v-model="batteryId" />
    <br />
    输入 电源装填
    <input v-model="batteryState" />
    <button @click="changeProps1"> 旋转电源旋钮 </button>

    <BiCabinetComponent
      :height="900"
      :width="600"
      :cabinetsConfiguration="cabinetsConfiguration"
      :battery-switch="batteryStateObj"
      :module-change="moduleStateObj"
      @clicked="alertMethods"
      @mouseupEvent="mouseEvent"
    ></BiCabinetComponent>

  </div>
</template>

<script>
  // 导入配置数据
  import cabinetsConfiguration from "./cabinetConfigurations";


  export default {
    

    data(){
      return {
        
        cabinetsConfiguration:cabinetsConfiguration,
        moduleStateObj:{
          moduleId: '4005',
          moduleState: 'faulty'
        },

        inputModuleId: '',

        inputModuleState: '',

        batteryStateObj:{},

        batteryId: '',
        batteryState: ''


      }
    },

    mounted(){
      console.info(this.cabinetConfiguration)
    },

    methods: {

      alertMethods(id){
       alert(id)
      },

      changeProps(){
        this.moduleStateObj = {
          moduleId: this.inputModuleId,
          moduleState: this.inputModuleState
        }
      },
      changeProps1(){

        this.batteryStateObj = {
          batteryId: this.batteryId,
          batteryState: this.batteryState
        }
        console.info(this.batteryStateObj)
      },
      mouseEvent(name){
        console.info('test',name)
      }

    }
  }
</script>