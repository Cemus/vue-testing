import { createRouter, createWebHistory } from "vue-router";
import exercisesRoute from "./exercises";
import lessonsRouter from "./lessons";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/3d",
      name: "3d",
      component: () => import("../views/threeDee.vue"),
    },
    ...lessonsRouter,
    ...exercisesRoute,
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});
export default router;
