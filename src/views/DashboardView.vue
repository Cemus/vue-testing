<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="container">
    <h1>Tableau de Bord</h1>
    <h2>Cette page n'est accessible qu'une fois connecté</h2>
    <p>Bienvenue dans votre tableau de bord !</p>
    <p>Dans cette page il y aura des trucs ultra secrets</p>
    <button @click="logout" class="btn-logout">Se déconnecter</button>
  </div>
</template>

<script setup>
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";

const isLoading = ref(true);

const router = useRouter();

async function logout() {
  await signOut(auth);
  router.push({ name: "Home" }); // Redirection après déconnexion
}

const checkAuth = () => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      isLoading.value = false;
    } else {
      router.push("./");
    }
  });
};

onBeforeMount(() => {
  checkAuth();
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: var(--dark);
}

h1,
h2,
p {
  text-align: center;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--brand);
}

p {
  font-size: 16px;
  margin-bottom: 15px;
}

.btn-logout {
  padding: 10px 20px;
  background-color: var(--contrast);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-logout:hover {
  background-color: #c82333;
}

.text-center {
  text-align: center;
}
</style>
