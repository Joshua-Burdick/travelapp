<template>
  <div class="background-container">
    <SidePanel 
      v-if="!introPlaying"
      @toggle-side-panel="showSidePanel = !showSidePanel"
      :showSidePanel="showSidePanel"
      :place="place"
      :budget="budget"
      :transit="transit"
      :distance="distance"
      :weather="weather"
    />
    <GmapMap 
      :center="{ lat, lng }" 
      :zoom="14" 
      :options="options"
      :style="mapStyles"
      class="map-cover"
    ></GmapMap>
  </div>
</template>

<script>
import SidePanel from "../components/TMTSidePanel.vue";

export default {
  components: {
    SidePanel
  },
  mounted() {
    let { lat, lng, place, budget, transit } = this.$route.query;
    this.lat = Number(lat);
    this.lng = Number(lng);
    this.place = place;
    this.budget = budget;
    this.transit = transit;

    this.startingLat = Number(localStorage.getItem("startingLat"));
    this.startingLng = Number(localStorage.getItem("startingLng"));

    this.getWeather();

    setTimeout(() => {
      this.mapStyles = {}
    }, 50)
    setTimeout(() => {
      this.introPlaying = false;
      setTimeout(() => {
        this.showSidePanel = true;
      }, 50)
    }, 650)
  },
  data: () => {
    return {

      place: "",

      lat: "",
      lng: "",
      startingLat: "",
      startingLng: "",

      budget: null,
      transit: null,
      weather: null,

      showSidePanel: false,

      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      },

      mapStyles: {
        height: '0',
        width: '0',
        top: '50%',
        left: '50%'
      },
      
      introPlaying: true
    };
  },
  methods: {
    getDistanceFromLatLongInMiles() {
      let R = 3958.8; // Radius of the Earth in miles
      let dLat = this.deg2rad(this.lat - this.startingLat); // deg2rad below
      let dLon = this.deg2rad(this.lng - this.startingLng);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(this.startingLat)) *
          Math.cos(this.deg2rad(this.lat)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c; // Distance in miles
      return d;
    },
    getDistanceFromLatLngInKm(lat1, lng1, lat2, lng2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
      var dLng = this.deg2rad(lng2 - lng1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return Math.round(d);
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },
    getWeather() {
      // {{ Math.round(weather.main.temp) }}°F
      let apiKey = '8b81c25b4594c01f9e7d4caec4793f7a';
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&units=metric&APPID=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.weather[0].main);
          let icon;
          switch (data.weather[0].main) {
            case "Rain":
              icon = "mdi-weather-pouring";
              break;
            case "light rain":
              icon = "mdi-weather-rainy";
              break;
            case "Clouds":
              icon = "mdi-weather-cloudy";
              break;
            case "Mist":
              icon = "mdi-weather-fog";
              break;
            case "Haze":
              icon = "mdi-weather-cloudy-alert";
              break;
            case "Clear":
              icon = "mdi-weather-sunny";
              break;
            default:
              icon = "mdi-weather-sunny";
          }
          this.weather = {};
          this.weather.icon = icon;
          this.weather.temp = data.main.temp;
        });
    }
  },
  computed: {
    distance() {
      return this.getDistanceFromLatLngInKm(
        this.startingLat,
        this.startingLng,
        this.lat,
        this.lng
      );
    }
  }
}
</script>

<style scoped>
.background-container {
  background-color: rgb(0, 0, 0);
  height: 100vh;
  width: 100vw;
  position: relative;
}
.map-cover {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: 500ms;
}
</style>