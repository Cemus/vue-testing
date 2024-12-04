import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      alias: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/à-propos",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/leçons",
      name: "Lesson",
      component: () => import("../views/Lessons.vue"),
    },
    {
      path: "/leçons/interpolation-texte",
      name: "TextInterpolation",
      component: () => import("../views/lessons/LessonTextInterpolation.vue"),
    },
    {
      path: "/exercices",
      name: "Exercises",
      component: () => import("../views/Exercises.vue"),
    },
    {
      path: "/exercices/exercices-texte",
      name: "ExerciceText",
      component: () => import("../views/exercises/ExerciseText.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
