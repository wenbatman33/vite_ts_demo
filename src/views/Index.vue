<template lang="pug">
.container.p-4
	.FLEX_C.CENTER
		h1 {{ msg }}
		img.w-10.my-10(:src='logo')
		a-button( @click="count++") count is: {{ count }}
	.grid.grid-cols-4.gap-4.my-4
		.col-span-1.bg-gray-100.rounded-xl.border
			Demo_1(des='demo des 1')
		.col-span-1.bg-gray-100.rounded-xl.border
			Demo_2(des='demo des 2')
		.col-span-1.bg-red-100.rounded-xl.border
			Demo_3(des='demo des 3')
		.col-span-1.bg-blue-100.rounded-xl.border
			Demo_4(des='demo des 4')
		.col-span-1.bg-blue-100.rounded-xl.border
			Demo_5(des='demo des 5')
		.col-span-1.bg-blue-100.rounded-xl.border
			Demo_6
		.col-span-1.bg-yellow-200.rounded-xl.border
			Demo_7
		.col-span-1.bg-yellow-200.rounded-xl.border
			Demo_8
		.col-span-1.bg-yellow-200.rounded-xl.border
			Demo_9
		.col-span-1.bg-yellow-200.rounded-xl.border
			Demo_10
		.col-span-1.bg-yellow-200.rounded-xl.border
			Demo_11

</template>

<script setup lang="ts">
  import { ref, defineProps } from 'vue';
  import Demo_1 from '@/components/Demo/Demo_1.vue';
  import Demo_2 from '@/components/Demo/Demo_2.vue';
  import Demo_3 from '@/components/Demo/Demo_3.vue';
  import Demo_4 from '@/components/Demo/Demo_4.vue';
  import Demo_5 from '@/components/Demo/Demo_5.vue';
  import Demo_6 from '@/components/Demo/Demo_6.vue';
  import Demo_7 from '@/components/Demo/Demo_7.vue';
  import Demo_8 from '@/components/Demo/Demo_8.vue';
  import Demo_9 from '@/components/Demo/Demo_9.vue';
  import Demo_10 from '@/components/Demo/Demo_10.vue';
  import Demo_11 from '@/components/Demo/Demo_11.vue';
  import logo from '@/assets/logo.png';

  defineProps({
    msg: String,
  });
  const count = ref(0);
</script>

<style scoped lang="scss"></style>
