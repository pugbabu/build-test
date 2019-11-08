import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BiTable from "../../examples/components/BiTable.vue"

import BiProgressCircle from "../../examples/components/TestProgress.vue"

Vue.use(Router)

export default new Router({
  routes: [
    //{
    //  path: '/',
    //  name: 'HelloWorld',
    //  component: HelloWorld
    //},
    {
      path: '/BiTable',
      component: BiTable
    },
    {
      path: '/BiProgress',
      component: BiProgressCircle
    }
  ]
})
