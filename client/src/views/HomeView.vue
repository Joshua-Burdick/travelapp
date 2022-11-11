<template>
  <div class="home">
    <!-- Login Button -->
    <v-btn
      id="login"
      elevation="2"
      @click="$router.push({name: 'login'})"
    > LOGIN
    </v-btn>

    <!-- Search criteria -->
    <div id="loc-box">
      <GmapAutocomplete
        id="place-box"
        @place_changed="setPlace"
        placeholder="Shall we play a game?"
        icon="../assets/logo.png"
        @keyup.enter="search"
      >
      </GmapAutocomplete>
    </div>

    <!-- <v-col id="budget-box" cols="12" sm="1" md="1">
      <v-text-field
        label="Budget"
        v-model="budget"
        @keyup.enter="$router.push('/search')"
      ></v-text-field>
    </v-col> -->
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
    },
    search(place) {
      this.setPlace(place);
      setTimeout(() => {console.log("Pushing router with place: " + place)}, 50);
      this.$router.push({name: 'search'});
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
  };
</script>

<style scoped>
  .home {
    background-image: linear-gradient(to right top, #000000, #141313, #201f20, #2c2c2d, #39393a, #484849, #575758, #666768, #7c7d7e, #939394, #aaaaab, #c2c2c2);
    height: 100vh;
    width: 100vw;
  }

  #login {
    margin-left: 93%;
    margin-top: 1%;
  }

  #place-box {
    background: white;
    margin-top: 20%;
    padding: 12px 20px;
    box-sizing: border-box;
    width: 50%;
    font-size: 36pt;
    border: 1px solid black;
    border-radius: 14px;
  }

  #loc-box {
    margin-left: 8%;
  }

  #budget-box {
    margin-left: 45.5%;
  }
</style>