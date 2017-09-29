<template>
    <QuestMissingCategories v-if="questData" :data="questData" />
</template>

<script>
import QuestMissingCategories from '@/components/QuestMissingCategories/index';


export default {
    components: {
        QuestMissingCategories,
    },
    created() {
        this.fetchData();
    },
    watch: {
        // Fetch again when the component is updated
        $route: 'fetchData',
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
