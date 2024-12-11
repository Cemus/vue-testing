<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">Créer un compte</h1>
    <form @submit.prevent="register" class="form-container">
      <div class="input-group">
        <label for="email" class="form-label">Adresse Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          class="input-field"
          required
        />
      </div>
      <div class="input-group">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="input-field"
          required
        />
      </div>
      <div class="input-group">
        <label for="confirmPassword" class="form-label"
          >Confirmez le mot de passe</label
        >
        <input
          type="password"
          v-model="confirmPassword"
          id="confirmPassword"
          class="input-field"
          required
        />
      </div>
      <button type="submit" class="submit-button">S'inscrire</button>
    </form>

    <p class="text-center mt-3">
      Vous avez déjà un compte ?
      <router-link to="/login" class="link-primary">Connectez-vous</router-link
      >.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

async function register() {
  if (password.value !== confirmPassword.value) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Inscription réussie !");
    router.push({ name: "Dashboard" }); // Redirection après inscription
  } catch (error) {
    alert("Erreur lors de l'inscription : " + error.message);
  }
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 1rem;
}

.form-label {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.input-field {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

.input-field:focus {
  border-color: #007bff;
  outline: none;
}

.submit-button {
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
}

.submit-button:hover {
  background-color: #0056b3;
}

.text-center {
  text-align: center;
}

.link-primary {
  color: #007bff;
  text-decoration: none;
}

.link-primary:hover {
  text-decoration: underline;
}
</style>
