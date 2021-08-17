<template lang="pug">
.p-4
	h2 axios
	p {{respone}}
</template>

<script setup lang="ts">
import axios from 'axios';
import { login } from '@/api';
import { ref, onMounted, onUnmounted } from 'vue';

let env: any = import.meta.env;
const respone: any = ref('');
onUnmounted(() => {});
onMounted(() => {
	// 输出结果
	login({
		account: 'admin00',
		password: '1234qwer',
	}).then((res: any) => {
		console.log(res);
	});
});
</script>

<style></style>
