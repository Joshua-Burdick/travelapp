<template>
  <div class="map">
    <GmapMap :center="center" :zoom="12" style="width: 100vw; height: 100vh">
      <GmapMarker
        :key="index"
        v-for="(mark, index) in markers"
        :position="mark.position"
        @click="center = m.position"
      />
    </GmapMap>
    <div id="map"></div>
  </div>
</template>

<script>
import Storage from "../classes/Storage.js";

export default {
  data() {
    return {
      center: { lat: 0, lng: 0 },
      currentPlace: null,
      markers: [],
      places: []
    };
  },
  mounted() {
    this.center = {
      lat: Number(Storage.get('Latitude')),
      lng: Number(Storage.get('Longitude'))
    }
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>