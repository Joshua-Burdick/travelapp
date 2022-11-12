<template>
  <div class="home">
    <div class="planet">
    </div>
    <!-- Login Button -->
    <div class="login">
      <br>
      <v-btn
        elevation="2"
        @click="$router.push({name: 'login'})"
      > LOGIN
      </v-btn>
    </div>

    <!-- Search criteria -->
    <div class="place-box">
      <GmapAutocomplete
        @place_changed="setPlace"
        placeholder="Shall we play a game?"
      >
      </GmapAutocomplete>
      <v-btn
        id="search-btn"
        elevation="0"
        @click="$router.push({name: 'search'})"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
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
    };
  },
  async mounted() {
    document.title = "TravelApp";
    Storage.set('Latitude', 0);
    Storage.set('Longitude', 0);
    Storage.set('Budget', 0);
  },
  methods: {
    setPlace(place) {
      this.place = place;
    },
    saveLocation() {
      Storage.set('Latitude', Location.latitude(this.place));
      Storage.set('Longitude', Location.longitude(this.place));
    }
  },
  watch: {
    place() {
      this.saveLocation();
    },
    budget() {
      Storage.set('Budget', this.budget);
    }
  }
}
</script>

<style scoped>
  .home {
    background-image: url('https://thumbs.gfycat.com/LatePositiveHerculesbeetle-size_restricted.gif');
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
    background-image: url('https://www.h-schmidt.net/map/map.jpg');
    border-radius: 50%;
    background-size: cover;
    box-shadow: -20px -20px 50px 2px #000 inset, 0 0 20px #000;
    animation: spin 60s linear alternate infinite;
    filter: blur(1.25px);
  }

  @keyframes spin {
    100%{background-position: 100%;}
  }

  .login {
    position: absolute;
    margin-left: 94%;
  }

  .place-box {
    background: white;
    position: absolute;
    z-index: 2;
    margin-top: 23%;
    margin-left: 32.25%;
    padding: 4px 4px;
    box-sizing: border-box;
    width: 675px;
    font-size: 36pt;
    border: 1px solid black;
    border-radius: 14px;
  }

  #search-btn {
    background: white;
  }
</style>