<script setup lang="ts">
/**
 * @Author jihogrammer@gmail.com
 */
import { useRouter } from 'vue-router';
import { PATH } from '@/router/routes';
import { ref } from 'vue';

const email = ref('jihogrammer@gmail.com');
const profile = ref('https://avatars.githubusercontent.com/u/75299843?v=4');
const router = useRouter();
const routeHome = () => router.push(PATH.HOME);
</script>

<template>
  <section>
    <img :src="profile" alt="profile" @click="routeHome" />
    <p>
      🙏 Contact: <em>{{ email }}</em>
    </p>
    <p>
      <a href="https://github.com/Jihogrammer" target="_blank">Github</a> |
      <a href="https://jihogrammer.tistory.com" target="_blank">Blog</a>
    </p>
  </section>
</template>
