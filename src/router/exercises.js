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
  {
    path: "/exercises/style",
    name: "ex-style",
    component: () => import("../components/exercises/ExerciseStyle.vue"),
  },
  {
    path: "/exercises/style-2",
    name: "ex-style-2",
    component: () => import("../components/exercises/ExerciseStylePartTwo.vue"),
  },
  {
    path: "/exercises/dynamic-style",
    name: "ex-dynamic-style",
    component: () =>
      import("../components/exercises/ExerciseDynamicStyling.vue"),
  },
  {
    path: "/exercises/for",
    name: "ex-for",
    component: () => import("../components/exercises/ExerciseFor.vue"),
  },
  {
    path: "/exercises/conditional",
    name: "ex-conditional",
    component: () => import("../components/exercises/ExerciseConditional.vue"),
  },
  {
    path: "/exercises/friend-list",
    name: "ex-friends",
    component: () =>
      import("../components/exercises/friend-list/FriendList.vue"),
  },
  {
    path: "/exercises/members-list",
    name: "ex-members",
    component: () =>
      import("../components/exercises/member-list/MembersList.vue"),
  },
  {
    path: "/exercises/api",
    name: "ex-api",
    component: () => import("../components/exercises/api/ApiMaster.vue"),
  },
  {
    path: "/exercises/lesson",
    name: "ex-lesson",
    component: () => import("../components/exercises/lesson/TheLesson.vue"),
  },
  {
    path: "/exercises/lesson/details/:id/",
    name: "details",
    props: true,
    component: () => import("../components/exercises/lesson/LessonDetails.vue"),
  },
];

export default exercisesRoute;
