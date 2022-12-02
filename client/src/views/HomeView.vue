<template>
  <div class="home center">
    <div v-if="$vuetify.breakpoint.mdAndUp" class="planet"></div>

    <!-- Login Button -->
    <div class="login ma-5">
      <v-btn id="test" @click.stop="sendUserToLogin">
        <v-icon>mdi-account</v-icon>
        LOG IN
      </v-btn>
    </div>

    <!-- Search criteria -->
    <div class="search">
      <v-text-field
        filled
        solo
        dark
        label="Enter a location"
        id="autocomplete"
        prepend-inner-icon="mdi-map-marker"
      ></v-text-field>
    </div>
  </div>
</template>
 
<script>
/* eslint-disable */
// @ is an alias to /src
import Storage from "../classes/Storage.js";

export default {
  name: "HomeView",
  data() {
    return {
      // attaches to the google maps autocomplete api
      autocomplete: undefined,
      nearby: undefined
    };
  },
  created() {
    document.title = "TravelApp";
  },
  async mounted() {
    // Quarter-second delay to allow the API to load
    await new Promise((resolve) => setTimeout(() => resolve(), 250));

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );

    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      const PLACE = this.autocomplete.getPlace();
      const LAT = PLACE.geometry.location.lat();
      const LNG = PLACE.geometry.location.lng();

      Storage.set("Latitude", LAT);
      Storage.set("Longitude", LNG);

      Storage.set("Website", PLACE.website);

      this.$router.push({
        name: "search"
      });
    });
  },
  computed: {
    budget: {
      get() {
        return Storage.get("Budget");
      },
      set(newBudget) {
        Storage.set("Budget", newBudget);
      },
    },
  },
  methods: {
    sendUserToLogin() {
      this.$router.push({
        name: "login"
      });
    },
  },
};
</script>
 
<style scoped>
.search {
  width: 75%;
  max-width: 500px;
  z-index: 2;
  height: 60px;
  border: 1px solid white;
  border-radius: 5px;
}

.home {
  background-image: url("https://thumbs.gfycat.com/LatePositiveHerculesbeetle-size_restricted.gif");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.planet {
  position: absolute;
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
  position: fixed;
  top: 0;
  right: 0;
}

.search {
  padding: 2px 2px;
}
</style>

