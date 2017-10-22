<template>
    <QuestMissingCategories v-if="questData" :data="questData" />
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
    },
    computed: {
        questData() {
            return this.$store.getters.popQuest;
        },
    },
};
</script>
