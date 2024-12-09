<script setup>
import { TresCanvas } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import { onMounted, ref } from "vue";
const torusRef = ref(null);
const torusPos = ref([0, 0, 0]);

const moveTorus = (event) => {
  if (torusRef.value) {
    const step = 0.1;
    switch (event.key) {
      case "ArrowUp":
        torusPos.value[1] += step;
        break;
      case "ArrowDown":
        torusPos.value[1] -= step;
        break;
      case "ArrowLeft":
        torusPos.value[0] -= step;
        break;
      case "ArrowRight":
        torusPos.value[0] += step;
        break;
      default:
        break;
    }
  }
};
onMounted(() => {
  torusPos.value[0] = torusRef.value.position.x;
  torusPos.value[1] = torusRef.value.position.y;
  torusPos.value[2] = torusRef.value.position.z;
  console.log(torusRef.value.position);
  window.addEventListener("keydown", moveTorus);
});

const animate = () => {
  if (torusRef.value) {
    torusRef.value.position.x = torusPos.value[0];
    torusRef.value.position.y = torusPos.value[1];
    torusRef.value.position.z = torusPos.value[2];
  }

  requestAnimationFrame(animate);
};

animate();
</script>

<template>
  <TresCanvas
    clear-color="#efebec"
    shadows
    alpha
    window-size
    preset="realistic"
  >
    <TresPerspectiveCamera :position="[3, 3, 16]" :look-at="[0, 0, 0]" />
    <TresMesh ref="torusRef">
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="#c44960" />
    </TresMesh>
    <TresMesh :position="[0, -3, 0]" :rotation="[-Math.PI / 2, 0, 0]">
      <TresPlaneGeometry :args="[10, 10, 10, 10]" />
      <TresMeshStandardMaterial color="#f7f7f7" />
    </TresMesh>

    <TresAmbientLight :intensity="0.2" />
    <OrbitControls />
  </TresCanvas>
  <router-link to="/" class="button">Retour à l'accueil</router-link>
</template>

<style scoped>
.button {
  text-align: center;
  z-index: 100;
  background-color: #9eaa74;
  align-self: center;
  margin-top: auto;
  width: 125px;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  text-decoration: none;
  border-style: none;
  border-radius: 0.2rem;
  transition: all;
  transition-duration: 0.2s;
}

.button:hover {
  width: 150px;
}
</style>
