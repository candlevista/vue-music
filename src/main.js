import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import router from './router'
import 'common/stylus/index.styl'

fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
