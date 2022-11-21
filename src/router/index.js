import Vue from 'vue'
import Router from 'vue-router'
import ListTodo from '@/components/ListTodo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListTodo',
      component: ListTodo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
