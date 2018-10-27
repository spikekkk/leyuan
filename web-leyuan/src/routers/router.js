import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from '../views/login/index.vue';
import layout from '../views/layout/index.vue';

export default new Router({

    routes:[
        {
         path: '/login',
         name: 'login',
         component:Login
       },
      

       { path:'/components',
        name:'layout',
        component:layout
        } ,
    
        
        { path: '*', redirect: '/login' },
   ]
   
})


