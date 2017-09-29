import Vue from 'vue';

import * as types from './mutations-types';

export const initialState = {
    isLoading: false,
    questsItems: {},
};

export const mutations = {
    [types.IS_LOADING_QUESTS](state) {
        state.isLoading = true;
    },
    [types.STORE_QUESTS_ITEMS](state, { type, items }) {
        Vue.set(state.questsItems, type, items);
    },
};
