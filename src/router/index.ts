import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/dashboard/index.vue";


const routes = [
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;