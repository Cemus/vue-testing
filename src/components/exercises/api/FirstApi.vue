<template>
  <div v-if="!informations"><h3>Loading...</h3></div>

  <div>
    <h3>Pokémon :</h3>
    <ul v-for="info in informations">
      <li>
        {{ info.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const props = defineProps({
  fetchAPI: Function,
});
const informations = ref(null);
onMounted(async () => {
  const result = await props.fetchAPI(`https://pokeapi.co/api/v2/pokemon/`);
  informations.value = result.results;
});

onUnmounted(() => {
  console.log("Le composant est DE-MON-TE");
});
</script>

<style lang="css" scoped></style>
