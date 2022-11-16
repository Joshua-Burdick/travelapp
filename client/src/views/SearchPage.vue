<template>
    <div class="page">
        <MapComponent id="map"/>

        <v-card
            id="some-text"
            elevation="2"
        >
            <v-card-title>Test</v-card-title>
            <v-card-text>
                <div>Latitude: {{ lat() }}</div>
                <br>
                <div>Longitude: {{ lng() }}</div>
                <br>
                <div>Budget: ${{ budget() }}</div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import MapComponent from "../components/MapComponent.vue"
import Storage from "../classes/Storage.js"

export default {
    data: () => {
        return {

        }
    },
    components: {
        MapComponent
    },
    mounted() {
        document.title = "TravelApp - Search";
    },
    methods: {
        lat() {
            return Storage.get('Latitude');
        },
        lng() {
            return Storage.get('Longitude');
        },
        budget() {
            return Storage.get('Budget');
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

    #some-text {
        position: absolute;
        z-index: 2;
        top: 0;
        margin-left: 60%;
    }

</style>