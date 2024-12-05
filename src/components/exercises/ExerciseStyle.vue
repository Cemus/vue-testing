<template>
  <div class="main">
    <div
      class="card"
      :style="{ backgroundColor: color1 }"
      @click="toggleAlternativeColor(color1)"
    >
      <p>Carte bleue</p>
    </div>
    <div
      class="card"
      :style="{ backgroundColor: color2 }"
      @click="toggleAlternativeColor(color2)"
    >
      <p>Carte rose</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const color1 = ref("blue");
const color2 = ref("purple");

const toggleAlternativeColor = (color) => {
  if (color === color1.value) {
    if (color1.value === "red") {
      color1.value = "blue";
    } else {
      color1.value = "red";
    }
  } else {
    if (color2.value === "green") {
      color2.value = "purple";
    } else {
      color2.value = "green";
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-evenly;
}

.card {
  padding: 1rem 3rem;
  border-radius: 1rem;
  user-select: none;
}

.card:hover {
  cursor: pointer;
}
</style>
