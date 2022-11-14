<template>
  <div class="home">
    <div
      class="planet"
      v-if="$vuetify.breakpoint.name != 'xs' && $vuetify.breakpoint.name != 'sm'" 
    ></div>
    <!-- Login Button -->
    <div class="login">
      <br />
      <v-btn elevation="2" @click="$router.push({ name: 'login' })">
        <v-icon>mdi-account</v-icon>LOG IN
      </v-btn>
    </div>

    <!-- Search criteria -->
    <div class="place-box">
      <v-text-field
        placeholder="Enter a location"
        id="autocomplete"
        append-icon="mdi-magnify"
        @click:append-icon="getCoords"
      ></v-text-field>
    </div>
  </div>
</template>
 
<script>
/* eslint-disable */
// @ is an alias to /src
import Storage from "../classes/Storage.js";
import Location from "../classes/Location.js";

export default {
  name: "HomeView",
  components: {},
  data: () => {
    return {
      // The loaction object returned the the Google Maps API
      place: "",
      budget: "",
      // attaches to the google maps autocomplete api
      autocomplete: null,
    };
  },
  async mounted() {
    // sets 1s delay to allow google maps to load in
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );

    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      this.place = this.autocomplete.getPlace();
      let [lat, lng] = this.getCoords();
      Storage.set("Latitude", lat);
      Storage.set("Longitude", lng);
      this.$router.push({ name: "search" });
    });

    document.title = "TravelApp";

    Storage.set("Budget", 0);
  },
  methods: {
    saveLocation() {
      Storage.set("Latitude", Location.latitude(this.place));
      Storage.set("Longitude", Location.longitude(this.place));
    },
    getCoords() {
      let lat = this.place.geometry.location.lat;
      let lng = this.place.geometry.location.lng;
      return [lat(), lng()];
    }
  },
  watch: {
    place() {
      this.saveLocation();
    },
    budget() {
      Storage.set("Budget", this.budget);
    },
  },
};
</script>
 
<style scoped>
.home {
  background-image: url("https://thumbs.gfycat.com/LatePositiveHerculesbeetle-size_restricted.gif");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.planet {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 600px;
  height: 600px;
  background-image: url("https://www.h-schmidt.net/map/map.jpg");
  border-radius: 50%;
  background-size: cover;
  box-shadow: -20px -20px 50px 2px #000 inset, 0 0 20px #000;
  animation: spin 60s linear alternate infinite;
  filter: blur(1.25px);
}

@keyframes spin {
  100% {
    background-position: 100%;
  }
}

.login {
  position: absolute;
  margin-left: 1%;
  z-index: 2;
}

.place-box {
  position: fixed;
  top: 43%;
  left: 27%;
  width: 47%;
  background-color: white;
  z-index: 2;
  border-radius: 8px;
  height: 6.4%;
}
</style>

