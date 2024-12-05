<template>
  <header>
    <h1><router-link to="/">Coucou</router-link></h1>
    <NavBar />
  </header>
</template>

<script>
import NavBar from "./NavBar.vue";

export default { components: { NavBar } };
</script>
