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
    input1.value = "Hello World";
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
  border: dashed green 0.2rem;
  padding: 1rem;
  font-size: larger;
  letter-spacing: 1.2rem;
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
</style>
