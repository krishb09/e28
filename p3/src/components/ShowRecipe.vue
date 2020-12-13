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
    <div v-if="showConfirmationMessage">Successfully added to favorites!</div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
// import { favorites } from "@/app.js";

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
      favorite: {
        name: "",
        recipe_id: this.recipe.id,
      },
    };
  },
  methods: {
    addFavoriteRecipe() {
      axios
        .post("/favorite", {
          recipe_id: this.recipe.id,
          name: this.recipe.name,
        })
        .then((response) => {
          console.log(response.data.favorite.name);
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            this.favorite.name = "";
            this.showConfirmationMessage = true;
            this.$emit("update-recipes");
          }
        });
      // favorites.add(this.recipe_id);
    },
  },
};
</script>

<style scoped>
</style>