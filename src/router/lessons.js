const lessonsRouter = [
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
];

export default lessonsRouter;
