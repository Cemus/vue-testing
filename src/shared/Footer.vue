<template>
  <footer>
    <p>Gros footer</p>
    <p>Date du jour : {{ date }}</p>
  </footer>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  setup() {
    const date = ref(new Date().toTimeString());
    const updateDate = () => (date.value = new Date().toTimeString());
    onMounted(() => {
      const interval = setInterval(() => {
        updateDate();
      }, 1000);
      onUnmounted(() => {
        clearInterval(interval);
      });
    });
    return {
      date,
    };
  },
};
</script>

<style></style>
