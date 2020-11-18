<template>
  <div id="app">
    <!-- Added to the App.vue template -->
    <div>
      <b-card
        title="Plant-Based Eats"
        body-class="text-center"
        header-tag="nav"
      >
        <img src="@/assets/images/avo.jpg" img-alt="Image" img-top />

        <template #header>
          <div class="text center">
            <nav>
              <router-link
                v-for="link in links"
                v-bind:key="link"
                v-bind:to="paths[link]"
                exact
                >{{ link }} <span></span>
              </router-link>
            </nav>
          </div>
          <router-view
            v-bind:recipeList="recipeList"
            v-on:update-recipes="updateRecipes()"
          ></router-view>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: "App",

  data() {
    return {
      recipeList: [],
      /* Store links in an array to maintain order */
      links: ["HOME", "RECIPES", "FAVORITES"],

      /* Map links to the appropriate component */
      paths: {
        HOME: "/",
        RECIPES: "/recipes",
        FAVORITES: "/favorites",
      },
    };
  },
  methods: {
    updateRecipes() {
      axios.get("/recipe").then((response) => {
        this.recipeList = response.data.recipe;
      });
    },
    getFavorites() {
      axios.get("/favorite").then((response) => {
        console.log(response.data.favorite);
        this.favorite = response.data.favorite.recipe_id;
        if (response.data.errors) {
          this.errors = response.data.errors;
        } else {
          this.$emit("get-favorites");
          this.showConfirmationMessage = true;
        }
      });
    },
  },
  mounted() {
    this.updateRecipes();
  },
};
</script>

<style lang='scss'>
</style>

