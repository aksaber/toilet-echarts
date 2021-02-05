import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Manager from '@/components/manager'
import Center from '@/components/center'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Center,
      component: Center
    },
    {
        path: '/manager',
        name: Manager,
        component: Manager
    },
    {
        path: '/center',
        name: Center,
        component: Center
    }
  ]
})
