// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.prototype.$http = axios
Vue.use(iview)
Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://192.168.0.152:8080/api/front/'
axios.defaults.withCredentials = true


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
