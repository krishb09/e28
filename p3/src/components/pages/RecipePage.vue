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
                    :includeIngredients="true"
                    :includeDescription="true"
                    :includeButton="true"
                    :includeDirections="true"
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

export default {
  name: "",
  props: ["id"],
  components: {
    "show-recipe": ShowRecipe,
  },
  data() {
    return {};
  },
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById(this.id);
    },
  },
};
</script>

<style scoped>
</style>