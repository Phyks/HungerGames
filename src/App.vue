<template>
    <v-app toolbar>
        <NavigationDrawer v-model="isDrawerVisible"/>
        <v-toolbar color="indigo" dark fixed app clipped-left>
            <v-toolbar-side-icon @click.stop="showHideDrawer"></v-toolbar-side-icon>
            <v-toolbar-title>HungerGames</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>skip_next</v-icon>
            </v-btn>
        </v-toolbar>
        <main>
            <v-content>
                <router-view></router-view>
            </v-content>
        </main>
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
