<template>
  <div>
    <h1>Friend list</h1>
    <ul>
      <li v-for="(friend, index) in myFriends">
        <Friend
          :name="friend.name"
          :phone="friend.phone"
          :mail="friend.mail"
          :visibility="friend.visibility"
          :toggleVisibility="toggleVisibility"
          :key="index"
        />
      </li>
    </ul>
    <button type="button" @click="hideAll(false)">Display all</button>
    <button type="button" @click="hideAll(true)">Hide all</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Friend from "./Friend.vue";

onMounted(() => {
  hideAll(true);
});

const myFriends = ref([
  {
    name: "Jean",
    phone: "04-64-44-88-22",
    mail: "Jean@lolilol.fr",
    visibility: false,
  },
  {
    name: "Paul",
    phone: "04-64-99-14-27",
    mail: "Paul@lolilol.fr",
    visibility: false,
  },
  {
    name: "Véronique",
    phone: "04-64-56-57-89",
    mail: "Vero@lolilol.fr",
    visibility: false,
  },
  {
    name: "Chantal",
    phone: "04-64-24-24-37",
    mail: "ch4nt4l@lolilol.fr",
    visibility: false,
  },
  {
    name: "Raymond",
    phone: "04-64-24-57-88",
    mail: "ray@lolilol.fr",
    visibility: false,
  },
]);

const toggleVisibility = (friendName) => {
  myFriends.value.forEach((f) => {
    if (f.name == friendName) {
      f.visibility = !f.visibility;
    }
  });
};
const hideAll = (boolean) => {
  myFriends.value.forEach((friend) => {
    friend.visibility = boolean;
  });
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
}
li::before {
  content: "";
}
</style>
