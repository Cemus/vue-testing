<template>
  <footer>Coucou</footer>
</template>

<script setup>
import FooterNavBar from "./FooterNavBar.vue";
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

<style scoped>
footer {
  text-align: center;
  width: 100%;
}
</style>
