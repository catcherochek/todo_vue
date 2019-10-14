import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "material-icons"
/*import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)*/


import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

Vue.config.productionTip = false
import store from './store/store'//ИМПОРТИРУЕМ ЭЛЕМЕНТ VUEX С СОЗДАННЫМИ ПАРАМЕТРАМИ
new Vue({
  store,//РЕГИСТРИРУЕМ ОБЪЕКТ В ОСНОВНОМ КЛАССЕ
  router,
  render: h => h(App)
}).$mount('#app')
