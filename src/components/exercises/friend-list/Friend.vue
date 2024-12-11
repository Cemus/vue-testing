<template>
  <section>
    <button
      title="Click to display additional informations"
      type="button"
      @click="toggleVisibility(name)"
    >
      {{ name }}
    </button>
    <div v-if="!visibility">
      <p>Cellulaire : {{ phone }}</p>
      <p>Courriel : {{ mail }}</p>
    </div>
    <button type="submit" @click.prevent="removeFriend()">Bannir :'(</button>
  </section>
</template>

<script setup>
const props = defineProps({
  id: Number,
  name: String,
  phone: String,
  mail: String,
  visibility: Boolean,
  toggleVisibility: Function,
});

const emit = defineEmits({
  "remove-friend": (id) => {
    try {
      if (id) {
        return true;
      }
      throw new Error("Need an id");
    } catch (error) {
      console.error(error);
    }
  },
});

const removeFriend = () => {
  emit("remove-friend", props.id);
};
</script>

<style scoped>
section {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
}
</style>
