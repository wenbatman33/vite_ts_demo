<template lang="pug">
.p-4
	h5 env 使用方法
	p apiUrl: {{apiUrl}}
	p appTitle: {{appTitle}}
</template>

<script setup lang="ts">
  let env = import.meta.env;
  const apiUrl = env.VITE_API_URL;
  const appTitle = env.VITE_TITLE;
</script>

<style></style>
