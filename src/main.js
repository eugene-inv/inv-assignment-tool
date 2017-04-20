import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import AssignmentList from './components/AssignmentList'
import AssignmentView from './components/AssignmentView'
import CreateAssignment from './components/CreateAssignment'

Vue.use(Router)

const router = new Router()

router.map({
  '/posts': {
    component: AssignmentList
  },

  '/post/:id': {
    component: AssignmentView
  },

  '/create': {
    component: CreateAssignment
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/posts'
})

router.start(App, '#app')

