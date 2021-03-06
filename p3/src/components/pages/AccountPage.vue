<template>
  <div id="account-page">
    <div v-if="user">
      <h2 data-test="welcome-message">Hi, {{ user.name }}!</h2>

      <button @click="logout" data-test="logout-button">Logout</button>
    </div>

    <div v-else id="loginForm">
      <h2>Login/Register</h2>
      <div>
        <label
          >Email:
          <input type="text" data-test="email-input" v-model="data.email"
        /></label>
      </div>
      <div>
        <label
          >Password:
          <input
            type="password"
            data-test="password-input"
            v-model="data.password"
        /></label>
      </div>

      <b-button @click="login" data-test="login-button" variant="primary">
        Login
      </b-button>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import Validator from "validatorjs";

export default {
  data() {
    return {
      // Form is prefilled for demonstration purposes; remove in final application
      // jill@harvard.edu/asdfasdf is one of our seed users from e28-api/seeds/user.json
      data: {
        email: "",
        password: "",
      },
      errors: null,
    };
  },
  computed: {
    // Get our user and products state from the Vuex store
    user() {
      return this.$store.state.user;
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    validate() {
      let validator = new Validator(this.recipe, {
        email: "required|email",
        password: "required",
      });
      this.errors = validator.errors.all();
      return validator.passes();
    },
    addRecipes() {
      if (this.user) {
        //only add recipes to authenticated user
        axios.post("recipe").then((response) => {
          this.recipes = response.data.recipe.map((recipe) => {
            return this.$store.getters.getRecipeById(recipe.id);
          });
        });
      }
    },
    login() {
      axios.post("login", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
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