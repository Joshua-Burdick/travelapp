<template>
  <!-- eslint-disable -->
  <div
    :style="forecastPanelHeight"
    class="forecast-page"
  >
    <v-card color="rgba(255, 255, 255, 0.75)">
      <v-app-bar
        flat
        color="rgba(0, 0, 0, 0)"
        class="forecast-nav"
        @click="toggleForecast"
      >
        <v-icon class="forecast-nav-arrow">mdi-chevron-left</v-icon>
        <v-toolbar-title class="forecast-nav-text text-h6 black--text pl-0">
          5 Day Forecast
        </v-toolbar-title>
      </v-app-bar>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="(weather, index) in weatherList"
            v-if="index % 8 === 0"
            :key="weather.id"
            :cols="weather.flex"
          >
            <v-card color="rgba(255, 255, 255, 0.75)">
              <v-card-title class="text-white text-h5 center" style="font-weight: 300">{{
                forecast[index / 8]
              }}</v-card-title>
              <div class="center">
                <div class="text-h6">{{ weather.main.temp }}°C</div>
                <br>
                <v-icon
                  class="mr-2"
                  x-large
                  color="black"
                >
                  {{ getIcon(weather) }}
                </v-icon>
              </div>
              <br />
              <v-divider class="mx-4"></v-divider>
              <br />
              <div class="text-subtitle-1 center">
                {{ weather.main.temp_min }}° | {{ weather.main.temp_max }}°
              </div>
              <br />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weather: {},
      weatherList: [],
      shortList: [],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      forecast: [],
    };
  },
  props: {
    showForecast: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    this.fetchWeather();
    this.findDays();
  },
  emits: [
    "toggle-forecast"
  ],
  methods: {
    fetchWeather() {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lng}&units=metric&APPID=8b81c25b4594c01f9e7d4caec4793f7a`
      )
        .then((res) => res.json())
        .then((data) => (this.weatherList = data.list))
        .catch((err) => console.log(err));
    },
    inRange(list, val) {
      if (val < list.length) return true;
      return false;
    },
    findDays() {
      let date = new Date();

      this.forecast[0] = this.days[date.getDay()];
      let start = this.days.indexOf(this.forecast[0]);

      this.forecast[1] = this.inRange(this.days, start + 1)
        ? this.days[start + 1]
        : this.days[0];
      this.forecast[2] = this.inRange(this.days, start + 2)
        ? this.days[start + 2]
        : this.inRange(this.days, start + 1)
        ? this.days[0]
        : this.days[1];
      this.forecast[3] = this.inRange(this.days, start + 3)
        ? this.days[start + 3]
        : this.inRange(this.days, start + 2)
        ? this.days[0]
        : this.inRange(this.days, start + 1)
        ? this.days[1]
        : this.days[2];
      this.forecast[4] = this.inRange(this.days, start + 4)
        ? this.days[start + 4]
        : (this.inRange(this.days), start + 3)
        ? this.days[0]
        : this.inRange(this.days, start + 2)
        ? this.days[1]
        : this.inRange(this.days, start + 1)
        ? this.days[2]
        : this.days[3];
    },
    toggleForecast() {
      this.$emit("toggle-forecast");
    },
    getIcon(forecast) {
      let icon;
      switch (forecast.weather[0].main) {
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

      return icon;
    }
  },
  computed: {
    lat: {
      get() {
        return Number(localStorage.getItem("Latitude"));
      },
      set(newLat) {
        localStorage.setItem("Latitude", newLat);
      },
    },
    lng: {
      get() {
        return Number(localStorage.getItem("Longitude"));
      },
      set(newLng) {
        localStorage.setItem("Longitude", newLng);
      },
    },
    forecastPanelHeight() {
      return {
        transform: this.showForecast ? 'translateY(0)' : 'translateY(-300px)'
      };
    }
  },
};
</script>

<style scoped>
.forecast-page {
  transition: 500ms;
}

.forecast-nav {
  cursor: pointer;
  transition: 300ms;
  top: 0;
  left: 0;
  font-weight: 300;
}
.forecast-nav:hover .forecast-nav-text {
  font-weight: 500;
  text-decoration: underline;
}
.forecast-nav:hover .forecast-nav-arrow {
  transform: translateX(-3px);
}
</style>