<template>
  <h3>{{ name }}</h3>
  <div>
    <p>Phone number : {{ phone }}</p>
    <p>E-mail : {{ mail }}</p>
  </div>
</template>

<script setup>
const friendProps = defineProps({
  name: String,
  phone: String,
  mail: String,
});
</script>

<style scoped></style>
