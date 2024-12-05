<template>
  <div class="main">
    <div
      class="card"
      :class="[isFirstActive ? 'firstActive' : 'firstInactive']"
      @click="
        {
          isFirstActive = !isFirstActive;
        }
      "
    >
      <p>Carte {{ color1 }}</p>
    </div>
    <div
      class="card"
      :class="[isSecondActive ? 'secondActive' : 'secondInactive']"
      @click="isSecondActive = !isSecondActive"
    >
      <p>Carte {{ color2 }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const color1 = ref("blue");
const color2 = ref("purple");

const isFirstActive = ref(false);
const isSecondActive = ref(false);
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

.firstActive {
  background-color: red;
}

.firstInactive {
  background-color: aqua;
}

.secondActive {
  background-color: green;
}

.secondInactive {
  background-color: purple;
}
</style>
