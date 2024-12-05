<template>
  <h1>Home ^^</h1>
  <p>{{ truc }}</p>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const truc = ref("MACHIN CHOSE");
    return {
      truc,
    };
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>
