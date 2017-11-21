import { updateCategories } from '../api';
import * as types from './mutations-types';
import quests from './quests';

export default {
    preloadQuests({ commit }) {
        const apiRequests = [];
        Object.keys(quests).forEach((quest) => {
            apiRequests.push(
                quests[quest]().then(
                    items => commit(
                        types.STORE_QUESTS_ITEMS,
                        {
                            type: 'missingCategories',
                            items,
                        },
                    ),
                ),
            );
        });

        return Promise.all(apiRequests);
    },

    validateQuest({ commit }, { type, id, solution }) {
        if (type === 'missingCategories') {
            updateCategories(id, solution).then(() => commit(
                types.REMOVE_QUEST_ITEM,
                {
                    type,
                    id,
                },
            ));
        }
    },

    skipQuest({ commit }, { type, id }) {
        commit(
            types.REMOVE_QUEST_ITEM,
            {
                type,
                id,
            },
        );
    },
};
