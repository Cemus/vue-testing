<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    |
    <router-link to="/lessons">Leçons</router-link>
    |
    <router-link to="/exercises">Exercices</router-link>
    |
    <router-link to="/3d">3D</router-link>
  </nav>
</template>

<script></script>

<style scoped>
* {
  user-select: none;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
</style>
