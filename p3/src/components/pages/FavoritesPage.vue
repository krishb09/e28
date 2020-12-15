<template>
  <div id="favorites-page">
    <h2>Favorites</h2>

    <div v-if="favoritesList.length == 0">
      <b-alert show variant="danger">Empty!</b-alert>
    </div>

    <div class="cleanList" v-if="productsLoaded">
      <p v-for="favorite in favoritesList" :key="favorite.id">
        You added
        {{ getFavoritesDetails(favorite.id).name }} to favorites

        <b-button
          @click="removeFavorite(favorite.id)"
          variant="danger"
          size="sm"
          >Remove</b-button
        >
      </p>
    </div>
  </div>
</template>

<script>
import { favorites } from "@/app.js";

export default {
  name: "",
  props: [],

  data() {
    return {
      favoritesList: [],
    };
  },
  mounted() {
    this.favoritesList = favorites.getFavorites();
  },
  computed: {
    productsLoaded() {
      return this.recipes.length > 0;
    },
    recipes() {
      return this.$store.state.recipes;
    },
  },
  methods: {
    getFavoritesDetails(id) {
      return this.recipes.filter((recipe) => {
        return recipe.id == id;
      }, id)[0];
    },
    removeFavorite(id) {
      favorites.remove(id);
    },
  },
};
</script>

<style scoped>
</style>