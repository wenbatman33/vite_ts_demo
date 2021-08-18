<template lang="pug">
.p-4
	h5 script setup 寫法
	.my-4
		h5 Prop: {{ des }}
		p ref: {{ strRef }}
		p ref: {{ numRef }}
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
