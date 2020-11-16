import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';


import HomePage from "@/components/pages/HomePage.vue";
import RecipePage from "@/components/pages/RecipePage.vue";
import FavoritesPage from "@/components/pages/FavoritesPage.vue";
import ShowRecipes from "@/components/pages/ShowRecipes.vue";



Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/recipes', component: ShowRecipes },
    { path: '/favorites', component: FavoritesPage },
    { path: '/recipes/:id', component: RecipePage, props: true },
  ],
})


new Vue({
  router: router, // <-- NEW
  render: h => h(App),
}).$mount('#app')