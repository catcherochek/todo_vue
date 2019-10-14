import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 10, // The TV inventory
        isLogged:false,
        username:'Johm',
        sessiontoken:"",
    },

    getters: {
        // Here we will create a getter
    },

    mutations: {
        LogIn(state){
            state.isLogged  = true;
        },
        LogOut(state){
            state.isLogged = false;
        },


        countincrement(state){
            state.count++;
        },
        countdecrement(state){
            state.count--;
        }
        // Here we will create Jenny
    },

    actions: {
        // Here we will create Larry
    }
});