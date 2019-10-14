import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import '../theme/index.css'
import htmlToPdf from '@/components/utils/htmlToPdf'

// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(htmlToPdf)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
