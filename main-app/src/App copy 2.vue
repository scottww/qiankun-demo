<template>
  <div id="app">
    <MainMenu />
    <router-view />
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  components: { MainMenu }
}
</script>
