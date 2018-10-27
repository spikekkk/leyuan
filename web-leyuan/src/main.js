import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Element, { size: 'small', zIndex: 3000 });

import router from './routers/router'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})