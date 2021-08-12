<template lang="pug">
.p-4
	h2 {{apiUrl}}
	Layout.w-10.h-10.bg-red-500
</template>

<script setup lang="ts">
import { Layout } from 'ant-design-vue';
import { ref, onMounted, onUnmounted } from 'vue';
let env: any = import.meta.env;
const apiUrl: any = ref('');
onUnmounted(() => {});
onMounted(() => {
	// 输出结果
	apiUrl.value = env.VITE_API_URL;
});
Layout;
</script>

<style></style>
