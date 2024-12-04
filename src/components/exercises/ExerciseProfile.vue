<template>
  <div>
    <h2>Profil utilisateur</h2>
    <img :src="imageSrc" />
    <label for="name"></label>
    <input id="name" v-model="name" :placeholder="name" autocomplete="name" />
    <h3>Age</h3>
    <p>{{ age }}</p>
    <h3>Age + 10</h3>
    <p>{{ calcAge() }}</p>
    <h3>Nombre fétiche</h3>
    <p>{{ fetish }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const imageSrc = ref(
      `https://www.rarityguide.com/images/fanime/2009/costumesdrmario.JPG`
    );
    const name = ref("Dr. Mario");
    const age = ref(45);

    const fetish = ref(Math.floor(Math.random() * 10));
    const calcAge = () => {
      return age.value + 10;
    };
    return {
      imageSrc,
      name,
      age,
      fetish,
      calcAge,
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
img {
  width: 24rem;
  border-radius: 1rem;
}
</style>
