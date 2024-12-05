<template>
  <h2>Un bug :</h2>
  <div>
    <button style="background-color: red" @click="reduceValue">-</button>
    <p>{{ nombre }}</p>

    <button style="background-color: green" @click="addValue">+</button>
  </div>
  <p>{{ testFunction() }}</p>

  <input v-model="name" />
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const nombre = ref(0);

const addValue = () => {
  nombre.value++;
};
const reduceValue = () => {
  nombre.value--;
};

const testFunction = () => {
  console.log("Fonction qui gère le NAME exécutée");
  if (name.value === "") {
    return "test";
  } else {
    return "Un autre test";
  }
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

input {
  align-self: center;
  max-width: 50%;
}
</style>
