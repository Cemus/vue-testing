<template>
  <main>
    <div>
      <h3>Hello world</h3>
      <input v-model="input1" />
      <p :class="detectWords()">{{ input1 }}</p>
    </div>
    <div>
      <h3>Couleur</h3>
      <input v-model="input2" />
      <p :style="{ backgroundColor: input2 }">
        {{ input1 }}
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const input1 = ref("");
const input2 = ref("");

const detectWords = () => {
  let detectedWords = "";
  if (input1.value.toUpperCase().includes("HELLO")) {
    detectedWords += " activeHello";
  }
  if (input1.value.toUpperCase().includes("WORLD")) {
    detectedWords += " activeWorld";
  }
  if (detectedWords.includes("activeHello activeWorld")) {
    detectedWords = "activeHelloWorld";
    input1.value = "HELLO WORLD";
  }
  return detectedWords;
};
</script>

<style scoped>
.activeWorld,
.activeHello {
  font-size: larger;
  letter-spacing: 1rem;
}
.activeHelloWorld {
  position: relative;
  border: dashed green 0.2rem;
  padding: 1rem;
  font-size: larger;
  letter-spacing: 1.2rem;
  animation: lolilol infinite 2s;
  animation-timing-function: ease-in-out;
  top: 0;
}
p {
  transition: all;
  transition-duration: 0.3s;
  border-radius: 0.2rem;
}

.activeHelloWorld::after {
  position: relative;
  content: "👨‍💻🌐";
  top: 0;
  left: 0;
}

.activeWorld::after {
  position: relative;
  content: "🗺️⁀જ✈︎";
  top: 0;
  left: 0;
}

.activeHello::after {
  position: relative;
  content: "👋😊";
  top: 0;
  left: 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@keyframes lolilol {
  0% {
    top: 0px;
  }
  50% {
    top: -8px;
  }
  100% {
    top: 0px;
  }
}
</style>
