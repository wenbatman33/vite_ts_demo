import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import { clearPending } from "@/utils/http";

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
router.beforeEach((to, from, next) => {
	clearPending()
	next()
})

export default router;