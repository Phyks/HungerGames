<template>
    <v-app>
        <NavigationDrawer v-model="isDrawerVisible"/>
        <v-toolbar color="indigo" dark fixed app clipped-left>
            <v-toolbar-side-icon @click.stop="showHideDrawer"></v-toolbar-side-icon>
            <v-toolbar-title>HungerGames</v-toolbar-title>
        </v-toolbar>
        <v-content class="max-width">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer';

export default {
    components: {
        NavigationDrawer,
    },
    data() {
        return {
            isDrawerVisible: false,
        };
    },
    methods: {
        showHideDrawer() {
            this.isDrawerVisible = !this.isDrawerVisible;
        },
    },
};
</script>

<style scoped>
.max-width {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
</style>
