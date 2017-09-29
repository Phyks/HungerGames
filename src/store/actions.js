import * as types from './mutations-types';
import quests from './quests';

export default {
    preloadQuests({ commit }) {
        commit(types.IS_LOADING_QUESTS);

        Object.keys(quests).forEach((quest) => {
            quests[quest]().then(
                items => commit(
                    types.STORE_QUESTS_ITEMS,
                    {
                        type: 'missingCategories',
                        items,
                    },
                ),
            );
        });
    },
};
