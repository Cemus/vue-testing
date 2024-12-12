<template>
  <nav>
    <nav>
      <router-link to="/">Accueil</router-link>
      |
      <router-link to="/lessons">Leçons</router-link>
      |
      <router-link to="/exercises">Exercices</router-link>
      |
      <router-link to="/3d">3D</router-link>
    </nav>
  </nav>
  <nav v-if="!isConnected">
    <router-link to="/register">Register</router-link>
    |
    <router-link to="/login">Login</router-link>
  </nav>
  <nav v-else>
    <button type="button" @click="logout()">Logout</button>|
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const isConnected = ref(false);

const checkAuth = () => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      isConnected.value = true;
    } else {
      isConnected.value = false;
    }
  });
};

async function logout() {
  isConnected.value = false;
  await signOut(auth);
}

onMounted(() => {
  checkAuth();
});
</script>

<style scoped>
* {
  user-select: none;
}

button {
  background-color: var(--contrast);
  border: none;
  border-radius: 0.25rem;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
}
</style>
