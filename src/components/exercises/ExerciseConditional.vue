<template>
  <div>
    <h1>Rendu conditionnel</h1>
    <h2>Ma liste de course :</h2>
    <ul v-if="listVisible">
      <li
        v-for="(groceries, index) in grocerieList"
        key="{{ index }}"
        @click="deletegrocerie(index)"
      >
        {{ groceries }}
      </li>
    </ul>
    <button @click="listVisible = !listVisible">
      {{ listVisible ? "Masquer la liste" : "Afficher la liste" }}
    </button>
    <input v-model="grocerieText" />
    <button @click="addgrocerie()">Ajouter un produit</button>
    <p>{{ grocerieMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const grocerieText = ref("");
const grocerieList = ref([]);
const listVisible = ref(true);
const grocerieMessage = ref("");

const addgrocerie = () => {
  if (grocerieText.value) {
    grocerieMessage.value = `${grocerieText.value} ajouté.`;
    grocerieList.value.push(grocerieText.value);
    grocerieText.value = "";
  }
};

const deletegrocerie = (index) => {
  grocerieMessage.value = `${grocerieList.value[index]} supprimé.`;
  grocerieList.value.splice(index, 1);
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
}

li {
  cursor: pointer;
}
</style>
