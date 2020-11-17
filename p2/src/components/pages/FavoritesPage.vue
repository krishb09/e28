<template>
  <div id="favorites-page">
    <h2>Favorites</h2>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="6"> </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <router-link
                  v-for="recipe in recipeList"
                  :key="recipe.id"
                  v-bind:to="'/recipes/' + recipe.id"
                  exact
                >
                  <show-recipe :recipe="recipe"></show-recipe
                ></router-link>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import ShowRecipe from "@/components/ShowRecipe.vue";

export default {
  name: "",
  components: {
    "show-recipe": ShowRecipe,
  },
  props: ["id", "recipeList"],
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>