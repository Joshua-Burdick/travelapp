<template>
    <div class="page">
        <MapComponent id="map"/>

        <WeatherCard id="weather"/>

        <v-card id="info-card">
            <v-card-title class="center">TEST</v-card-title>
            <v-card-text><a id="site-link" target="_blank">Location Website</a></v-card-text>
        </v-card>
    </div>
</template>

<script>

import MapComponent from "../components/MapComponent.vue"
import WeatherCard from "../components/WeatherCard.vue"
import Storage from "../classes/Storage.js"

export default {
    data: () => {
        return {

        }
    },
    components: {
        MapComponent,
        WeatherCard
    },
    created() {
        document.title = "TravelApp - Search";
    },
    mounted() {
        // Create the external link to the city website
        document.getElementById("site-link").href = this.website;
    },
    methods: {

    },
    computed: {
        lat: {
            get() {
                return Storage.get('Latitude');
            },
            set(newLat) {
                Storage.set('Latitude', newLat);
            }
        },
        lng: {
            get() {
                return Storage.get('Longitude');
            },
            set(newLng) {
                Storage.set('Longitude', newLng);
            }
        },
        budget: {
            get() {
                return Storage.get('Budget');
            },
            set(newBudget) {
                Storage.set('Budget', newBudget);
            }
        },
        website: {
            get() {
                return Storage.get('Website');
            },
            set(newSite) {
                Storage.set('Website', newSite);
            }
        }
    }
};
</script>

<style scoped>

    .page {
        position: relative;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }

    #map {
        position: absolute;
        z-index: 1;
    }

    #weather {
        position: absolute;
        z-index: 2;
        top: 20px;
        right: 48%;
    }

    #info-card {
        position: absolute;
        z-index: 2;
    }

</style>