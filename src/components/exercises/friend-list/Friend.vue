<template>
  <h3>{{ friendName }}</h3>
  <div>
    <p>Phone number : {{ friendPhone }}</p>
    <p>E-mail : {{ friendMail }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  friendName: String,
  friendPhone: String,
  friendMail: String,
});
</script>

<style scoped></style>
