
<script>
  import BiCabinet from "./BiCabinet";

  export default {
    // 多机柜，可能包含多个子机柜
    name: "BiCabinetMultiple",

    props: {
      // 多机柜时的配置文件。此组件这个为遍历该数组创建各机柜。
      cabinetsConfiguration: {
        Type: Array
      },

      // 接口，接收模块的变化信息。此组件中不处理，传给子组件
      moduleChange:{
        Type: Object
      },

      // 接口， 接收电源的状态。此组件中不处理，传给子组件
      batterySwitch: {
        Type: Object
      },
    },

    methods: {
      emitEvent(id){
        this.$emit('eventFromMultipleCabinet',id)
      },
      // 传递 mouseup 事件
      emitMouseupEvent(name){
        this.$emit('mouseupEventFromMultipleCabinet', name);
      },
    },

    render(h, context) {
      const _this = this

      return h(
        'div',
        [
          _this.cabinetsConfiguration.map(function (item) {
            return h(
              BiCabinet,
              {
                props: {
                  // 机柜的证明配置，来自配置文件
                  frontConfiguration: item.front,
                  // 机柜的背面配置，来自于配置文件
                  backConfiguration: item.back,
                  // 机柜的地理信息， 暂未做
                  locationInfo: item.locationInfo,
                  // 机柜的状态变换， 作为接口开放
                  moduleChange: _this.moduleChange,
                  // 机柜的电源变化，
                  batterySwitch: _this.batterySwitch,

                  // 机柜的正反面， 来自于配置文件
                  twoSides: item.sides === "double" ? true :false
                },

                on: {
                  //  接收来自机柜的事件（双击），并向父组件传递
                  eventFromCabinet: (id) => {
                    _this.emitEvent(id)
                  },

                  // 接收来自机柜的事件（mouseup)， 并向父组件传递
                  mouseEventFromCabinet: (name) => {
                    _this.emitMouseupEvent(name)
                  }
                }
              }
            );
          })
        ]
      );
    }
  }
</script>

