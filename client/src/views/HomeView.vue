<template>
  <div class="home center">
    <div v-if="$vuetify.breakpoint.mdAndUp" class="planet"></div>

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
import addRecentActivity from "../utils/RecentActivity.js";

export default {
  name: "HomeView",
  data() {
    return {
      // attaches to the google maps autocomplete api
      autocomplete: undefined,
      nearby: undefined,
      // gets logged in user
      user: localStorage.getItem('username'),
      resCount: 0
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

    Storage.set("Restaurants0", "");
    Storage.set("Restaurants1", "");
    Storage.set("Restaurants2", "");

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
      Storage.set("Website", PLACE.website);

      let map = new google.maps.Map(document.getElementById('autocomplete'));
      let service = new google.maps.places.PlacesService(map);
      let request = {
        location: new google.maps.LatLng(this.lat, this.lng),
        radius: '1000',
        type: ['restaurant'],
      };

      this.findNearby(service, request);

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
    lat: {
      get() {
          return Storage.get('Latitude');
      },
      set(newLat) {
          Storage.set('Latitude', newLat);
      }
    },
    lng: {
      get() {
          return Storage.get('Longitude');
      },
      set(newLng) {
          Storage.set('Longitude', newLng);
      }
    }
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
    },
    findNearby(service, request) {

      service.nearbySearch(request, (results, status, pagination) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          Storage.set(`Restaurants${this.resCount}`, JSON.stringify(results));
          this.resCount++;
        }

        // If more than 20 results, up to 60
        if (pagination && pagination.hasNextPage) {
          pagination.nextPage();
        }
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
}
</style>

