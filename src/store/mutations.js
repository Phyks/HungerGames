import Vue from 'vue';

import * as types from './mutations-types';

export const initialState = {
    questsItems: {},
};

export const mutations = {
    [types.STORE_QUESTS_ITEMS](state, { type, items }) {
        Vue.set(state.questsItems, type, items);
    },
    [types.REMOVE_QUEST_ITEM](state, { type, id }) {
        const items = state.questsItems[type];
        const index = items.findIndex(item => item.id === id);
        if (index > -1) {
            items.splice(index, 1);
        }
        Vue.set(state.questsItems, type, items);
    },
};
