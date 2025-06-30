<template>
  <nav class="main-menu">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/user/">用户子应用</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style scoped>
.main-menu {
  background: #333;
  padding: 10px;
}
.main-menu ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
.main-menu a {
  color: #fff;
  text-decoration: none;
}
</style>
