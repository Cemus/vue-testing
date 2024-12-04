<template>
  <div>
    <h5>Inline Templating Mode : Composition</h5>
    <!-- Avec String interpolation {{}} le code HTML n'est pas interprété par le navigateur -->
    <p class="text-center">{{ unTemplateLivre }}</p>
    <!-- Directive v-html pour afficher du code HTML contenu dans une variable String unTemplateLivre -->
    <p v-html="unTemplateLivre" class="text-center"></p>
  </div>
  <div>
    <h5>Attribute Binding Mode : Composition</h5>
    <!-- Ici on relie l'attribut href avec notre variable leLien -->
    <a v-bind:href="leLien" class="text-center">LIEN DYNAMIQUE</a>
    <!-- Notation raccourcie -->
    <a :href="leLien" class="text-center">LIEN DYNAMIQUE</a>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const unTemplateLivre = ref('<h1>Les mémoires de Steven Seagal</h1>')
const leLien = ref('https://www.google.com')
</script>

<style scoped lang="css"></style>
