import Vue from "vue";
import Router from "vue-router";
import UserAppWrapper from "@/components/UserAppWrapper.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    // { path: '/user', component: { template: '<div>#subapp-viewport</div>' } },
    {
      path: "/user",
      component: UserAppWrapper,
    }
    // 其他主应用路由
  ],
});
