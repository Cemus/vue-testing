<template>
  <div class="main">
    <div
      class="card"
      :style="{ backgroundColor: color1 }"
      @click="color1 === 'blue' ? (color1 = 'red') : (color1 = 'blue')"
    >
      <p>Carte {{ color1 }}</p>
    </div>
    <div
      class="card"
      :style="{ backgroundColor: color2 }"
      @click="color2 === 'purple' ? (color2 = 'green') : (color2 = 'purple')"
    >
      <p>Carte {{ color2 }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const color1 = ref("blue");
const color2 = ref("purple");
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-evenly;
}

.card {
  padding: 1rem 3rem;
  border-radius: 1rem;
  width: 100px;
  height: 52px;
  user-select: none;
  text-align: center;
}

.card:hover {
  cursor: pointer;
}
</style>
