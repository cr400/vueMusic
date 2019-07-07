import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from './api'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(MintUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
