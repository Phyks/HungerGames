<template>
    <v-container fluid grid-list-lg class="text-xs-center">
        <v-layout row mb-3 align-center>
            <v-flex xs5>
                <v-avatar size="100%">
                    <img class="icon" src="https://static.openfoodfacts.org/images/products/761/303/423/2465/front_fr.6.400.jpg" />
                </v-avatar>
            </v-flex>
            <v-flex xs7 class="text-xs-center">
                <div>
                    <div class="headline">Herta</div>
                    <h2 class="title">Le Bon Paris, À l'Étouffée (6 Tranches)</h2>
                </div>
            </v-flex>
        </v-layout>
        <v-divider />
        <v-layout row>
            <v-flex xs12>
                <h2 class="title">Fix ingredients list:</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <img style="max-width: 100%;" src="https://static.openfoodfacts.org/images/products/761/303/423/2465/ingredients_fr.8.400.jpg" />
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <v-text-field
                    value="Jambon frais de porc, Bouillon (eau, couennes de porc, oignons, os de porc, carottes, sel, persil, ail, clou de girofle, poivre, laurier) ; sel, dextrose de maïs, arômes naturels, Conservateur (nitrite de sodium) ; Antioxydant (isoascorbate de sodium)."
                    class="input-group--focused"
                    multi-line
                    />
                </v-text-field>
            </v-flex>
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
    data() {
        return {
            items: {
                'en:fresh-foods': {
                    name: 'Fresh foods',
                    isOK: true,
                },
                'en:meats': {
                    name: 'Meats',
                    isOK: true,
                },
                'en:prepared-meats': {
                    name: 'Prepared meats',
                    isOK: true,
                },
                'en:hams': {
                    name: 'Hams',
                    isOK: true,
                },
                'fr:charcuteries-crues': {
                    name: 'Charcuteries crûes',
                    isOK: false,
                },
                'en:beverages': {
                    name: 'Beverages',
                    isOK: false,
                },
            },
        };
    },
};
</script>
