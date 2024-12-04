<template>
  <h2>Les événements :</h2>
  <div>
    <h4>Ajouter une valeur spécifique :</h4>
    <input type="number" v-model="valueToAdd" />
  </div>
  <div>
    <button class="left" @click="reduceValue">Moins</button>
    <p>
      Le nombre : <span>{{ nombre }}</span>
    </p>
    <button class="right" @click="addValue">Plus</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const nombre = ref(0);
    const valueToAdd = ref(1);
    const addValue = () => {
      nombre.value += parseInt(valueToAdd.value);
    };
    const reduceValue = () => {
      nombre.value -= parseInt(valueToAdd.value);
    };
    const addSpecificValue = (value) => {
      valueToAdd.value = value;
    };
    return {
      nombre,
      addValue,
      reduceValue,
      addSpecificValue,
      valueToAdd,
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
