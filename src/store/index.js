import Vuex from "vuex";
import Vue from "vue";
import data from "./modules/data";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    data,
  },
});
