<template>
  <div>
    <FirstApi :fetchAPI="fetchAPI" />
    <SecondApi :fetchAPI="fetchAPI" />
  </div>
</template>

<script setup>
import FirstApi from "./FirstApi.vue";
import SecondApi from "./SecondApi.vue";

const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    if (response) {
      return response.json();
    } else {
      throw new Error("Can't reach URL");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="css" scoped></style>
