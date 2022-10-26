import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/szukaj/:query",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/produkt/:id",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
  ],
});

export default router;
