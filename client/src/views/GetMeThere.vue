<template>
  <div>
    <div>
      <div class="close-open-btn-container">
        <v-icon 
          @click="showSidePanel = !showSidePanel"
          large
        >
          {{ showSidePanel ? 'mdi-chevron-left' : 'mdi-chevron-right' }}
        </v-icon>
      </div>
      <tansition>
        <SidePanel 
          v-if="showSidePanel"
          :place="place"
          :budget="budget"
          :transit="transit"
          :distance="distance"
          :weather="weather"
        />
      </tansition>
    </div>
    <GmapMap 
      :center="{ lat, lng }" 
      :zoom="8" 
      :options="options"
      class="map-cover"
    ></GmapMap>
  </div>
</template>

<script>
import SidePanel from "../components/TMTSidePanel.vue";

export default {
  components: {
    SidePanel
  },
  mounted() {
    let { lat, lng, place, budget, transit } = this.$route.query;
    this.lat = Number(lat);
    this.lng = Number(lng);
    this.place = place;
    this.budget = budget;
    this.transit = transit;

    this.startingLat = Number(localStorage.getItem("startingLat"));
    this.startingLng = Number(localStorage.getItem("startingLng"));
  },
  data: () => {
    return {

      place: "",

      lat: "",
      lng: "",
      startingLat: "",
      startingLng: "",

      budget: "",
      transit: "",

      showSidePanel: true,

      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      }
    };
  },
  methods: {
    getDistanceFromLatLngInKm(lat1, lng1, lat2, lng2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
      var dLng = this.deg2rad(lng2 - lng1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
  },
  computed: {
    distance() {
      return this.getDistanceFromLatLngInKm(
        this.startingLat,
        this.startingLng,
        this.lat,
        this.lng
      );
    },
    weather() {
      return {
        temp: 70,
        humidity: 50,
        wind: 10
      };
    }
  }
}
</script>

<style scoped>
.map-cover {
  width: 100vw;
  height: 100vh;
}
</style>