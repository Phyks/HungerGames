<template>
    <div>
        <v-layout row v-if="isLoading">
            <v-flex xs12>
                <p>Loading quests…</p>
            </v-flex>
        </v-layout>
        <template v-else>
            <QuestMissingCategories v-if="questData" :questData="questData" :onSubmit="validateQuest" :onSkip="skipQuest" />
        </template>
    </div>
</template>

<script>
import QuestMissingCategories from '@/components/Quests/QuestMissingCategories/index';

export default {
    data() {
        return {
            isLoading: false,
            error: null,
        };
    },
    components: {
        QuestMissingCategories,
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.isLoading = true;
            this.$store.dispatch('preloadQuests').then(() => {
                this.isLoading = false;
            });
        },
        validateQuest(solution) {
            this.$store.dispatch('validateQuest', {
                type: this.questData.type,
                id: this.questData.id,
                solution,
            });
        },
        skipQuest() {
            this.$store.dispatch('skipQuest', {
                type: this.questData.type,
                id: this.questData.id,
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
