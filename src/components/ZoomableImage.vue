<template>
    <v-dialog v-model="dialog">
        <v-avatar
            size="100%"
            class="pointable"
            slot="activator"
            >
            <!-- TODO: Should be closable by ESC -->
            <img class="icon" :src="url" />
        </v-avatar>
        <v-card>
            <v-card-text>
                <!-- TODO: Preload images -->
                <img class="zoomed-image" :src="url" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        url: String,
    },
    mounted() {
        document.addEventListener('keydown', this.handleEscKey);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.handleEscKey);
    },
    methods: {
        handleEscKey(e) {
            if (
                this.dialog && (
                    e.key === 'Escape' ||
                    e.key === 'Esc' ||
                    e.keyCode === 27
                )
            ) {
                this.dialog = false;
            }
        },
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

.icon {
    border-radius: 0;
}

.zoomed-image {
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
}
</style>
