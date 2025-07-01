<!-- components/MainMenu.vue -->
<template>
  <div class="menu">
    <ul>
      <li v-for="menu in menus" :key="menu.name">
        <template v-if="menu.children">
          <div>{{ menu.name }}</div>
          <ul>
            <li v-for="child in menu.children" :key="child.path">
              <router-link :to="child.path">{{ child.name }}</router-link>
            </li>
          </ul>
        </template>
        <template v-else>
          <router-link :to="menu.path">{{ menu.name }}</router-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { mainMenu } from '@/config/menu';

export default {
  data() {
    return { menus: mainMenu };
  },
};
</script>
