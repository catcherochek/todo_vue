import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*import "material-icons"
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)*/


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
