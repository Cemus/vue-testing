const exercisesRoute = [
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
    component: () => import("../components/exercises/ExerciseEvents.vue"),
  },
  {
    path: "/exercises/more-events",
    name: "MoreEvents",
    component: () => import("../components/exercises/ExerciseMoreEvents.vue"),
  },
  {
    path: "/exercises/bug",
    name: "Bug",
    component: () => import("../components/exercises/ExerciseBug.vue"),
  },
];

export default exercisesRoute;
