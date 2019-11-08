<template>
  <div id="components-a-popconfirm-demo-placement" style="padding-left: 500px;padding-top: 200px">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <BiPopconfirm placement="topLeft" okText="Yes" cancelText="No" @confirm="confirm"
                    message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>TL</a-button>
      </BiPopconfirm>
      <BiPopconfirm okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>Top</a-button>
      </BiPopconfirm>
      <BiPopconfirm placement="topRight" okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>TR</a-button>
      </BiPopconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <BiPopconfirm placement="leftTop" okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>LT</a-button>
      </BiPopconfirm>
      <BiPopconfirm placement="left" okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>Left</a-button>
      </BiPopconfirm>
      <BiPopconfirm placement="leftBottom" okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>LB</a-button>
      </BiPopconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
      <BiPopconfirm placement="rightTop" okText="Yes" cancelText="No" @confirm="confirm" @cancel="cancel" :height="300" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
        </template>
        <a-button>RT</a-button>
      </BiPopconfirm>
      <BiPopconfirm placement="right"  okText="Yes" cancelText="No" @confirm="confirm" @cancel="cancel" :width="500" :height="200"
                    message="我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的我的"
      >
        <template slot="title">
          <p>{{text}}</p>
        </template>
        <a-button>Right</a-button>
      </BiPopconfirm>
      <BiPopconfirm placement="rightBottom" okText="Yes" cancelText="No" @confirm="confirm" @cancel="cancel" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
        </template>
        <a-button>RB</a-button>
      </BiPopconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <BiPopconfirm placement="bottomLeft" okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>BL</a-button>
      </BiPopconfirm>
      <BiPopconfirm placement="bottom" okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>Bottom</a-button>
      </BiPopconfirm>
      <BiPopconfirm placement="bottomRight" okText="Yes" cancelText="No" @confirm="confirm" message="我是对话框">
        <template slot="title">
          <p>{{text}}</p>
          <p>{{text}}</p>
        </template>
        <a-button>BR</a-button>
      </BiPopconfirm>
    </div>
  </div>
</template>
<script>


  export default {

    data () {
      return {
        buttonWidth: 70,
        text: 'Are you sure to delete this task? ',
      }
    },
    methods: {
      confirm (e) {
        console.info(e)
      },
      cancel(e){
        console.info(e)
      }
    },
  }
</script>
<style scoped>
  #components-a-popconfirm-demo-placement .ant-btn {
    width: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
