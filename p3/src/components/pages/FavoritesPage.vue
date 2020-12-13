<template>
  <div id="favorites-page">
    <h2>Favorites</h2>
    <div>
      <b-card-text> Page coming soon! </b-card-text>
    </div>
  </div>
</template>

<script>
// import ShowRecipe from "@/components/ShowRecipe.vue";

export default {
  name: "",
  props: ["id", "recipeList", "favorites"],
  // components: {
  //   "show-recipe": ShowRecipe,
  // },
  data() {
    return {};
  },
  computed: {
    recipe() {
      return this.recipeList.filter((recipe) => {
        return recipe.id == this.id;
      }, this.id)[0];
    },
  },
};
</script>

<style scoped>
</style>