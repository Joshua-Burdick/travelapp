<template>
  <div class="page">
    <v-btn @click.stop="home" text style="position: absolute; z-index: 2">
      <v-icon>mdi-arrow-left</v-icon>
      Home
    </v-btn>

    <MapComponent id="map" />

    <p id="loc-site">
      Visit the location's <a id="site-link" target="_blank">website</a>
    </p>
  </div>
</template>

<script>
import MapComponent from "../components/MapComponent.vue";
import Storage from "../classes/Storage.js";

export default {
  data: () => {
    return {};
  },
  components: {
    MapComponent
  },
  created() {
    document.title = "TravelApp - Search";
  },
  mounted() {
    // Create the external link to the city website
    document.getElementById("site-link").href = this.website;
  },
  methods: {
    home() {
      this.$router.push({
        name: "home",
      });
    },
  },
  computed: {
    lat: {
      get() {
        return Storage.get("Latitude");
      },
      set(newLat) {
        Storage.set("Latitude", newLat);
      },
    },
    lng: {
      get() {
        return Storage.get("Longitude");
      },
      set(newLng) {
        Storage.set("Longitude", newLng);
      },
    },
    budget: {
      get() {
        return Storage.get("Budget");
      },
      set(newBudget) {
        Storage.set("Budget", newBudget);
      },
    },
    website: {
      get() {
        return Storage.get("Website");
      },
      set(newSite) {
        Storage.set("Website", newSite);
      },
    },
  },
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

#loc-site {
  position: absolute;
  top: 96.5%;
  left: 5%;
  z-index: 2;
}
</style>