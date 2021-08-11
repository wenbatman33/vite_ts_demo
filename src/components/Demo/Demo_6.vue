<template lang="pug">
.p-4
	h2 Mock 用法
	p {{state.data}}

</template>

<script setup lang="ts">
import Mock from 'mockjs';

import { onMounted, onUnmounted, reactive } from 'vue';

const state = reactive({
	data: null as unknown,
});
defineProps({
	des: String,
});
onUnmounted(() => {});
onMounted(() => {
	const data = Mock.mock({
		'list|1-10': [
			{
				// 属性 id 是一个自增数，起始值为 1，每次增 1
				'id|+1': 1,
				'string|1-10': '★',
			},
		],
	});
	state.data = data;
});
</script>

<style></style>
