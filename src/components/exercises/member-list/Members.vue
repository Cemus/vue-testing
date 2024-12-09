<template>
  <button title="Click to display additional informations" type="button">
    {{ nameMember }}
  </button>
  <div v-if="!visibility">
    <p>Phone number : {{ phone }}</p>
    <p>E-mail : {{ mail }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visibility = ref(false);
const memberProps = defineProps({
  nameMember: {
    type: String,
    required: true,
  },
  phoneMember: {
    type: String,
    required: true,
  },
  mailMember: {
    type: String,
    required: true,
  },
  premiumMember: {
    type: Boolean,
    required: false,
    default: 0,
    validator: Function((value) => value === "abc"),
  },
});
</script>

<style scoped></style>
