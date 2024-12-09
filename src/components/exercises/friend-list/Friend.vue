<template>
  <button
    title="Click to display additional informations"
    type="button"
    @click="toggleVisibility(name)"
  >
    {{ name }}
  </button>
  <div v-if="!visibility">
    <p>Phone number : {{ phone }}</p>
    <p>E-mail : {{ mail }}</p>
  </div>
</template>

<script setup>
const friendProps = defineProps({
  name: String,
  phone: String,
  mail: String,
  visibility: Boolean,
  toggleVisibility: Function,
});
</script>

<style scoped></style>
