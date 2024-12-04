<template>
  <div class="page">
    <h2>Fonctions</h2>
    <div>
      <p>Nombre aléatoire : {{ rdmNumber }}</p>
      <p>Resultat de la fonction : {{ getResult() }}</p>
      <button v-on:click="updateRandomNumber">Générer un nombre</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const getRandomNumber = () => {
      return Math.floor(Math.random() * 999);
    };
    const getResult = () => {
      if (rdmNumber.value > 500) {
        return "loool";
      } else {
        return "xDDDD";
      }
    };
    const rdmNumber = ref(getRandomNumber());
    const result = ref(getResult());

    const updateRandomNumber = () => {
      rdmNumber.value = getRandomNumber();
      result.value = getResult();
    };

    return {
      getRandomNumber,
      rdmNumber,
      getResult,
      updateRandomNumber,
    };
  },
};
</script>
