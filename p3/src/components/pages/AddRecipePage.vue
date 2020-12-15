<template>
  <div>
    <div v-if="user">
      <!--if user is logged in- can add new recipe! -->
      <h2>Add a Recipe!</h2>
      <form>
        <div id="addRecipe">
          <label for="name"> Recipe: </label>
          <p>
            <input
              type="text"
              v-model="recipe.name"
              id="name"
              v-on:blur="validateRecipe()"
            />
          </p>
          <error-field
            v-if="errors && 'name' in errors"
            :errors="errors.name"
          ></error-field>
          <label for="description">Description: </label>
          <p>
            <input
              type="text"
              v-model="recipe.description"
              id="description"
              v-on:blur="validateRecipe()"
            />
          </p>
          <error-field
            v-if="errors && 'description' in errors"
            :errors="errors.description"
          ></error-field>

          <label for="ingredients">Ingredients: </label>
          <p>
            <input
              type="text"
              v-model="recipe.ingredients"
              id="ingredients"
              v-on:blur="validateRecipe()"
            />
          </p>
          <error-field
            v-if="errors && 'ingredients' in errors"
            :errors="errors.ingredients"
          ></error-field>

          <label for="directions">Directions: </label>
          <p>
            <input
              type="text"
              v-model="recipe.directions"
              id="directions"
              v-on:blur="validateRecipe()"
            />
          </p>
          <error-field
            v-if="errors && 'directions' in errors"
            :errors="errors.directions"
          ></error-field>
          <div>
            <b-button @click="addRecipes" variant="success"
              >New Recipe!</b-button
            >
            <span> </span>
            <b-button @click="logout" variant="outline-primary"
              >Logout</b-button
            >
          </div>
          <transition name="fade">
            <div
              data-test="product-added-confirmation"
              class="alert"
              v-if="showConfirmationMessage"
            >
              <b-alert variant="success" show>Your recipe was added!</b-alert>
            </div>
          </transition>
        </div>
      </form>
    </div>

    <!---else if user NOT logged in then show login/register page -->

    <div v-else>
      <b-card bg-variant="info" text-variant="white" class="text-center">
        <b-card-text>
          To add a recipe- either register or login if you have already visited!
        </b-card-text>
      </b-card>
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-text>
              <div>
                <h3>Login</h3>
                <div>
                  <label
                    >Email:
                    <input
                      type="text"
                      data-test="email-input"
                      v-model="userInputData.email"
                      v-on:blur="validateLogin()"
                  /></label>
                </div>
                <div>
                  <label
                    >Password:
                    <input
                      type="password"
                      data-test="password-input"
                      v-model="userInputData.password"
                      v-on:blur="validateLogin()"
                  /></label>
                </div>

                <b-button
                  @click="login"
                  data-test="login-button"
                  variant="primary"
                >
                  Login
                </b-button>

                <!-- <ul v-if="errors">
                  <li
                    class="error"
                    v-for="(error, index) in errors"
                    :key="index"
                  >
                    {{ error }}
                  </li>
                </ul> -->
              </div>
            </b-card-text>
          </b-col>
          <span></span>

          <b-col md="6">
            <b-card-text>
              <!-- or user has to REGISTER-->

              <h3>Register here first!</h3>
              <div>
                <label
                  >Name:
                  <input
                    type="text"
                    data-test="name-input"
                    v-model="newUserInputData.name"
                    v-on:blur="validateRegister()"
                /></label>
                <ul v-if="registerErrors">
                  <li
                    class="error"
                    v-for="(error, index) in registerErrors.name"
                    :key="index"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
              <div>
                <label
                  >Email:
                  <input
                    type="text"
                    data-test="email-input"
                    v-model="newUserInputData.email"
                    v-on:blur="validateRegister()"
                /></label>
                <ul v-if="registerErrors">
                  <li
                    class="error"
                    v-for="(error, index) in registerErrors.email"
                    :key="index"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
              <div>
                <label
                  >Password:
                  <input
                    type="password"
                    data-test="password-input"
                    v-model="newUserInputData.password"
                    v-on:blur="validateRegister()"
                /></label>
                <ul v-if="registerErrors">
                  <li
                    class="error"
                    v-for="(error, index) in registerErrors.password"
                    :key="index"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
              <b-button
                @click="register"
                data-test="register-button"
                variant="primary"
              >
                Register
              </b-button>
            </b-card-text>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import ErrorField from "@/components/ErrorField.vue";
import Validator from "validatorjs";

export default {
  name: "add-recipe",
  components: {
    "error-field": ErrorField,
  },
  data: function () {
    return {
      errors: null,
      registerErrors: null,

      showConfirmationMessage: false,
      recipe: {
        name: "",
        description: "",
        ingredients: "",
        directions: "",
      },
      userInputData: {
        email: "",
        password: "",
      },
      newUserInputData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    validateRecipe() {
      let validator = new Validator(this.recipe, {
        name: "required|between:3,100",
        description: "required|min:100",
        ingredients: "required|min:100",
        directions: "required|min:100",
      });
      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    validateLogin() {
      let validator = new Validator(this.recipe, {
        email: "required",
        password: "required",
      });
      this.errors = validator.errors.all();
      return validator.passes();
    },
    validateRegister() {
      let validator = new Validator(this.recipe, {
        name: "required",
        email: "required",
        password: "required",
      });
      this.errors = validator.errors.all();
      return validator.passes();
    },
    addRecipes() {
      //   if (this.user) {
      axios.post("/recipe", this.recipe).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.errors = null;
          this.showConfirmationMessage = true;
          setTimeout(() => (this.showConfirmationMessage = false), 2000);

          (this.recipe.name = ""),
            (this.recipe.description = ""),
            (this.recipe.ingredients = ""),
            (this.recipe.directions = "");

          this.$store.dispatch("fetchRecipes");
        }
      });
      //   }
    },
    login() {
      axios.post("login", this.userInputData).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
          console.log(response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    register() {
      axios.post("register", this.newUserInputData).then((response) => {
        if (response.data.errors) {
          this.registerErrors = response.data.errors;
        } else {
          this.$store.dispatch("authUser");
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
      //reset the login fields when user logs out
      this.userInputData = {
        email: "",
        password: "",
      };
    },
  },
  watch: {
    user() {
      this.addRecipes();
    },
  },
  mounted() {
    this.addRecipes();
  },
};
</script>

<style scoped>
</style>
