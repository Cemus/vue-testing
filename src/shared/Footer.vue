<template>
  <footer>
    <p>Gros footer</p>
    <p>Date et heure du jour : {{ date }}</p>
  </footer>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const date = ref(new Date().toLocaleString());
const updateDate = () => (date.value = new Date().toLocaleString());
onMounted(() => {
  const interval = setInterval(() => {
    updateDate();
  }, 1000);
  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style></style>
