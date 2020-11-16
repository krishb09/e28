<!-- src/components/ShowRecipes.vue -->
<template>
  <div id="recipes">
    <h2>Recipes</h2>
    <router-link
      v-for="recipe in recipeList"
      :key="recipe.id"
      v-bind:to="'/recipes/' + recipe.id"
      exact
    >
      <show-recipe :recipe="recipe" :includeDetails="false"></show-recipe
    ></router-link>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";
import { recipeList } from "@/recipe.js";

export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  data: function () {
    return {
      recipeList: recipeList,
    };
  },
};
</script>

<style scoped>
</style>