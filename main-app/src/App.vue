<template>
  <div id="app">
    <MainMenu />
    <router-view />
    <!-- 显示 /user 路由组件 -->
    <!-- 子应用挂载点 -->
    <div id="subapp-viewport" style="min-height: 400px"></div>
  </div>
</template>
<script>
import MainMenu from "./components/MainMenu.vue";

export default {
  name: "App",
  components: { MainMenu },
};
</script>