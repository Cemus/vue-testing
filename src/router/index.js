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
      component: () =>
        import("../components/lessons/LessonTextInterpolation.vue"),
    },
    {
      path: "/lessons/directives",
      name: "Directives",
      component: () => import("../components/lessons/LessonDirectives.vue"),
    },
    {
      path: "/exercises",
      name: "Exercises",
      component: () => import("../views/Exercises.vue"),
    },
    {
      path: "/exercises/text",
      name: "ExerciceText",
      component: () => import("../components/exercises/ExerciseText.vue"),
    },
    {
      path: "/exercises/functions",
      name: "ExerciceFunction",
      component: () => import("../components/exercises/ExerciseFunction.vue"),
    },
    {
      path: "/exercises/profile",
      name: "ExerciceProfile",
      component: () => import("../components/exercises/ExerciseProfile.vue"),
    },
    {
      path: "/exercises/events",
      name: "Events",
      component: () => import("../components/exercises/ExerciseEvent.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
