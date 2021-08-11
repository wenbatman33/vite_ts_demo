<template lang="pug">
.p-4
	h2 socre: {{ state.socre }}
	.my-4
		p player: {{ state.user }}
		p shootTimes: {{ state.shootTimes }}
	a-button(type="dashed" @click="add") shoot ball
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';

defineProps({
	des: String,
});
interface IState {
	user: string;
	shootTimes: number;
	socre: number;
}
const state: IState = reactive({
	user: 'jordan',
	shootTimes: 0,
	socre: computed(() => state.shootTimes * 2),
});
const add = () => state.shootTimes++;
</script>

<style></style>
