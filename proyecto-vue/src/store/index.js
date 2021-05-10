import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    facts: [],
    random: null,
    fact: {},
  },
  mutations: {
    setFacts(state, facts) {
      state.facts = facts;
    },
    setRandom(state, random) {
      state.random = random;
    },
    setFact(state, fact) {
      state.fact = fact;
    },
  },
  actions: {
    getFacts({ commit }) {
      axios
        .get(`https://cat-fact.herokuapp.com/facts`)
        .then((response) => {
          commit("setFacts", response.data);
        })
        .catch((error) => console.log(error));
    },
    getRandom({ commit }) {
      axios
        .get(`https://cat-fact.herokuapp.com/facts/random`)
        .then((response) => {
          commit("setRandom", response.data);
        })
        .catch((error) => console.log(error));
    },
    getFact({ commit }, factId) {
      axios
        .get(`https://cat-fact.herokuapp.com/facts/${factId}`)
        .then((response) => {
          commit("setFact", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
