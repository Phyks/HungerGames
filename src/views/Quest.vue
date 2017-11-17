<template>
    <QuestMissingCategories v-if="questData" :data="questData" :onSubmit="validateQuest" />
</template>

<script>
import QuestMissingCategories from '@/components/QuestMissingCategories/index';


// TODO: Changing route should not flash old product
export default {
    components: {
        QuestMissingCategories,
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.$store.dispatch('preloadQuests');
        },
        validateQuest(solution) {
            this.$store.dispatch('validateQuest', {
                type: this.questData.type,
                id: this.questData.id,
                solution,
            });
        },
    },
    computed: {
        questData() {
            return this.$store.getters.popQuest;
        },
    },
};
</script>
