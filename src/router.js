import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/students-list',
      component: () => import('./views/StudentsList.vue')
    },
    {
      path: '/groups-list',
      component: () => import('./views/GroupsList.vue')
    },
    {
      path: '/teachers-list',
      component: () => import('./views/TeachersList.vue')
    },
    {
      path: '/schedules-list',
      component: () => import('./views/SchedulesList.vue')
    },
    {
      path: '/student-detail/:id',
      component: () => import('./views/StudentDetail.vue')
    },
    {
      path: '/group-schedule/:id',
      component: () => import('./views/GroupSchedule.vue')
    },
    {
      path: "*",
      component: Home
    }
  ]
})
