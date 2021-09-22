import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
   path:'/',
   redirect:'/login'
  },
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  routes
})
//挂在路由导航守卫
router.beforeEach((to,from,next)=>{
//to表示将要访问的路径,如果不是去往login，要获取token令牌
//from代表从哪个路径跳转而来
//next是一个函数，表示放行
//next()放行 
//next('./login')强制跳转

//如果是访问login，直接next
if(to.path === '/login') return next()
//如果不是直接访问login，那要获取token判断token是否为空，如果为空强制跳转到登陆页，如果存在token直接next，也就是39行
const tokenStr = window.sessionStorage.getItem('token')
if(!tokenStr) return next('/login')
next()
})
export default router
