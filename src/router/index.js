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
    ...lessonsRouter,
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },

    ...exercisesRoute,
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});
console.log(exercisesRoute.map((route) => route));
export default router;
