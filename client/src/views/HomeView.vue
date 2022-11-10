<template>
  <div class="home">
    <!-- Login Button -->
    <v-btn elevation="2" @click="$router.push('/login')"> LOGIN </v-btn>
    <br /><br /><br />

    <!-- Search criteria -->
    <div id="loc-box">
      <GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
    </div>

    <v-col id="budget-box" cols="12" sm="1" md="1">
      <v-text-field label="Budget" v-model="budget" @keyup.enter="search()">
      </v-text-field>
    </v-col>

    <!-- If Invalid Search -->
    <p v-if="validSearch === false" id="invalid-search-error">Invalid Search</p>
    <br />

    <!-- Search button -->
    <v-btn elevation="2" @click="$router.push('/search')"> Search </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

import Storage from "../classes/Storage.js";
import Location from "../classes/Location.js"

export default {
  name: "HomeView",
  components: {},
  data: () => {
    return {
      place: "",
      budget: "",
    };
  },
  async mounted() {
    document.title = "TravelApp";
    Storage.set('Latitude', 0);
    Storage.set('Longitude', 0);
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
    }
  }
  };
</script>

<style scoped>
  #loc-box {
    margin-left: 4.7%;
  }

  #budget-box {
    margin-left: 45.5%;
  }

  #invalid-search-error {
    color: rgb(230, 35, 35);
  }
</style>