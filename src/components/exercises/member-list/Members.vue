<template>
  <main>
    <div
      :class="[memberProps.premiumMember === true ? 'premium' : 'paysan']"
    ></div>

    <button
      title="Click to display additional informations"
      type="button"
      @click="visibility = !visibility"
    >
      {{ memberProps.nameMember }}
    </button>
  </main>

  <div v-if="visibility">
    <p>Phone number : {{ memberProps.phoneMember }}</p>
    <p>E-mail : {{ memberProps.mailMember }}</p>
  </div>
  <button type="button" @click="emit('mon-event-premium')">Go premium</button>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["mon-event-premium"]);

const visibility = ref(false);
const memberProps = defineProps({
  nameMember: {
    type: String,
    required: true,
  },
  phoneMember: {
    type: String,
    required: true,
  },
  mailMember: {
    type: String,
    required: true,
  },
  premiumMember: {
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
