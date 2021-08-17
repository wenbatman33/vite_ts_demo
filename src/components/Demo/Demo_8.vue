<template lang="pug">
.p-4
	h5 {{apiUrl}}

</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  const env = import.meta.env;

  const apiUrl = ref<string>('');

  onUnmounted(() => {});
  onMounted(() => {
    // 输出结果
    apiUrl.value = env.VITE_API_URL;
  });
</script>

<style></style>
