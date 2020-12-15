import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { axios } from "@/app.js";

export default new Vuex.Store({
    //one state
    state: {
        recipes: [],
        user: null,
    },
    //need to update state via using Vuex mutation so that changes are tracked 
    //need to commit mutations
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },

    //data entity managed by vuex

    actions: {
        //fetch recipes from server side
        fetchRecipes(context) {
            axios.get('recipe').then((response) => {
                context.commit('setRecipes', response.data.recipe);
            })
        },
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {
                    if (response.data.authenticated) {
                        context.commit('setUser', response.data.user);
                    } else {
                        context.commit('setUser', false);
                    }

                    resolve();
                });
            });
        },
    },

    getters: {
        getRecipeById(state) {
            return function (id) {
                return state.recipes.filter((recipe) => {
                    return recipe.id == id;
                }, this.id)[0];
            }

        }
    }

});