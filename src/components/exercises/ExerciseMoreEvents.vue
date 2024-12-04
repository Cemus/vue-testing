<template>
  <div>
    <h2>Encore des events</h2>
    <input v-on:keyup="getInputs($event, 'one')" />
    <p>{{ input1 }}</p>
    <input v-on:keyup.escape="getInputs($event, 'two')" />
    <p>{{ input2 }}</p>
    <button @click="throwAlert">Alerte !</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const input1 = ref("");
    const input2 = ref("");

    const throwAlert = () => {
      alert("📢❗🚨");
    };

    const getInputs = (input, which) => {
      if (which === "one") {
        input1.value = input.target.value;
      } else {
        input2.value = input.target.value;
      }
    };

    return {
      input1,
      input2,
      throwAlert,
      getInputs,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
