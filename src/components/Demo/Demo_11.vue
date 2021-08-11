<template lang="pug">
.p-4
	h2 axios
	p {{respone}}
</template>

<script setup lang="ts">
import { mockTest } from '@/api';
import { ref, onMounted, onUnmounted } from 'vue';

let env: any = import.meta.env;
const respone: any = ref('');
onUnmounted(() => {});
onMounted(() => {
	// 输出结果
	mockTest({}).then((res: any) => {
		console.log(res);
		respone.value = res.data.list;
	});
});
</script>

<style></style>
