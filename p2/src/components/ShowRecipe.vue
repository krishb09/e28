<!-- src/components/ShowRecipe.vue -->
<template>
  <div class="recipe">
    <div class="recipe-name">{{ recipe.name }}</div>
    <img :src="require('@/assets/images/' + recipe.id + '.png')" />
    <p class="recipe-description" v-if="includeDescription">
      {{ recipe.description }}
    </p>
    <p class="recipe-detail" v-if="includeDetails">{{ recipe.detail }}</p>
    <b-button v-if="includeButton" variant="success">Add to Favorites</b-button>
  </div>
</template>

<script>
export default {
  name: "show-recipe",
  props: ["recipe", "includeDescription", "includeButton", "includeDetails"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>