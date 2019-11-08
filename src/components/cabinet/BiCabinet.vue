<script>
  import BiCage from "./BiCage";
  export default {
    // 机柜三级结构的最上级——机柜。
    name: "BiCabinet",

    props: {
      // 接口，接收正面配置文件,必须
      frontConfiguration: {
        Type: Array,
        require: true
      },

      // 接收反面配置文件,默认为空
      backConfiguration: {
        Type: Array,
        default: () => []
      },

      // 是否有两面
      twoSides: {
        Type: Boolean,
        default: 'false'
      },

      // 机柜的地理位置信息
      locationInfo: {
        Type: Object,
        // 自定义校验器。 传入的值必须包括这几个属性
        validator(value){
          return (typeof value.stationName !== 'undefined') && (typeof value.stationId !== 'undefined') && (typeof value.roomIndex !== 'undefined')
            && ( typeof value.row !== 'undefined') && (typeof value.column !== 'undefined');
        }
      },

      // 接口， 接收电源的变化
      batterySwitch: {
        Type: Object
      },

      // 模块状态变化对象
      moduleChange: {
        Type: Object
      }
    },

    data(){
      return {
        // 机柜配置参数，实质为机笼的列表
        cabinetConfiguration: this.frontConfiguration,

        //双面机柜时，当前显示面是否为机柜的正面
        isFront: true,

        // 板卡状态信息集合，元素为对象。对象属性包括模块id(moduleId)和模块状态(moduleState)
        cabinetHealthArray: [],

        // 机柜的正面状态
        frontSideState: '',
        // 机柜的反面状态
        backSideState: '',

        // 保存机柜的电源状态， 切换时进行更新
        savedBatterySwitch: this.batterySwitch,

        // 将配置信息字符串化，用进行正反面的查找
        frontConfigurationStr :JSON.stringify(this.frontConfiguration) ,
        backConfigurationStr: JSON.stringify(this.backConfiguration)
      }
    },

    mounted(){
      console.info(this.locationInfo.stationName)
    },

    // 使用时间勾子去解决。
    // 每当data里的数据发生变化时，渲染机柜的模块状态 和 电源旋钮状态。
    updated(){
      // console.info(this.$vnode)
      console.info(this.cabinetConfiguration)
      this.updateModuleHealth(this);
      this.changeBatterySwitch(this.savedBatterySwitch)
    },


    methods: {
      // 事件传输给父组件
      // 传递 click 事件
      emitEvent(id){
        this.$emit('eventFromCabinet',id)
      },
      // 传递 mouseup 事件
      emitMouseupEvent(name){
        this.$emit('mouseEventFromCabinet', name);
      },

      // 正反面切换函数
      // !! 切换的时候要重新进行状态设置，因为切换回来都是重新根据配置文件配置  !!
      switchAnotherSlice(){
        this.isFront = !this.isFront;
         this.cabinetConfiguration =  []

        // 使用异步语句，先清空再执行，否则正反面的节点树会重合
        setTimeout(() => {
          if ( this.cabinetConfiguration.length === 0 ) {
             this.cabinetConfiguration = this.isFront ? this.frontConfiguration : this.backConfiguration
            // alert("清空成功")
          } else {
            // 切换失败
            this.cabinetConfiguration = this.isFront ? this.frontConfiguration : this.backConfiguration
            alert("清空失败")
          }
        }, 3)
      },

      // 获取指定ref值的节点
      // 双面机柜时，需要指定机柜的根组件
      getChildrenNode(root,moduleNode){
        let goOn = true;
        let resultNode = null;
        let getNode = function (currentNode, node) {

          if (currentNode.$refs[node]) {
            resultNode = currentNode.$refs[node]
            goOn = false;
            return resultNode;
          } else {
            let currentNodes = currentNode.$vnode.componentInstance.$children;
            for (let j = 0; j <currentNodes.length ; j++) {
              if( !goOn  ){
                return resultNode;
              }
              getNode(currentNodes[j],node)
            }
          }
        }
        let node = getNode(root, moduleNode)
        return node;
      },

      // 根据输入的状态变量，修改状态。
      changeModuleStateByArgs(moduleStateObj){
        let node = this.getChildrenNode(this, moduleStateObj.moduleId);
         console.info(node)
        if( node === null || typeof node === "undefined" ){
          return ;
        }
        moduleStateObj.moduleState === 'healthy' && (node.style.background ='#37AB60')
        moduleStateObj.moduleState === 'faulty' && (node.style.background ='#E50000')
        moduleStateObj.moduleState === 'offline' && (node.style.background ='#999999')
      },

      // 修改电源的状
      changeBatterySwitch(batterySwitch){
        let node = this.getChildrenNode(this, batterySwitch.batteryId);
        if( node === null || typeof node === "undefined" ){
          return ;
        }
        batterySwitch.batteryState === 'onlyA' && (node.style.transform = 'rotate(315deg)')
        batterySwitch.batteryState === 'onlyB' && (node.style.transform = 'rotate(45deg)')
        batterySwitch.batteryState === 'both' && (node.style.transform = 'rotate(0deg)')
      },

      // 根据健康状况重新渲染模块状态
      updateModuleHealth(){
        const _this = this;
        this.cabinetHealthArray.forEach(function (item) {
          _this.changeModuleStateByArgs(item)
        })
      },
    },

    watch:{
      //  监视父组件传来的值
      moduleChange: function () {

        const moduleStateObj = this.moduleChange

        // 模块监控
        this.changeModuleStateByArgs(moduleStateObj);

        // 更新正反面的健康状况。因为需要区分正反面，所以要正反面标记
        // 这里非正面及反面，默认模块id有效!!!
        let whichSide ;
        whichSide =  this.frontConfigurationStr.includes(moduleStateObj.moduleId) ? 'front' : 'back' ;

        // 机柜健康状况监控
        // 先删除同名模块
        this.cabinetHealthArray = this.cabinetHealthArray.filter(function (item) {
          // 遍历的同时删除所有同名模块
          return item.moduleId !== moduleStateObj.moduleId;
        })
        // 根据状态判断下一步
        if( moduleStateObj.moduleState === 'faulty' || moduleStateObj.moduleState === 'offline' ){
          this.cabinetHealthArray.push({
            moduleId: moduleStateObj.moduleId,
            moduleState: moduleStateObj.moduleState,
            side: whichSide
          })
        }

        // 更新数组后，更新正反面的健康状况
        let hasFaultyModule ;
        // 健康状况集合里，是否有正面模块处于faulty状态
        hasFaultyModule = this.cabinetHealthArray.some(function (item) {
          // 如果存在处于faulty状态的正面模块
          return item.side === 'front'&& item.moduleState === 'faulty'
        })
        // 根据上面的遍历结果，设置标记。如果有正面模块处于faulty状态，则标记设为faulty；反之设为healthy
        this.frontSideState = !hasFaultyModule ? 'healthy' : 'faulty'

        // 健康状况集合里，是否有背面模块处于faulty状态
        hasFaultyModule = this.cabinetHealthArray.some(function (item) {
          // 如果存在处于faulty状态的背面模块
          return item.side === 'back' && item.moduleState === 'faulty'
        })
        // 根据上面的遍历结果，设置标记。如果有背面模块处于faulty状态，则标记设为faulty；反之设为healthy
        this.backSideState = !hasFaultyModule ? 'healthy' : 'faulty'
      },

      batterySwitch: function () {
        this.savedBatterySwitch = this.batterySwitch;
        this.changeBatterySwitch(this.batterySwitch);
      }
    },

    render(h, context) {
      const cages = this.cabinetConfiguration;
      let _this = this;
      return h('div',
        {
          style: {
            height: '540px',
            display: 'table-cell',
            'margin-right': '15px'
          }
        },[
        h(
          'button',
          {
            on:{click:_this.switchAnotherSlice},
            style:{
              display: _this.twoSides ? 'block' : 'none'
            }
            },
          ['切换板卡']),
        h(
          // cabinet的根元素为table,对应表格中的table
          'div',{
            // cabinet的样式，这些样式与内容无关
            'class':'bi-cabinet',
          },
          /*
         *
         *  遍历table节点的子节点。
         *  调用BiCage组件
         *
         * */
          [
            cages.map(function (cage) {
              return h(
                BiCage,
                {
                  props: {
                    cageConfiguration: cage.slots,
                    type: cage.type
                  },
                  on: {
                    // 接收来自机笼的事件（双击），并向父组件传递
                    eventFromCage:(id)=>{
                      _this.emitEvent(id)
                    },

                    // 接收来自机笼的事件（mouseup)， 并向父组件传递
                    mouseEventFromCage: (name) => {
                      _this.emitMouseupEvent(name);
                    }
                  }
                })
            })
          ])
      ]);
    }
  }
</script>

<style lang="less" src="../../styles/components/BiCabinet.css">

</style>
