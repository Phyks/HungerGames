<template>
    <v-container fluid grid-list-lg class="text-xs-center">
        <v-layout row mb-3 align-center>
            <v-flex xs5>
                <v-dialog v-model="dialog" lazy absolute>
                    <v-avatar
                        size="100%"
                        class="pointable"
                        slot="activator"
                        >
                        <!-- TODO: Should be closable by ESC -->
                        <img class="icon" :src="data.icon" />
                    </v-avatar>
                    <v-card>
                        <v-card-text>
                            <img style="width: 100%;" :src="data.icon" />
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-flex>
            <v-flex xs7 class="text-xs-center">
                <div>
                    <div class="headline">{{ data.brands }}</div>
                    <h2 class="title">{{ data.name }}</h2>
                </div>
            </v-flex>
        </v-layout>
        <v-divider />
        <v-layout row>
            <v-flex xs12>
                <h2 class="title">Unselect all incorrect categories:</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-btn
                v-for="(category, key) in data.predictedCategories" :key="key"
                round primary dark :class="{ green: category.isOK, red: !category.isOK }"
                @click.stop="data.predictedCategories[key].isOK = !data.predictedCategories[key].isOK"
                >
                {{ category.name }}
            </v-btn>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <v-btn>submit</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {
        data: Object,
    },
    data() {
        return {
            dialog: false,
        };
    },
};
</script>

<style scoped>
.pointable {
    cursor: pointer;
}

.pointable:hover {
    opacity: 0.8;
}
</style>
