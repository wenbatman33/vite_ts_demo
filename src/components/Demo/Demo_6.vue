<template lang="pug">
.p-4
	h5 store 用法
	p {{userStore.name}}
	p {{userStore.id}}
	p {{userStore.socre}}
	a-button(type="dashed" @click="increment") shoot ball
</template>

<script setup lang="ts">
  import { useUserStore } from '@/store/userStore';
  import { onMounted, onUnmounted } from 'vue';

  const userStore = useUserStore();
  const increment = () => userStore.increment();

  onUnmounted(() => {});
  onMounted(() => {});
</script>

<style></style>
