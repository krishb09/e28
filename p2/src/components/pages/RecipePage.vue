<template>
  <div id="recipe-page">
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="6">
            <img
              :src="require('@/assets/images/' + recipe.id + '.png')"
              alt="Image"
              class="rounded-0"
            />
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <div v-if="recipe">
                  <show-recipe
                    :recipe="recipe"
                    :includeDetails="true"
                    :includeDescription="true"
                    :includeButton="true"
                  >
                    ></show-recipe
                  >
                </div>
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
import { recipeList } from "@/recipe.js";

export default {
  name: "",
  props: ["id"],
  components: {
    "show-recipe": ShowRecipe,
  },
  data() {
    return {
      recipeList: recipeList,
    };
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