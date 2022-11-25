<template>
    <div class="page">
        <MapComponent id="map"/>

        <WeatherCard id="weather"/>
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

</style>