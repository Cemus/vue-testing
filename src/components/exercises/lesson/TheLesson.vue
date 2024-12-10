<template>
  <h3>Lessons</h3>
  <ul>
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="{
        name: 'details',
        params: { id: item.id, title: item.name },
      }"
    >
      Lien vers {{ item.name }}
    </router-link>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const items = ref([
  { id: 1, name: "Élément 1" },
  { id: 2, name: "Élément 2" },
  { id: 3, name: "Élément 3" },
  { id: 44, name: "Élément 44" },
]);
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  height: 100%;
}
</style>
