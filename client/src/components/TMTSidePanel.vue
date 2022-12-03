<template>
  <div 
    :style="sidePanelWidth"
    class="side-panel-container"
  >
    <div 
      class="side-panel px-6 py-8"
      style="display: flex; flex-direction: column;"
    >
      <!-- title -->
      <div class="mb-5">
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          Lets Explore
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
          >mdi-weather-partly-cloudy</v-icon>
          {{ weather.temp }}F
        </div>
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
        
        color="yellow" 
        class="text-h6 px-5 py-7 font-weight-black mb-4"
      >
        book now with expedia
      </v-btn>
      <v-btn 
        @click="openGoogleMaps"
        color="secondary" 
        class="text-h6 px-5 py-7 font-weight-black"
      >
        take a look on google maps  
      </v-btn>
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
    "toggle-side-panel"
  ],
  methods: {
    toggleSidePanel() {
      this.$emit("toggle-side-panel");
    },
    openGoogleMaps() {
      console.log(this.googleMapsLink)
      window.open(this.googleMapsLink, '_blank');
    }
  },
  computed: {
    googleMapsLink() {
      const STARTING_CORDS = `${localStorage.getItem('startingLat')},${localStorage.getItem('startingLng')}`;
      const ENDING_CORDS = `${this.$route.query.lat},${this.$route.query.lng}`;
      return `https://www.google.com/maps/dir/${STARTING_CORDS}/${ENDING_CORDS}`;
    },
    sidePanelWidth() {
      return {
        transform: this.showSidePanel ? 'translateX(0)' : 'translateX(-380px)',
      };
    },
    budgetDisplay() {
      if (this.budget == "0") {
        return "Free";
      } else if (this.budget == "1") {
        return "$";
      } else if (this.budget == "2") {
        return "$$";
      } else if (this.budget == "3") {
        return "$$$";
      } else if (this.budget == "4") {
        return "$$$$";
      }
    },
  }
}
</script>

<style scoped>
.side-panel-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
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
</style>
