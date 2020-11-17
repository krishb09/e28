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
    <b-button @click="addFavoriteRecipe" v-if="includeButton" variant="success"
      >Add to Favorites</b-button
    >
  </div>
</template>

<script>
import { axios } from "@/app.js";

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
      showConfirmationMessage: false,
    };
  },
  methods: {
    addFavoriteRecipe() {
      axios.post("/favorite", this.recipe).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit("update-recipes");
          this.showConfirmationMessage = true;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>