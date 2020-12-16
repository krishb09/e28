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
              data-test="recipeFail-confirmation"
              class="alert"
              v-if="failRecipe"
            >
              <b-alert variant="danger" show>Fill all fields!</b-alert>
            </div>
          </transition>
          <transition name="fade">
            <div
              data-test="recipe-added-confirmation"
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
                  <label for="email"
                    >Email:
                    <input
                      type="text"
                      data-test="email-input"
                      v-model="userInputData.email"
                      v-on:blur="validateLogin()"
                  /></label>
                </div>
                <error-field
                  v-if="errors && 'email' in errors"
                  :errors="errors.email"
                ></error-field>

                <div>
                  <label for="password"
                    >Password:
                    <input
                      type="password"
                      data-test="password-input"
                      v-model="userInputData.password"
                      v-on:blur="validateLogin()"
                  /></label>
                </div>
                <error-field
                  v-if="errors && 'password' in errors"
                  :errors="errors.password"
                ></error-field>

                <b-button
                  @click="login"
                  data-test="login-button"
                  variant="primary"
                >
                  Login
                </b-button>
                <transition name="fade">
                  <div
                    data-test="login-confirmation"
                    class="alert"
                    v-if="failLogin"
                  >
                    <b-alert variant="danger" show
                      >Cannot Login- try again!</b-alert
                    >
                  </div>
                </transition>
              </div>
            </b-card-text>
          </b-col>
          <span></span>

          <b-col md="6">
            <b-card-text>
              <!-- or user has to REGISTER-->

              <h3>Register here first!</h3>
              <div>
                <label for="name2"
                  >Name:
                  <input
                    type="text"
                    data-test="nameRegister-input"
                    v-model="newUserInputData.name2"
                    v-on:blur="validateRegister()"
                /></label>
                <error-field
                  v-if="errors && 'name2' in errors"
                  :errors="errors.name2"
                ></error-field>
              </div>
              <div>
                <label for="email2"
                  >Email:
                  <input
                    type="text"
                    data-test="emailRegister-input"
                    v-model="newUserInputData.email2"
                    v-on:blur="validateRegister()"
                /></label>
                <error-field
                  v-if="errors && 'email2' in errors"
                  :errors="errors.email2"
                ></error-field>
              </div>
              <div>
                <label for="password2"
                  >Password:
                  <input
                    type="password"
                    data-test="passwordRegister-input"
                    v-model="newUserInputData.password2"
                    v-on:blur="validateRegister()"
                /></label>
                <error-field
                  v-if="errors && 'password2' in errors"
                  :errors="errors.password2"
                ></error-field>
              </div>
              <b-button
                @click="register"
                data-test="register-button"
                variant="primary"
              >
                Register
              </b-button>
              <transition name="fade">
                <div
                  data-test="register-confirmation"
                  class="alert"
                  v-if="failRegister"
                >
                  <b-alert variant="danger" show
                    >Cannot Register- try again!</b-alert
                  >
                </div>
              </transition>
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
      failLogin: false,
      failRegister: false,
      failRecipe: false,

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
        name2: "",
        email2: "",
        password2: "",
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
      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }
      return validator.passes();
    },
    validateRegister() {
      let validator = new Validator(this.recipe, {
        name2: "required",
        email2: "required",
        password2: "required",
      });
      if (validator.fails()) {
        this.errors = validator.errors.all();
      } else {
        this.errors = null;
      }

      return validator.passes();
    },
    addRecipes() {
      //   if (this.user) {
      axios.post("/recipe", this.recipe).then((response) => {
        if (response.data.errors) {
          this.errors = response.data.errors;
          this.failRecipe = true;
          setTimeout(() => (this.failRecipe = false), 2000);
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
          this.failLogin = true;
          setTimeout(() => (this.failLogin = false), 2000);
        }
      });
    },
    register() {
      axios.post("register", this.newUserInputData).then((response) => {
        if (response.data.errors) {
          this.registerErrors = response.data.errors;
          this.failRegister = true;
          setTimeout(() => (this.failRegister = false), 2000);
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
      this.newUserInputData = {
        name2: "",
        email2: "",
        password2: "",
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
