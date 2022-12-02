<template>
  <div id="map-render">
    <GmapMap :center="center" :zoom="12" :options="options" style="width: 100vw; height: 100vh">
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
      markers: [],
      places: []
    };
  },
  mounted() {
    this.center = {
      lat: Number(Storage.get('Latitude')),
      lng: Number(Storage.get('Longitude'))
    }

    let map = new google.maps.Map(document.getElementById('map-render'));
    let service = new google.maps.places.PlacesService(map);
    let request = {
      location: new google.maps.LatLng(Number(Storage.get('Latitude')), Number(Storage.get('Longitude'))),
      radius: '1000',
      type: ['restaurant']
    };
    service.nearbySearch(request, (results, status) => {
      console.log(`# Res: ${results.length}`)
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          console.log(place);
        }
      }
    });
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