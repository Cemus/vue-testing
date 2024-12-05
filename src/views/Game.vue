<script setup>
import { TresCanvas } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
</script>

<template>
  <TresCanvas
    clear-color="#efebec"
    shadows
    alpha
    window-size
    preset="realistic"
  >
    <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="#c44960" />
    </TresMesh>

    <TresAmbientLight :intensity="1" />
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
