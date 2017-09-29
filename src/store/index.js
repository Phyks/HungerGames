import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import { initialState as state, mutations } from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
});
