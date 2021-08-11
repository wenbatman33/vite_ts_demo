<template lang="pug">
.p-4
	h2 ref
	.my-4
		h5 Prop: {{ des }}
		p {{ strRef }}
		p {{ numRef }}
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps({
	des: String,
});
const strRef = ref('hello world');
const numRef = ref(123);
</script>

<style></style>
