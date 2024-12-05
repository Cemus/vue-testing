const exercisesRoute = [
  {
    path: "/exercises",
    name: "ex",
    component: () => import("../views/Exercises.vue"),
  },
  {
    path: "/exercises/text",
    name: "ex-text",
    component: () => import("../components/exercises/ExerciseText.vue"),
  },
  {
    path: "/exercises/functions",
    name: "ex-func",
    component: () => import("../components/exercises/ExerciseFunction.vue"),
  },
  {
    path: "/exercises/profile",
    name: "ex-profile",
    component: () => import("../components/exercises/ExerciseProfile.vue"),
  },
  {
    path: "/exercises/events",
    name: "ex-events",
    component: () => import("../components/exercises/ExerciseEvents.vue"),
  },
  {
    path: "/exercises/more-events",
    name: "ex-more",
    component: () => import("../components/exercises/ExerciseMoreEvents.vue"),
  },
  {
    path: "/exercises/bug",
    name: "ex-bug",
    component: () => import("../components/exercises/ExerciseBug.vue"),
  },
  {
    path: "/exercises/winner",
    name: "ex-winner",
    component: () => import("../components/exercises/ExerciseWinner.vue"),
  },
];

export default exercisesRoute;
