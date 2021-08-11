<template lang="pug">
.container
	.grid.grid-cols-12.my-4
		.col-span-1
			router-link.text-xl(to='/') index
		.col-span-1
			router-link.text-xl(to='/grid') grid
	router-view
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
</script>
