<template lang="pug">
.p-4
	h2 watchEffect 用法
	h2 gmaeName: {{ state.gmaeName }}
	.my-4
		p shootTimes: {{ state.time }}
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watchEffect, reactive } from 'vue';

defineProps({
	des: String,
});
interface IState {
	gmaeName: string;
	time: number;
}
const state: IState = reactive({
	gmaeName: 'NBA',
	time: 0,
});
let timer: any;
const add = () => state.time++;
watchEffect(() => {
	// 這裡只監測 watch 變化後的值
	state.time >= 10 ? clearInterval(timer) : null;
});
onUnmounted(() => {
	clearInterval(timer);
});
onMounted(() => {
	timer = setInterval(() => {
		add();
	}, 1000);
});
</script>

<style></style>
