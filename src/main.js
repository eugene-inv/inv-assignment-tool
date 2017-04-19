import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import AssignmentList from './components/AssignmentList'
import AssignmentView from './components/AssignmentView'

Vue.use(Router)

const router = new Router()

router.map({
  '/posts': {
    component: AssignmentList
  },

  '/post/:id': {
    component: AssignmentView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/posts'
})

router.start(App, '#app')

