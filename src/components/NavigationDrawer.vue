<template>
    <v-navigation-drawer
        persistent
        clipped
        app
        enable-resize-watcher
        v-model="isActive"
        >
        <v-list>
            <v-list-tile :to="{ name: 'Home' }" exact>
                <v-list-tile-action>
                    <v-icon>play_arrow</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Play!</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile :to="{ name: 'About' }" exact>
                <v-list-tile-action>
                    <v-icon>info</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>About</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
/**
 * TODO: Should stick to the toolbar on xs screens. Should be fixed by Vuetify 0.16.
 */
export default {
    props: {
        value: Boolean,
    },
    computed: {
        isActive: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            },
        },
    },
};
</script>
