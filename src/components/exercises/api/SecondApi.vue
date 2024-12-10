<template>
  <div v-if="!informations"><h3>Loading...</h3></div>
  <div v-else>
    <h3>
      Météo de {{ informations.city_info.name }} ({{
        informations.city_info.country
      }})
    </h3>
    <h4>
      Aujourd'hui (le {{ informations.current_condition.date }} à
      {{ informations.current_condition.hour }} heure)
    </h4>
    <p>{{ informations.current_condition.condition }}</p>
    <p>Température actuelle : {{ informations.current_condition.tmp }}</p>
    <div>
      <p>Température maximale : {{ informations.fcst_day_0.tmax }}°C</p>
      <p>Température minimale : {{ informations.fcst_day_0.tmin }}°C</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  fetchAPI: Function,
});
const informations = ref(null);

onMounted(async () => {
  informations.value = await props.fetchAPI(
    `https://prevision-meteo.ch/services/json/toulouse`
  );
  console.log(informations);
});

onUnmounted(() => {
  console.log("Le composant est DE-MON-TE");
});
</script>

<style lang="css" scoped></style>
