<template>
  <div id="app">
    <img alt="Zipfoods" id="logo" src="@/assets/images/zipfoods-logo.png" />

    <!-- Added to the App.vue template -->
    <nav>
      <ul>
        <li>
          <router-link
            v-for="link in links"
            v-bind:key="link"
            v-bind:to="paths[link]"
            exact
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view></router-view>

    <home-page v-if="page == 'home'"></home-page>
    <products-page v-if="page == 'products'"></products-page>
    <categories-page v-else-if="page == 'categories'"></categories-page>
  </div>
</template>

<script>
import HomePage from "@/components/pages/HomePage.vue";
import ProductsPage from "@/components/pages/ProductsPage.vue";
import CategoriesPage from "@/components/pages/CategoriesPage.vue";

export default {
  name: "App",
  data() {
    return {
      /* Store links in an array to maintain order */
      links: ["home", "products", "categories"],

      /* Map links to the appropriate component */
      paths: {
        home: "/",
        products: "/products",
        categories: "/categories",
      },
    };
  },
  components: {
    "home-page": HomePage,
    "products-page": ProductsPage,
    "categories-page": CategoriesPage,
  },
};
</script>

<style lang='scss'>
@import "@/assets/scss/zipfoods.scss";
</style>
