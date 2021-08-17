<template lang="pug">
.p-4
	h5 apiUrl: {{apiUrl}}
	p appVer: {{appVer}}
	Layout.w-10.h-10.bg-red-500
</template>

<script setup lang="ts">
  import { Layout } from 'ant-design-vue';
  import { ref, onMounted, onUnmounted } from 'vue';
  let env = import.meta.env;

  const apiUrl = ref<string>('');
  const appVer = ref<string>('');
  onUnmounted(() => {});
  onMounted(() => {
    // 输出结果
    apiUrl.value = env.VITE_API_URL;
    appVer.value = env.VITE_VER;
  });
  Layout;
</script>

<style></style>
