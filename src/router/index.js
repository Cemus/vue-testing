import { createRouter, createWebHistory } from "vue-router";
import exercisesRoute from "./exercises";
import lessonsRouter from "./lessons";
import { auth } from "../firebase/firebase";
import HomeView from "../views/HomeView.vue";
import ThreeDeeView from "../views/ThreeDeeView.vue";
import evalRoute from "./eval";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/3d",
      name: "3d",
      component: ThreeDeeView,
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
    ...evalRoute,
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
