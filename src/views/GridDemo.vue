<template lang="pug">
.w-full.my-8
	.bg-gray-100
		h2 flex排版
		.FLEX_C
			.m-1.p-1.bg-red-200.CENTER(v-for='index in 8') {{index}}

		.FLEX_R
			.m-1.p-1.bg-blue-200(v-for='index in 8') {{index}}

		.FLEX_R.justify-end
			.m-1.p-1.bg-blue-200(v-for='index in 8') {{index}}

		.BETWEEN
			.w-full.m-1.p-1.bg-green-200(v-for='index in 8') {{index}}

		.CENTER
			.m-1.p-1.bg-yellow-200(v-for='index in 8') {{index}}

		.CENTER_C.bg-gray-300.h-52
			.m-1.p-1.bg-yellow-400(v-for='index in 1') {{index}}
		
		.grid.grid-cols-8.gap-4.my-4
			.col-span-1.bg-gray-400.CENTER(v-for='index in 8') {{index}}

</template>

<script setup lang="ts">
  import { ref, defineProps } from 'vue';

  defineProps({
    des: String,
  });
  const msg = ref('hello world');
</script>

<style></style>
