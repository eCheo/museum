import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import ('@/components/login')
const index = () => import ('@/components/index')
const vcome = () => import ('@/components/vcome')
const linear = () => import ('@/components/linear')
const look = () => import ('@/components/look')
const lookExhibition = () => import('@/components/lookExhibition')
const findWe = () => import('@/components/findWe')
const lookArrange =() => import('@/components/lookArrange')
const gps = () => import('@/components/gps')
const yu = () => import('@/components/yu')
const register = () => import('@/components/register')

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/vcome',
      name: 'vcome',
      component: vcome
    },
    {
      path: '/look',
      name: 'look',
      component: look
    },
    {
      path: '/lookExhibition',
      name: 'lookExhibition',
      component: lookExhibition
    },
    {
      path:'/findWe',
      name:'findWe',
      component:findWe
    },
    {
      path:'/lookArrange',
      name:'lookArrange',
      component:lookArrange
    },
    {
      path:'/linear',
      name:'linear',
      component:linear
    },
    {
      path:'/gps',
      name:'gps',
      component:gps
    },
    {
      path:'/yu',
      name:'yu',
      component:yu
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
