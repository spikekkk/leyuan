import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from '../views/login/index.vue';
import layout from '../views/layout/index.vue';

export default new Router({

  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },

{
  path: '/layout',
  name: 'layout',
  meta: {
    requireAuth: true, // 该路由项需要权限校验
  },
  component: layout
},


    {
      path: '*',
      redirect: '/login'
    },
  ]

})