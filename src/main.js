// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import nav from './components/Nav.vue'
import footer from './components/Footer.vue'

Vue.config.productionTip = false
Vue.component('navbar', nav)
Vue.component('Footer', footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
