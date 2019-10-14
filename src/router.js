import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading, {
  // props
  color: 'green'
},{
  // slots
});

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ './views/Login.vue')
    }

  ]
});


router.beforeEach((to, from, next) => {
    document.mymsg =   Vue.$loading.show();
   next();
});
router.afterEach((to, from) => {
  // ...
  ///ffs();

    document.mymsg.hide();


});

export default router;