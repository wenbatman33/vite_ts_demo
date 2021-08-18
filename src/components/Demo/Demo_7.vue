<template lang="pug">
.p-4
	h5 多個 store 用法
	p gameScroe: {{gameStore.gameScroe}}
	p block: {{gameStore.block}}
	p rebounds: {{gameStore.rebounds}}
	p assist: {{gameStore.assist}}
	p playName: {{gameStore.playName}}
	a-button(type="dashed" @click="addTwoPointShot") Two Point Shot
	a-button(type="dashed" @click="addThreepointShot") Three Point Shot
	a-button(type="dashed" @click="addBlock") addBlock 
	a-button(type="dashed" @click="addAssist") addAssist
	a-button(type="dashed" @click="addRebounds") addRebounds
	a-button(type="dashed" @click="getShotPlayer") getShotPlayer
</template>

<script setup lang="ts">
  import { useGameStore } from '@/store/gameStore';
  import { useUserStore } from '@/store/userStore';
  import { onMounted, onUnmounted, computed } from 'vue';

  const gameStore = useGameStore();
  const userStore = useUserStore();
  const twoPointShot: number = 2;
  const threepointShot: number = 3;

  const addTwoPointShot = () => gameStore.addGameScroe(twoPointShot);
  const addThreepointShot = () => gameStore.addGameScroe(threepointShot);
  const addBlock = () => gameStore.addBlock();
  const addAssist = () => gameStore.addAssist();
  const addRebounds = () => gameStore.addRebounds();
  const getShotPlayer = () => gameStore.getShotPlayer(userStore.name);
  onUnmounted(() => {});
  onMounted(() => {
    // 输出结果
  });
</script>

<style></style>
