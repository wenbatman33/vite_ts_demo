<template lang="pug">
.p-4
	h5 utils / commaFormat
	p {{price}}
	p {{priceFormat}}
	p {{priceDecimalFormat}}
</template>

<script setup lang="ts">
  import { commaFormat, commaDecimalFormat } from '@/utils';
  import { ref, onMounted, onUnmounted } from 'vue';

  const price = ref(9999.8374);
  const priceFormat = commaFormat(price.value);
  const priceDecimalFormat = commaDecimalFormat(price.value);

  onUnmounted(() => {});
  onMounted(() => {});
</script>

<style></style>
