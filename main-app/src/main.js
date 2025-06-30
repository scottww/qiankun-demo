import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

registerMicroApps([
  {
    name: 'user-app',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/user',
  },
]);

start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
