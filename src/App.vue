<template>
    <v-app toolbar>
        <NavigationDrawer v-model="isDrawerVisible"/>
        <v-toolbar class="indigo" dark fixed>
            <v-toolbar-side-icon @click.stop="showHideDrawer"></v-toolbar-side-icon>
            <v-toolbar-title>HungerGames</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom left offset-y>
                <v-btn icon slot="activator">
                    <v-icon>more_vert</v-icon>
                </v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title>Skip quest</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
        <main>
            <router-view></router-view>
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
