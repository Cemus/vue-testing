<template>
  <h2>Les événements :</h2>
  <div>
    <h4>Ajouter une valeur spécifique :</h4>
    <input type="number" v-model="valueToAdd" />
  </div>
  <div>
    <button class="left" @click="reduceValue(valueToAdd)">Moins</button>
    <p>
      Le nombre : <span>{{ nombre }}</span>
    </p>
    <button class="right" @click="addValue(valueToAdd)">Plus</button>
  </div>
  <br />
  <div>
    <h3>{{ uneString }}</h3>
    <input v-on:input="capterInput($event)" type="text" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const nombre = ref(0);
    const valueToAdd = ref(1);

    const addValue = (toAdd) => {
      nombre.value += parseInt(toAdd);
    };
    const reduceValue = (toAdd) => {
      nombre.value -= parseInt(toAdd);
    };

    const uneString = ref("Hello");
    const capterInput = (event) => {
      console.log(event);
      uneString.value = event.target.value;
    };
    return {
      nombre,
      addValue,
      reduceValue,
      valueToAdd,
      uneString,
      capterInput,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
