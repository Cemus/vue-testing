<template>
  <div>
    <h1>Friend list</h1>
    <ul>
      <li v-for="(friend, index) in myFriends">
        <Member
          :nameMember="friend.name"
          :phoneMember="friend.phone"
          :mailMember="friend.mail"
          :premiumMember="false"
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

const reactionStatus = () => {
  alert("Premium!");
};
const myFriends = ref([
  {
    name: "Jean",
    phone: "04-64-44-88-22",
    mail: "Jean@lolilol.fr",
  },
  {
    name: "Paul",
    phone: "04-64-99-14-27",
    mail: "Paul@lolilol.fr",
  },
  {
    name: "Véronique",
    phone: "04-64-56-57-89",
    mail: "Vero@lolilol.fr",
  },
  {
    name: "Chantal",
    phone: "04-64-24-24-37",
    mail: "ch4nt4l@lolilol.fr",
  },
  {
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
