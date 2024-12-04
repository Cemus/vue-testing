<template>
  <div class="page">
    <h3>Constante :</h3>
    <p>{{ constante }}</p>
    <h3>Tableau :</h3>
    <ul>
      <li v-for="mot in tableau">{{ mot }}</li>
    </ul>
    <h3>Objet :</h3>
    <ul>
      <li v-for="(valeur, nom) in objet">{{ valeur }} : {{ nom }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const constante = "Salut";
    const tableau = ["Blabla", "Bla", "Blablabla", "bla"];
    const objet = { truc: "machin", chose: "bidule" };
    return {
      constante,
      tableau,
      objet,
    };
  },
};
</script>
