<template lang="pug">
.p-4
	h5 watchEffect 用法 
	h5 監聽 14秒後停止
	.my-4
		p gmaeName: {{ gmaeName }}
		p times: {{ time }}
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, watchEffect, reactive, toRefs } from 'vue';

  defineProps({ des: String });

  interface IState {
    gmaeName: string;
    time: number;
  }

  const state: IState = reactive({
    gmaeName: 'NBA',
    time: 0,
  });

  let timer: any;
  const add = () => state.time++;
  watchEffect(() => {
    // 這裡只監測 watch 變化後的值
    state.time >= 14 ? clearInterval(timer) : null;
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  onMounted(() => {
    timer = setInterval(() => {
      add();
    }, 1000);
  });
  const { gmaeName, time } = toRefs(state);
</script>

<style></style>
