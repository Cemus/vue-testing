<template>
  <h1>About ^^</h1>
  <p>{{ truc }}</p>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const truc = ref("MACHIN");
    return {
      truc,
    };
  },
};
</script>
