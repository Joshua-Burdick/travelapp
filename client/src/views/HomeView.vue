<template>
  <div class="home center">

    <div
      v-if="$vuetify.breakpoint.mdAndUp" 
      class="planet"
    ></div>

    <!-- Login Button -->
    <div class="login ma-5">
      <v-btn 
        v-if="!user"
        @click.stop="login"
        text
        class="white--text text-h5 font-weight-bold"
      >
        <v-icon 
          large
          class="mr-2"
        >mdi-account</v-icon>
        Log In
      </v-btn>
      <v-btn 
        v-else 
        @click.stop="profile"
        text
        class="white--text text-h5 font-weight-bold"
        >
        <v-icon 
          large
          class="mr-2"
        >mdi-account-check</v-icon>
        {{ user }}
      </v-btn>
    </div>

    <!-- Search criteria -->
    <div class="search">
      <v-btn
        @click="showBudget = !showBudget"
        fab
        dark
        :color="showBudget ? 'red' : 'green'"
        style="position: absolute; top: 0; left: -70px;"
      >
        <v-icon 
          v-if="!showBudget"
          large
        >mdi-cash</v-icon>
        <div 
          v-else
          class="text-h4 font-weight-black"
        >{{ budgetValue }}</div>
      </v-btn>
      <v-text-field
        id="autocomplete"
        style="z-index: 2"
        filled
        solo
        dark
        label="Enter a location"
        prepend-inner-icon="mdi-map-marker"
      ></v-text-field>
      <div 
        class="budget-container pa-2"
        :style="budgetOnDisplay"
      >
        <div
          v-for="budgetTier in budgetScale"
          :key="budgetTier"
        >
          <v-icon
            v-if="budgetTier <= budgetValue"
            @click="budgetValue = budgetTier"
            large
            color="green"
          >mdi-currency-usd</v-icon>
          <v-icon
            v-else
            @click="budgetValue = budgetTier"
            large
            color="red"
          >mdi-currency-usd</v-icon>
        </div>
      </div>
    </div>
      
  </div>
</template>
 
<script>
/* eslint-disable */
// @ is an alias to /src
import Storage from "../classes/Storage.js";
import addRecentActivity from "../utils/RecentActivity.js";

export default {
  name: "HomeView",
  data() {
    return {
      // attaches to the google maps autocomplete api
      autocomplete: undefined,
      // gets logged in user
      user: localStorage.getItem('username'),
      // budget scale
      budgetScale: 13,
      budgetValue: 1,
      showBudget: false,
    };
  },
  created() {
    document.title = "TravelApp";
  },
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
    );

    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      const PLACE = this.autocomplete.getPlace();
      const LAT = PLACE.geometry.location.lat();
      const LNG = PLACE.geometry.location.lng();

      // add to recent activity feed
      addRecentActivity({
        name: PLACE.name,
        lat: LAT,
        lng: LNG,
      });

      Storage.set("Latitude", LAT);
      Storage.set("Longitude", LNG);
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
      }
    },
    budgetOnDisplay() {
      if (this.showBudget) {
        return {
          transform: "translateY(-40%)",
        }
      } else {
        return {
          opacity: 0,
        }
      }
    },
  },
  methods: {
    login() {
      this.$router.push({
        name: "login"
      });
    },
    profile() {
      this.$router.push({
        name: "profile"
      });
    }
  }
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.budget-container {
  transform: translateY(-160%);
  background-color: rgba(30, 30, 30, 0.5);
  border-radius: 5px;
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 400ms;
}
</style>

