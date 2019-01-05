import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Users from '@/components/Users'
import Test from '@/components/Test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/about',
      name: 'about',
      component: About
    },{
      path: '/test',
      name: 'test',
      component: Test
    },{
      path: '/users',
      name: 'users',
      component: Users
    },{
      path: '*',
      redirect: '/helloWorld'

    }


  ]
})
