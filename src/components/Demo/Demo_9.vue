<template lang="pug">
.p-4
	h5 axios respone
	p.truncate {{list}}
</template>

<script setup lang="ts">
  import { hotLive } from '@/api';
  import { reactive, toRef, onMounted } from 'vue';

  interface Ilive {
    avatar: string;
    city: string;
    is_follow: boolean;
    islive: number;
    level_anchor_info: unknown;
    liveclassid: number;
    nums: string;
    signature: string;
    stream: string;
    thumb: string;
    title: string;
    type: number;
    uid: number;
  }
  const state = reactive({
    list: [] as Ilive[],
  });

  onMounted(() => {
    hotLive().then((res: any) => {
      state.list = res?.data?.data?.list;
    });
  });
  const list = toRef(state, 'list');
</script>

<style></style>
