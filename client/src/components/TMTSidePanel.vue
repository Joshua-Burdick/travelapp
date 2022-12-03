<template>
  <div 
    :style="sidePanelWidth"
    class="side-panel-container"
  >
    <div 
      class="side-panel center"
      style="display: flex; flex-direction: column;"
    >
      <!-- title -->
      <div>
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          Lets Explore
        </div>
        <div class="text-h3 font-weight-black">
          {{ place }}
        </div>
      </div>
      
      <!-- distance -->
      <div>
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          <v-icon>mdi-map-marker-distance</v-icon>
          Distance
        </div>
        <div class="text-h3 font-weight-black">
          {{ distance }}km
        </div>
      </div>
      
      <!-- transit -->
      <div>
        <div 
          class="text-h5"
          style="font-weight: 300"
        >
          Preferred Mode of Transit
        </div>
        <div class="text-capitalize text-h3 font-weight-black">
          {{ transit }}
        </div>
      </div>
    </div>
    <div 
      @click="toggleSidePanel"
      class="close-open-btn-container center"
    >
      <v-icon 
        large
        disabled
      >
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
    distance: String,
    weather: Object,
  },
  emits: [
    "toggle-side-panel"
  ],
  computed: {
    sidePanelWidth() {
      return {
        transform: this.showSidePanel ? 'translateX(0)' : 'translateX(-380px)',
      };
    },
  },
  methods: {
    toggleSidePanel() {
      this.$emit("toggle-side-panel");
    },
  },
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
  
  
  
  width: 400px;
  height: 100vh;
}
</style>
