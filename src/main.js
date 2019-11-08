// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import Print from 'vue-print-nb'
import API from './index'
import 'ant-design-vue/dist/antd.css'
import bimessage from './components/infomessage/BiMessage/index'
import '../src/styles/common/CheckBox.css'

Vue.config.productionTip = false

Vue.prototype.$bimessage = bimessage
Vue.use(Antd)
Vue.use(Print);

Vue.use(API)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
