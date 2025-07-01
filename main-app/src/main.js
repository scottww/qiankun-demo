import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

import { setupQiankunApps } from "./microApps/registerMicroApps";

Vue.config.productionTip = false;

setupQiankunApps(); // 👈 启动微应用

//注册子应用
registerMicroApps([
  {
    name: "user-app",
    entry: "//localhost:7101",
    container: "#subapp-viewport",
    activeRule: "/user",
  },
  {
    name: "user-app",
    entry: "//localhost:7101",
    container: "#subapp-viewport",
    activeRule: "/user/profile",
  },
]);

start();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
