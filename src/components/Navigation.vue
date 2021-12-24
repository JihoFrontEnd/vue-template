<script setup lang="ts">
/**
 * @Author jihogrammer@gmail.com
 */
import { PATH, ROUTE } from '@/router/routes';
import { ref } from 'vue';

const home = ref({ path: PATH.HOME, name: ROUTE.HOME });
const about = ref({ path: PATH.ABOUT, name: ROUTE.ABOUT });
</script>

<template>
  <div id="nav">
    <router-link :to="home.path">{{ home.name }}</router-link> |
    <router-link :to="about.path">{{ about.name }}</router-link>
  </div>
</template>

<style lang="scss"></style>
