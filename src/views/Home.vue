<script lang="ts">
/**
 * @Author jihogrammer@gmail.com
 */
import { defineComponent, ref } from 'vue';
import { PATH, ROUTE } from '@/router/routes';
import router from '@/router';
import useStore from '@/store';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: ROUTE.HOME,
  components: { HelloWorld },
  setup() {
    const store = useStore();
    store.initMessage();
    return {
      routeAbout: () => router.push(PATH.ABOUT),
      message: ref(store.getMessage()),
    };
  },
});
</script>

<template>
  <div class="home" @click="routeAbout">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld :msg="message" />
    <Test />
  </div>
</template>
