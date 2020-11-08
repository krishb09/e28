<template>
  <div>
    <h1>Show Product ID {{ id }}</h1>
    <h1>name {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    id: Number,
    name: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>