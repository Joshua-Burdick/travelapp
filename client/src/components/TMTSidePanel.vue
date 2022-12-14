<template>
  <div 
    :style="sidePanelWidth"
    class="side-panel-container"
  >
    <div 
      @click="$router.push({ name: 'home' })"
      class="home-btn d-flex align-center px-5 py-1"
    >
      <v-icon 
        small
        class="home-btn-arrow mr-1"
      >mdi-arrow-left</v-icon>
      <div class="home-btn-text text-p">
        Search Again
      </div>
    </div>
    <div 
      class="side-panel px-5 py-12"
      style="display: flex; flex-direction: column;"
    >
      <!-- title -->
      <div class="mb-5">
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          Let's Explore
        </div>
        <div 
          class="text-h3 font-weight-black"
          style="display: flex; align-items: center;"
        >
          <v-icon
            x-large
            class="mr-2"
            color="black"
          >mdi-bullseye</v-icon>
          {{ place }}
        </div>
      </div>
      
      <!-- distance -->
      <div 
        v-if="distance"
        class="mb-5"
      >
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          Distance From You
        </div>
        <div 
          class="text-h3 font-weight-black"
          style="display: flex; align-items: center;"
        >
          <v-icon
            class="mr-2"
            x-large
            color="black"
          >mdi-map-marker-distance</v-icon>
          {{ distance }}km
        </div>
      </div>

      <!-- budget -->
      <div 
        v-if="budget"
        class="mb-5"
      >
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          Budget
        </div>
        <div 
          class="text-h3 font-weight-black"
          style="display: flex; align-items: center;"
        >
          {{ budgetDisplay }}
        </div>
      </div>

      <!-- weather -->
      <div class="mb-5">
        <div
          class="text-h5"
          style="font-weight: 300"
        >
          Current Weather
        </div>
        <div 
          class="text-h3 font-weight-black"
          style="display: flex; align-items: center;"
        >
          <v-icon
            class="mr-2"
            x-large
            color="black"
          >{{ weather.icon }}</v-icon>
          {{ weather.temp }}°C
        </div>
        <v-btn
          text
          @click="showForecast"
          class="text-h6font-weight-black"
        >
          WEEKLY FORECAST
        </v-btn>
      </div>
      
      <!-- transit -->
      <div 
        v-if="transit"
        class="mb-5"
      >
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          Preferred Mode of Transit
        </div>
        <div 
          class="text-capitalize text-h3 font-weight-black"
          style="display: flex; align-items: center;"
        >
          <v-icon
            class="mr-2"
            x-large
            color="black"
          >mdi-{{ transit }}</v-icon>
          {{ transit }}
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-btn 
        v-if="partnerLink"
        @click="openPartnerLink"
        color="success" 
        class="text-h6 px-5 py-7 font-weight-black mb-4"
      >
        Start Your Journey Now
      </v-btn>
      <v-btn 
        @click="openGoogleMaps"
        color="secondary" 
        class="text-h6 px-5 py-7 font-weight-black"
      >
        take a look on google maps  
      </v-btn>
      <br>
      <p>
        Visit the location's <a id="site-link" target="_blank">website</a>
      </p>
    </div>
    <div 
      @click="toggleSidePanel"
      class="close-open-btn-container center"
    >
      <v-icon large>
        {{ showSidePanel ? 'mdi-chevron-left' : 'mdi-chevron-right' }}
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSidePanel: {
      type: Boolean,
      required: true,
    },
    place: String,
    budget: String,
    transit: String,
    distance: Number,
    weather: Object,
  },
  emits: [
    "toggle-side-panel",
    "toggle-forecast"
  ],
  methods: {
    toggleSidePanel() {
      this.$emit("toggle-side-panel");
    },
    openGoogleMaps() {
      console.log(this.googleMapsLink)
      window.open(this.googleMapsLink, '_blank');
    },
    openPartnerLink() {
      window.open(this.partnerLink, '_blank');
    },
    showForecast() {
      this.$emit("toggle-forecast");
    }
  },
  mounted() {
    // Create the external link to the city website
    document.getElementById("site-link").href = this.website;
  },
  computed: {
    googleMapsLink() {
      let transitMode = (() => {
        switch (this.transit) {
          case 'walk':
            return 'data=!3m1!4b1!4m2!4m1!3e2';
          case 'car':
            return 'data=!3m1!4b1!4m2!4m1!3e0';
          case 'train':
            return 'data=!3m1!4b1!4m2!4m1!3e3';
          case 'bus':
            return 'data=!3m1!4b1!4m2!4m1!3e3';
          case 'airplane':
            return 'data=!3m1!4b1!4m2!4m1!3e4';
          case 'bike':
            return 'data=!3m1!4b1!4m2!4m1!3e1';
          default:
            return '';
        }
      });
      const STARTING_CORDS = `${localStorage.getItem('startingLat')},${localStorage.getItem('startingLng')}`;
      const ENDING_CORDS = `${this.$route.query.lat},${this.$route.query.lng}`;
      return `https://www.google.com/maps/dir/${STARTING_CORDS}/${ENDING_CORDS}/${transitMode()}`;
    },
    partnerLink() {
      switch (this.transit) {
        case 'walk':
          return '';
        case 'car':
          return 'https://cars.wanderu.com/';
        case 'train':
          return 'https://www.wanderu.com/en-us/train-tickets/';
        case 'bus':
          return 'https://www.wanderu.com/en-us/bus-tickets/';
        case 'airplane':
          return 'https://www.expedia.com/Flights';
        case 'bike':
          return '';
        default:
          return '';
      }
    },
    sidePanelWidth() {
      return {
        transform: this.showSidePanel ? 'translateX(0)' : 'translateX(-380px)',
      };
    },
    budgetDisplay() {
      let output = ''
      for (let i = 0; i < this.budget; i++) {
        output += '$'
      }
      return output;
    },
    locSite() {
      return Storage.get("Website");
    }
  }
}
</script>

<style scoped>
.side-panel-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  transition: 500ms;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.close-open-btn-container {
  background-color: rgba(255, 255, 255, 0.75); 
  width: 20px; 
  height: 60px; 
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
}
.side-panel {
  background-color: rgba(255, 255, 255, 0.75);
  transition: 500ms;
  width: 450px;
  height: 100vh;
}

.home-btn {
  cursor: pointer;
  transition: 300ms;
  top: 0;
  left: 0;
  position: absolute;
  font-weight: 300;
}
.home-btn:hover .home-btn-text {
  font-weight: 500;
  text-decoration: underline;
}
.home-btn:hover .home-btn-arrow {
  transform: translateX(-3px);
}
</style>
