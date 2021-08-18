<template lang="pug">
.p-4
	h5 image error event
	img.w-20.h-20(src='http://localhost:8888/xxx.png'  @error='errorImg')
</template>

<script setup lang="ts">
  import { errorImg } from '@/utils';
</script>

<style></style>
