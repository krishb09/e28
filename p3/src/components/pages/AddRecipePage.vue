<template>
  <div>
    <h2>Add a Recipe!</h2>

    <form>
      <div id="addRecipe">
        <p>
          <label for="name"> Recipe: </label>

          <input
            type="text"
            v-model="recipe.name"
            id="name"
            v-on:blur="validate()"
          />
        </p>

        <p>
          <label for="description">Description: </label>
          <input
            type="text"
            v-model="recipe.description"
            id="description"
            v-on:blur="validate()"
          />
        </p>

        <p>
          <label for="ingredients">Ingredients: </label>
          <input
            type="text"
            v-model="recipe.Ingredients"
            id="ingredients"
            v-on:blur="validate()"
          />
        </p>

        <p>
          <label for="directions">Directions: </label>
          <input
            type="text"
            v-model="recipe.directions"
            id="directions"
            v-on:blur="validate()"
          />
        </p>

        <b-button @click="addRecipe" variant="success">New Recipe!</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import Validator from "validatorjs";

export default {
  name: "add-recipe",
  components: {},
  data: function () {
    return {
      errors: null,
      showConfirmationMessage: false,
      recipe: {
        name: "",
        description: "",
        ingredients: "",
        directions: "",
      },
    };
  },
  methods: {
    validate() {
      let validator = new Validator(this.recipe, {
        name: "required",
        description: "required",
        ingredients: "required",
        directions: "required",
      });
      this.errors = validator.errors.all();
      return validator.passes();
    },
    addRecipe() {
      axios.post("/recipe", this.recipe).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$store.dispatch("fetchRecipes");
          this.showConfirmationMessage = true;
          setTimeout(() => (this.showConfirmationMessage = false), 2000);

          this.recipe = {
            name: "",
            description: "",
            ingredients: "",
            directions: "",
          };
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
