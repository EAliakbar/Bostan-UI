import Vue from 'vue'
import App from './App.vue'
import Tooltip from 'vue-directive-tooltip'

Vue.config.productionTip = false;
Vue.use(Tooltip, {
  delay: 0,
  placement: 'right',
});

new Vue({
  render: h => h(App)
}).$mount('#app');
