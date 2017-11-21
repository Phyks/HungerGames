<template>
    <v-container fluid grid-list-lg class="text-xs-center">
        <v-layout row mb-3 align-center>
            <v-flex xs5>
                <ZoomableImage :url="questData.icon" />
            </v-flex>
            <v-flex xs7 class="text-xs-center">
                <div>
                    <div class="headline">{{ questData.brands || 'Unknown' }}</div>
                    <h2 class="title">{{ questData.name || 'Unkown' }}</h2>
                </div>
            </v-flex>
        </v-layout>
        <v-divider />
        <v-layout row>
            <v-flex xs12>
                <h2 class="title">Select all correct categories:</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-btn
                v-for="(category, key) in questData.predictedCategories" :key="key"
                round dark :class="{ green: category.isOk, red: !category.isOk }"
                @click.stop="handleClick(key)"
                >
                {{ category.name }}
            </v-btn>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <v-btn @click="handleSubmit()">Submit</v-btn>
                or <a @click="onSkip()">Skip</a>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ZoomableImage from '@/components/ZoomableImage';

export default {
    components: {
        ZoomableImage,
    },
    props: {
        questData: Object,
        onSubmit: Function,
        onSkip: Function,
    },
    methods: {
        handleSubmit() {
            const okCategories = [];
            Object.keys(this.questData.predictedCategories).forEach((key) => {
                if (this.questData.predictedCategories[key].isOk) {
                    okCategories.push(this.questData.predictedCategories[key].name);
                }
            });
            this.onSubmit(okCategories);
        },
        handleClick(key) {
            this.questData.predictedCategories[key].isOk =
                !this.questData.predictedCategories[key].isOk;
        },
    },
};
</script>
