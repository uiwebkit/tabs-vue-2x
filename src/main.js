import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/uni-\w*/];

new Vue({
  render: h => h(App),
}).$mount('#app')
