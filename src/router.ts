import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import Index from '@/views/Index.vue'
import GridDemo from '@/views/GridDemo.vue'

const routes: Array<RouteRecordRaw> = [
	{ path: "/",   name: "Index",   component: Index  },
	{ path: "/grid", name: "GridDemo", component: GridDemo },
	{ path: '/:catchAll(.*)', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;