import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import AssignmentList from './components/AssignmentList.js'
import AssignmentView from './components/AssignmentView'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/posts',
      component: AssignmentList
    },
    {
      path: '/post/:id',
      component: AssignmentView
    }
  ]
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/posts'
})

router.start(App, '#app')

