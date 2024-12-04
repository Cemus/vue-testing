import { createRouter, createWebHistory } from "vue-router";

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
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/lessons",
      name: "Lesson",
      component: () => import("../views/Lessons.vue"),
    },
    {
      path: "/lessons/interpolation-text",
      name: "TextInterpolation",
      component: () => import("../views/lessons/LessonTextInterpolation.vue"),
    },
    {
      path: "/lessons/directives",
      name: "Directives",
      component: () => import("../views/lessons/LessonDirectives.vue"),
    },
    {
      path: "/exercises",
      name: "Exercises",
      component: () => import("../views/Exercises.vue"),
    },
    {
      path: "/exercises/text",
      name: "ExerciceText",
      component: () => import("../views/exercises/ExerciseText.vue"),
    },
    {
      path: "/exercises/functions",
      name: "ExerciceFunction",
      component: () => import("../views/exercises/ExerciseFunction.vue"),
    },
    {
      path: "/exercises/profile",
      name: "ExerciceFunction",
      component: () => import("../views/exercises/ExerciseProfile.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
