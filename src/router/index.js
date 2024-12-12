import { createRouter, createWebHistory } from "vue-router";
import exercisesRoute from "./exercises";
import lessonsRouter from "./lessons";
import { auth } from "../firebase/firebase";

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
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterPageView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginPageView.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
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

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!currentUser) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
