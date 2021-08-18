<template lang="pug">
.p-4
	h5 reactive ＆ toRefs 寫法
	.my-4
		p player: {{ user }}
		p shootTimes: {{ shootTimes }}
		p socre: {{ socre }}
	a-button(type="dashed" @click="add") shoot ball
</template>

<script setup lang="ts">
  import { computed, reactive, toRefs } from 'vue';

  defineProps({
    des: String,
  });
  interface IState {
    user: string;
    shootTimes: number;
    socre: number;
  }
  const state: IState = reactive({
    user: 'jordan',
    shootTimes: 0,
    socre: computed(() => state.shootTimes * 2),
  });
  const add = () => state.shootTimes++;

  const { user, shootTimes, socre } = toRefs(state);
</script>

<style></style>
