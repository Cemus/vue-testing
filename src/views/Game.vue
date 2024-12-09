<script setup>
import { TresCanvas, useRenderLoop } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import { onMounted, ref, shallowRef } from "vue";

const torusRef = shallowRef(null);
const torusPos = ref([0, 0, 0]);
const runAnimation = ref(false);
/* const torusTexture = useLoader(TextureLoader, "./metalBaseColor.png");
 */
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

onMounted(() => {
  torusPos.value[0] = torusRef.value.position.x;
  torusPos.value[1] = torusRef.value.position.y;
  torusPos.value[2] = torusRef.value.position.z;
  window.addEventListener("keydown", moveTorus);
});

const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
  if (torusRef.value) {
    if (runAnimation.value === true) {
      torusRef.value.rotation.x += Math.sin(delta);
      torusRef.value.rotation.y += Math.sin(delta);
      torusRef.value.rotation.z += Math.sin(elapsed);

      /*       torusRef.value.rotation.y += 0.01;*/
    } else {
      torusRef.value.position.x = torusPos.value[0];
      torusRef.value.position.y = torusPos.value[1];
      torusRef.value.position.z = torusPos.value[2];
    }
  }
});
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
    <TresMesh ref="torusRef" cast-shadow>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="#c44960" />
    </TresMesh>
    <TresMesh
      receive-shadow
      :position="[0, -3, 0]"
      :rotation="[-Math.PI / 2, 0, 0]"
    >
      <TresPlaneGeometry :args="[10, 10, 10, 10]" />
      <TresMeshStandardMaterial color="#4690cd" />
    </TresMesh>
    <TresDirectionalLight cast-shadow :intensity="1" :position="[0, 5, 0]" />
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
