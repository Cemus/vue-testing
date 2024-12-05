<template>
  <div>
    <canvas
      ref="myCanvas"
      width="400"
      height="400"
      @click="drawOnCanvas($event)"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// The important part: the name of the variable needs to be equal to the ref's name of the canvas element in the template
const canvasElement = ref();
const context = ref();

onMounted(() => {
  // Get canvas context. If 'getContext' returns 'null', set to 'undefined', so that it conforms to the Ref typing
  context.value = canvasElement.value?.getContext("2d") || undefined;

  render();
});

function render() {
  if (!context.value) {
    return;
  }

  context.value.fillText("jelledev.com", 50, 50);
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  border: 4px solid #000;
}
</style>
