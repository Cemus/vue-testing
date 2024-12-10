<template>
  <div>
    <h3>{{ props.title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
});
</script>

<style lang="css" scoped></style>
