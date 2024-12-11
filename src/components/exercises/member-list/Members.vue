<template>
  <main>
    <div :class="[props.premium === true ? 'premium' : 'paysan']"></div>

    <button
      title="Click to display additional informations"
      type="button"
      @click="visibility = !visibility"
    >
      {{ props.name }}
    </button>
  </main>

  <div v-if="visibility">
    <p>Phone number : {{ props.phone }}</p>
    <p>E-mail : {{ props.mail }}</p>
  </div>
  <button type="button" @click="goPremium(props.id)">Go premium</button>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits({
  "mon-event-premium": (id) => {
    if (!id) {
      console.warn("/!\\");
      console.error("Vous devez spécifier une id !");
      console.warn("/!\\");
      return false;
    } else {
      return true;
    }
  },
});

const goPremium = (id) => {
  emit("mon-event-premium"); //Oups
};

const visibility = ref(false);
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    required: false,
  },
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.premium,
.paysan {
  height: 1rem;
  width: 1rem;
  border-radius: 2rem;
}
.premium {
  background-color: gold;
}

.paysan {
  background-color: brown;
}
</style>
