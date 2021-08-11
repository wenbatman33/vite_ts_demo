<template lang="pug">
.p-4
	h2 {{apiUrl}}

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
let env: any = import.meta.env;

const apiUrl: any = ref('');
onUnmounted(() => {});
onMounted(() => {
	// 输出结果
	apiUrl.value = env.VITE_API_URL;
});
</script>

<style></style>
