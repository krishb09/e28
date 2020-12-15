<!-- src/components/ShowRecipe.vue -->
<template>
  <div class="recipe">
    <div class="recipe-name">{{ recipe.name }}</div>
    <img :src="require('@/assets/images/' + recipe.id + '.png')" />
    <p class="recipe-description" v-if="includeDescription">
      {{ recipe.description }}
    </p>
    <p class="recipe-ingredients" v-if="includeIngredients">
      {{ recipe.ingredients }}
    </p>
    <p class="recipe-directions" v-if="includeDirections">
      {{ recipe.directions }}
    </p>
    <b-button
      @click="addFavoriteRecipe"
      v-if="includeButton"
      variant="outline-primary"
      >Add to Favorites</b-button
    >
    <transition name="fade">
      <div
        data-test="add-to-favorites-confirmation"
        class="alert"
        v-if="addAlert"
      >
        <b-alert variant="success" show>New favorite added!</b-alert>
      </div>
    </transition>
  </div>
</template>

<script>
import { favorites } from "@/app.js";

export default {
  name: "show-recipe",
  props: [
    "recipe",
    "includeDescription",
    "includeButton",
    "includeIngredients",
    "includeDirections",
  ],
  data: function () {
    return {
      errors: null,
      addAlert: false,
      favorite: {
        name: "",
        recipe_id: this.recipe.id,
      },
    };
  },
  methods: {
    addFavoriteRecipe() {
      console.log(this.recipe.name);
      favorites.add(this.recipe.id, 1);

      this.addAlert = true;

      setTimeout(() => (this.addAlert = false), 2000);
    },
  },
};
</script>

<style scoped>
</style>