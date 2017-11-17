import { updateCategories } from '../api';
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

    validateQuest({ commit }, { type, id, solution }) {
        if (type === 'missingCategories') {
            updateCategories(id, solution).then(() => commit(
                types.VALIDATE_QUEST,
                {
                    type,
                    id,
                },
            ));
        }
    },
};
