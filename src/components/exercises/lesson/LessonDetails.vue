<template>
  <div>
    <h3>{{ props.id }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
});
</script>

<style lang="css" scoped></style>
