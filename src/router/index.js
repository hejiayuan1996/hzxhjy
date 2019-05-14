import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import user from '@/components/user'
import phone from '@/components/phone'
import tablt from '@/components/tablt'
import computer from '@/components/computer'
import slo from '@/components/slo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      name:'index',
      component: index
    },
    {
      path:'/slo',
      name:'slo',
      component: slo
    },
    {
      path:'/home',
      name:'home',
      component: home,
      children: [
        {
          path: "phone",
          component: phone
        },
        {
          path: "tablt",
          component: tablt
        },
        {
          path: "computer",
          component: computer
        }, {
          path: "",
          component: phone
        }

      ]
    },
    {
      path:'/user/:id',
      name:'user',
      component: user
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
