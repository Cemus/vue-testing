<script setup>
import { TresCanvas, useRenderLoop, vLog } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import { onMounted, onUnmounted, reactive, ref, shallowRef } from "vue";

const torusRef = shallowRef(null);
const cubeRef = shallowRef(null);
const dirLightRef = ref(null);
const torusPos = ref([0, 0, 0]);
const runAnimation = ref(false);
const { onLoop } = useRenderLoop();

const state = reactive({
  clearColor: "#efebec",
  alpha: false,
  windowSize: true,
});

onMounted(() => {
  torusPos.value[0] = torusRef.value.position.x;
  torusPos.value[1] = torusRef.value.position.y;
  torusPos.value[2] = torusRef.value.position.z;
  window.addEventListener("keydown", moveTorus);
});

const moveTorus = (event) => {
  if (torusRef.value) {
    if (!runAnimation.value) {
      const step = 0.1;
      switch (event.key) {
        case "z":
          torusPos.value[1] += step;
          break;
        case "s":
          torusPos.value[1] -= step;
          break;
        case "q":
          torusPos.value[0] -= step;
          break;
        case "d":
          torusPos.value[0] += step;
          break;

        default:
          break;
      }
    }
    if (event.key == "r") {
      runAnimation.value = !runAnimation.value;
    }
  }
};

const customValue = ref(1);

onLoop(({ delta, elapsed }) => {
  if (torusRef.value) {
    if (runAnimation.value === true) {
      /*       torusRef.value.rotation.x += Math.sin(delta);
      torusRef.value.rotation.y += Math.sin(delta);
      torusRef.value.rotation.z += Math.sin(elapsed); */
      console.log(torusRef.value);
      console.log(torusRef.value.geometry.parameters);
      customValue.value +=
        customValue.value > 1 ? -Math.random() * 0.1 : Math.random() * 0.5;
    } else {
      torusRef.value.position.x = torusPos.value[0];
      torusRef.value.position.y = torusPos.value[1];
      torusRef.value.position.z = torusPos.value[2];
    }
  }
});

onUnmounted(() => {
  dirLightRef.castShadow = false;
});
</script>

<template>
  <TresCanvas v-bind="state" preset="realistic">
    <TresPerspectiveCamera :position="[0, 4, 16]" :look-at="[0, 0, 0]" />
    <TresMesh ref="torusRef" cast-shadow :position="[0, 4, 0]">
      <TresTorusGeometry :args="[customValue, 0.5, 16, 32]" />
      <TresMeshToonMaterial color="#c44960" />
    </TresMesh>
    <TresMesh ref="sphereOneRef" cast-shadow :position="[2, 4, 0.5]">
      <TresSphereGeometry :args="[1, 8, 8, 8]" />
      <TresMeshToonMaterial color="#c44960" />
    </TresMesh>
    <TresMesh ref="sphereTwoRef" cast-shadow :position="[2, 4, -0.5]">
      <TresSphereGeometry :args="[1, 8, 8, 8]" />
      <TresMeshToonMaterial color="#c44960" />
    </TresMesh>
    <TresMesh
      receive-shadow
      :position="[0, -3, 0]"
      :rotation="[-Math.PI / 2, 0, 0]"
    >
      <TresPlaneGeometry :args="[10, 10, 10, 10]" />
      <TresMeshToonMaterial color="#4690cd" />
    </TresMesh>
    <TresDirectionalLight
      cast-shadow
      ref="dirLightRef"
      :intensity="1"
      :position="[0, 5, 0]"
    />
    <TresAmbientLight :intensity="0.1" />
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
