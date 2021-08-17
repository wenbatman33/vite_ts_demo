<template lang="pug">
.p-4
	h2 axios
	p {{respone}}
</template>

<script setup lang="ts">
  import { login } from '@/api';
  import { ref, onMounted, onUnmounted } from 'vue';

  const respone = ref<T>('');
  onUnmounted(() => {});
  onMounted(() => {
    // 输出结果
    login({
      account: 'admin00',
      password: '1234qwer',
    }).then((res: unknown) => {
      console.log(res);
      respone.value = res;
    });
  });
</script>

<style></style>
