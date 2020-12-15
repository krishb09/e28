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
          <router-view> </router-view>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
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
      links: ["HOME", "RECIPES", "FAVORITES", "ADD-A-RECIPE"],

      /* Map links to the appropriate component */
      paths: {
        HOME: "/",
        RECIPES: "/recipes",
        FAVORITES: "/favorites",
        "ADD-A-RECIPE": "/recipes/new",
      },
    };
  },
  mounted() {
    this.$store.dispatch("fetchRecipes");
    this.$store.dispatch("authUser");
  },

  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
  },
};
</script>

<style lang='scss'>
</style>

