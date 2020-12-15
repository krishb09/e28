import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from '@/common/store';
// import router from '@/common/router.js';


import HomePage from "@/components/pages/HomePage.vue";
import RecipePage from "@/components/pages/RecipePage.vue";
import FavoritesPage from "@/components/pages/FavoritesPage.vue";
import ShowRecipes from "@/components/pages/ShowRecipes.vue";
import AddRecipePage from "@/components/pages/AddRecipePage.vue";
import AccountPage from "@/components/pages/AccountPage.vue";



Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/recipes', component: ShowRecipes },
    { path: '/favorites', component: FavoritesPage },
    { path: '/recipes/new', component: AddRecipePage },
    { path: '/account', component: AccountPage },
    { path: '/recipes/:id', component: RecipePage, props: true },

  ],
})


new Vue({
  //will add store instance to all child components making it accessible with > this.$store 
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')