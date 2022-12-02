<template>
  <div>
    <v-card elevation="2">
      <v-card-text>
        <div class="center text-h4">{{ Math.round(weather.main.temp) }}°F</div>
        <div class="center text-h6">
          {{ weather.weather[0].main }} <v-icon>{{ getIcon() }}</v-icon>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          class="center"
          @click.stop="dialog = true"
          color="primary"
          small
          text
        >
          More
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog class="weather-dialog" v-model="dialog" max-width="300">
      <v-card elevation="2">
        <v-card-title>
          Weather for {{ weather.name }}, {{ weather.sys.country }}
        </v-card-title>
        <v-card-text>
          <div class="center">{{ Math.round(weather.main.temp) }}°F</div>
          <div class="center">
            {{ weather.weather[0].main }}<v-icon>{{ getIcon() }}</v-icon>
          </div>
          <div>Feels Like {{ weather.main.feels_like }}°</div>
          <div>Humidity: {{ weather.main.humidity }}%</div>
          <div>Wind: {{ weather.wind.speed }}mph</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.stop="dialog = false" text>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Storage from "../classes/Storage.js";

export default {
  data() {
    return {
      api_key: "8b81c25b4594c01f9e7d4caec4793f7a",
      url_base: "https://api.openweathermap.org/data/2.5/",
      weather: {},
      dialog: false,
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      fetch(
        `${this.url_base}weather?lat=${Number(
          Storage.get("Latitude")
        )}&lon=${Number(Storage.get("Longitude"))}&units=imperial&APPID=${
          this.api_key
        }`
      )
        .then((res) => {
          return res.json();
        })
        .then(this.setResults);
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let date = new Date();
      let months = [
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      return `${days[date.getDay()]}, ${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`;
    },
    getIcon() {
      switch (this.weather.weather[0].main) {
        case "Rain":
          return "mdi-weather-pouring";
        case "light rain":
          return "mdi-weather-rainy";
        case "Clouds":
          return "mdi-weather-cloudy";
        case "Mist":
          return "mdi-weather-fog";
        case "Haze":
          return "mdi-weather-cloudy-alert";
        default:
          return "mdi-weather-sunny";
      }
    },
  },
};
</script>