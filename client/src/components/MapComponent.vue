<template>
  <div id="map">
    <GmapMap :center="center" :zoom="12" :options="options" style="width: 99vw; height: 100vh">
      <GmapMarker
        :key="index"
        v-for="(mark, index) in markers"
        :position="mark.position"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
/* eslint-disable */
import Storage from "../classes/Storage.js";

export default {
  data() {
    return {
      center: { lat: 0, lng: 0 },
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      },
      currentPlace: null,
      markers: []
    };
  },
  async mounted() {
    this.center = {
      lat: this.lat,
      lng: this.lng
    };

    await new Promise((resolve) => setTimeout(() => resolve(), 5000));
    if (this.restaurants.first != undefined) this.placeMarkers(this.restaurants.first);
    if (this.restaurants.second != undefined) this.placeMarkers(this.restaurants.second);
    if (this.restaurants.third != undefined) this.placeMarkers(this.restaurants.third);

    console.log(`Markers: ${JSON.stringify(this.markers)}`);
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker(place) {
      const marker = {
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
      };
      this.markers.push({ position: marker });
    },
    placeMarkers(list) {
      let count = 0;

      while(list[count] !== undefined) {
        this.addMarker(list[count]);
        count++;
      }
    }
  },
  computed: {
    lat: {
      get() {
          return Number(Storage.get('Latitude'));
      },
      set(newLat) {
          Storage.set('Latitude', newLat);
      }
    },
    lng: {
      get() {
          return Number(Storage.get('Longitude'));
      },
      set(newLng) {
          Storage.set('Longitude', newLng);
      }
    },
    restaurants: {
      get() {
        return {
          first: Storage.get("Restaurants0") != "" ? JSON.parse(Storage.get("Restaurants0")) : undefined,
          second: Storage.get("Restaurants1") != "" ? JSON.parse(Storage.get("Restaurants1")) : undefined,
          third: Storage.get("Restaurants2") != "" ? JSON.parse(Storage.get("Restaurants2")) : undefined
        }
      }
    }
  }
};
</script>