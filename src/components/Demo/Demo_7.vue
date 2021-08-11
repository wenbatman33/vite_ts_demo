<template lang="pug">
.p-4
	h2 {{userStore.name}}
	h2 {{userStore.id}}
	h2 {{userStore.socre}}
	a-button(type="dashed" @click="increment") shoot ball
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import { onMounted, onUnmounted, computed } from 'vue';

const userStore = useUserStore();
const increment = () => userStore.increment();
onUnmounted(() => {});
onMounted(() => {
	// 输出结果
});
</script>

<style></style>
