<template>
  <div>
    <UserData
      v-for="user in users"
      :id="user.id"
      :name="user.name"
      :age="user.age"
      @remove-user="removeUser"
    />
  </div>
  <form>
    <fieldset>
      <legend>Formulaire d'édition</legend>
      <label for="name">Name</label>
      <input type="text" v-model="nameInput" />
      <label for="age">Age</label>
      <input type="number" v-model="ageInput" />
    </fieldset>
    <button type="submit" @click.prevent="addUser">Add user</button>
  </form>
</template>
<script setup>
import { ref } from "vue";
import UserData from "../components/eval/UserData.vue";

const nameInput = ref("");
const ageInput = ref(1);
const users = ref([]);
const ids = ref(1);

const addId = () => {
  const currentId = ids.value;
  ids.value++;
  return currentId;
};

const addUser = () => {
  try {
    if (nameInput.value !== "" && ageInput.value !== 0) {
      console.log(nameInput.value);
      users.value.push({
        id: addId(),
        name: nameInput.value,
        age: ageInput.value,
      });
    }
    throw new Error("Please fill all fields :'(");
  } catch (error) {
    console.error(error);
  }
};

const removeUser = (userId) => {
  try {
    if (userId) {
      const user = users.value.find((user) => user.id === userId);
      if (user) {
        user.splice(0, 1);
      }
      throw new Error("No user found");
    } else {
      throw new Error("No id given");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
form {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  color: var(--dark);
  font-weight: bold;
  background-color: rgb(233, 201, 23);
  padding: 2rem;
  border-radius: 0.2rem;
}

div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem;
  align-items: center;
  justify-content: center;
}

fieldset {
  display: flex;
  gap: 0.5rem;
}
</style>
