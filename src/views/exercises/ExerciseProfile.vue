<template>
  <div>
    <h2>Profil utilisateur</h2>
    <img
      :src="`https://www.rarityguide.com/images/fanime/2009/costumesdrmario.JPG`"
    />
    <input v-model="name" :placeholder="name" />
    <label for="age">Age</label>
    <p>{{ age }}</p>
    <label for="calcul">Age + 10</label>
    <p>{{ calcAge() }}</p>
    <label for="fetishes">Nombre fétiche</label>
    <p>{{ fetish }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("Dr. Mario");
    const age = ref(45);

    const fetish = ref(Math.floor(Math.random() * 10));
    const calcAge = () => {
      return age.value + 10;
    };
    return {
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
  align-self: center;
}
</style>
