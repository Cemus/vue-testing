<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Connexion</h1>
    <form @submit.prevent="login">
      <div class="form-group mb-3">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="form-control"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="password">Mot de passe</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-submit">Se connecter</button>
    </form>
    <p class="text-center mt-3">
      Vous n'avez pas encore de compte ?
      <router-link to="/register" class="link-primary"
        >Inscrivez-vous</router-link
      >.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push({ name: "Dashboard" }); // Redirection après connexion
  } catch (error) {
    alert("Erreur de connexion : " + error.message);
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--light);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: var(--dark);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--light);
  border-radius: 4px;
}

input:focus {
  border-color: var(--brand);
}

.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: var(--contrast);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  background-color: var(--light2);
}

.text-center {
  text-align: center;
}

.link-primary {
  color: var(--contrast);
  text-decoration: none;
}

.link-primary:hover {
  text-decoration: underline;
}
</style>
