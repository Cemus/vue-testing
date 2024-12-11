<template>
  <form action="#">
    <fieldset>
      <legend>Ajouter un nouvel ami</legend>
      <label for="name"
        >Nom <input type="text" name="name" id="name" v-model="nameInput" />
      </label>
      <label for="phone"
        >Téléphone
        <input type="tel" name="phone" id="phone" v-model="phoneInput" />
      </label>
      <label for="mail"
        >Courriel
        <input type="mail" name="mail" id="mail" v-model="mailInput" />
      </label>
    </fieldset>
    <button type="submit" @click.prevent="onSubmit()">Ajouter un ami</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const nameInput = ref("");
const phoneInput = ref("");
const mailInput = ref("");

const onSubmit = () => {
  const n = nameInput.value;
  const p = phoneInput.value;
  const m = mailInput.value;
  emit("add-friend", {
    id: parseInt(new Date().toISOString()),
    name: n,
    phone: p,
    mail: m,
    premium: false,
  });
};

const emit = defineEmits({
  "add-friend": ({ id, name, phone, mail, premium }) => {
    try {
      if (id && name && phone && mail) {
        return {
          id: name + phone,
          name: name,
          phone: phone,
          mail: mail,
          premium: premium,
        };
      } else {
        throw new Error("Bad infos");
      }
    } catch (error) {
      console.error(error);
    }
  },
});
</script>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
}

legend {
  text-align: center;
}
fieldset {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
}

button {
  width: 50%;
  align-self: center;
  border-radius: 0.4rem;
  margin-top: 1rem;
}
</style>
