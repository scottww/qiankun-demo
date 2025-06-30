<template>
  <div id="app">
    <h1>Main App</h1>
    <router-link to="/user">Go to User App</router-link>
    <router-view />  <!-- 显示 /user 路由组件 -->
    <div id="subapp-viewport"></div>
  </div>
</template>
