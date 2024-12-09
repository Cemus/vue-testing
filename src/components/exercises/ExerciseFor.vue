<template>
  <div>
    <h1>List rendering</h1>
    <h1>Watch list :</h1>
    <ul>
      <li
        v-for="(movies, index) in movieList"
        key="{{ index }}"
        @click="deleteMovie(index)"
      >
        {{ movies }}
      </li>
    </ul>
    <input v-model="movieText" />
    <button @click="addMovie()">Add a movie</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const movieText = ref("");
const movieList = ref([]);

const addMovie = () => {
  movieList.value.push(movieText.value);
  movieText.value = "";
};

const deleteMovie = (index) => {
  movieList.value.splice(index, 1);
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
}

li {
  cursor: pointer;
}
</style>
