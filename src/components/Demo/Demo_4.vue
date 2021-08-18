<template lang="pug">
.p-4
	h5 watch 用法
	.my-4
		h6 gmaeName: {{ gmaeName }}
		p shootTimes: {{ time }}
		p toRef: {{ timeRef }}
</template>

<script setup lang="ts">
  import { toRefs, toRef, onMounted, onUnmounted, watch, reactive } from 'vue';

  defineProps({
    des: String,
  });
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
  watch(
    () => state.time,
    (newNum: number, oldNum: number) => {
      // 可觀察前後值
      // console.log('newNum: ' + newNum);
      // console.log('oldNum: ' + oldNum);
    }
  );
  const { gmaeName, time } = toRefs(state);
  const timeRef = toRef(state, 'time');

  onUnmounted(() => {
    clearInterval(timer);
  });
  onMounted(() => {
    timer = setInterval(() => {
      add();
    }, 1000);
  });
</script>

<style></style>
