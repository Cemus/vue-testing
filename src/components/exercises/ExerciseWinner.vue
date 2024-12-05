<template>
  <h2>Numéro gagnant :</h2>
  <div>
    <h3 v-if="victory">VICTOIRE</h3>
    <h3>{{ text }} {{ currentNumber }}</h3>
  </div>

  <div>
    <button style="background-color: red" @click="add(1)">+1</button>

    <button style="background-color: green" @click="add(5)">+5</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const victory = ref(false);
const mysteryNumber = ref(Math.floor(Math.random() * (9 - 1) + 1));
const currentNumber = ref(0);

const text = ref("Votre nombre :");

const add = (value) => {
  currentNumber.value += value;
};

watch(currentNumber, (newCurrentNumber) => {
  if (newCurrentNumber === mysteryNumber.value) {
    text.value = `Victoire ! Le nombre mystère était le`;
    victory.value = true;
  } else {
    if (newCurrentNumber > mysteryNumber.value) {
      text.value = "Tu as dépassé le nombre de mystère. Ce n'était pas le";
      victory.value = false;
    } else {
      text.value = "Essaie encore, ce n'est pas ";
      victory.value = false;
    }
  }
});
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
