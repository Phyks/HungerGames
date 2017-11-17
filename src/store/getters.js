import pickRandomFromArray from '@/tools';

function popQuest(state) {
    const availableQuests = [];
    Object.keys(state.questsItems).forEach((quest) => {
        if (state.questsItems[quest].length > 0) {
            availableQuests.push(quest);
        }
    });

    if (availableQuests.length === 0) {
        return null;
    }
    const randomQuestsType = pickRandomFromArray(availableQuests);
    const randomQuest = pickRandomFromArray(state.questsItems[randomQuestsType]);
    randomQuest.type = randomQuestsType;
    return randomQuest;
}

export default { popQuest };
