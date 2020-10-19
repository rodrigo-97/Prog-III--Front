import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "../src/store"
import vuex from "vuex"

Vue.use(vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')