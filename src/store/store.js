import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);


//ДОБАВЛЕНИЕ БИБЛИОТЕКИ С ОБЩИМИ ПАРАМЕТРАМИ
export default new Vuex.Store({
    state: {//СВОЙСТВА С КОТОРЫМИ РПАБОТАЮТ ВСЕ КОМПОНЕНТЫ
        count: 10, // The TV inventory
        isLogged:false,
        username:'Johm',
        sessiontoken:"",
    },

    getters: {
        // Here we will create a getter
    },

    mutations: {//МУТАЦИИ, ВЫЗЫВАЮТСЯ С ПОМОЩЬЮ  this.$store.commit('LogOut'); В КОМПОНЕНТАХ
        // ЧТОБЫ НЕПОСРЕДСТВЕННО НЕ МЕНЯТЬ СТЭЙТ
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