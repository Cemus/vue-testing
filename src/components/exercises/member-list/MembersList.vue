<template>
  <div>
    <h1>Friend list</h1>
    <ul>
      <li v-for="(friend, index) in myFriends">
        <Member
          :id="friend.id"
          :name="friend.name"
          :phone="friend.phone"
          :mail="friend.mail"
          :premium="false"
          :key="index"
          @mon-event-premium="reactionStatus"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Member from "./Members.vue";

const reactionStatus = (id) => {
  alert(
    `${myFriends.value.find((f) => f.id === id).name} est devenu PREMIUM !`
  );
};
const myFriends = ref([
  {
    id: 1,
    name: "Jean",
    phone: "04-64-44-88-22",
    mail: "Jean@lolilol.fr",
  },
  {
    id: 2,
    name: "Paul",
    phone: "04-64-99-14-27",
    mail: "Paul@lolilol.fr",
  },
  {
    id: 3,
    name: "Véronique",
    phone: "04-64-56-57-89",
    mail: "Vero@lolilol.fr",
  },
  {
    id: 4,
    name: "Chantal",
    phone: "04-64-24-24-37",
    mail: "ch4nt4l@lolilol.fr",
  },
  {
    id: 5,
    name: "Raymond",
    phone: "04-64-24-57-88",
    mail: "ray@lolilol.fr",
  },
]);
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
}
li {
  margin-bottom: 1rem;
}
li::before {
  content: "";
}
</style>
