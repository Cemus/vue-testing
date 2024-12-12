<template>
  <div class="container">
    <button type="button" class="croix" @click="removeUser()">X</button>

    <div>
      <label for="name">Name :</label>
      <p>{{ props.name[0].toUpperCase() + props.name.slice(1) }}</p>
    </div>

    <div>
      <label for="age">Age :</label>
      <p>{{ props.age }} ans</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
    validator: (prop) => {
      if (typeof prop === "number") {
        return true;
      } else {
        console.warn("Invalid id");
        return false;
      }
    },
  },
  name: {
    type: String,
    required: true,
    validator: (prop) => {
      return typeof prop === "string" && prop.length > 0;
    },
  },
  age: {
    type: Number,
    required: true,
    validator: (prop) => {
      console.log(prop);
      if (typeof prop !== "number") {
        console.warn("Please input a number");
        return false;
      }
      if (prop <= 0) {
        console.warn("Too young or not born yet");
        return true;
      }
    },
  },
});

const emit = defineEmits({
  "remove-user": (id) => {
    if (id && typeof id === "number") {
      return true;
    }
    console.warn("Invalid id");
    return false;
  },
});

const removeUser = () => {
  emit("remove-user", props.id);
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;

  text-align: center;
  background-color: var(--brand);
  align-self: center;
  border-radius: 0.2rem;
  padding: 1rem;
}

label {
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  font-weight: bold;
}

.croix {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--contrast);
  text-align: center;
  transform: translate(-50%, -50%);
}

.container {
  position: relative;
}
</style>
