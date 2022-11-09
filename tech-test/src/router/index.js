import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/sign-in',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/sign-up',
      name: 'register',
      component: RegisterPage
    }
  ]
})

router.beforeEach((to,from,next)=>{
  let access_token= localStorage.getItem("access_token")

  if((to.name === 'login' || to.name === 'register') && access_token){
    next('')
  }else if((to.name=== "home") && !access_token){
    next('/sign-in')
  }else{
    next()
  }
})

export default router
