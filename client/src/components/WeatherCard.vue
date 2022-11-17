<template>
  <div class="weather">
    <v-card
        elevation="2"
    >
      <v-card-title>{{ weather.name }}, {{ weather.sys.country }}</v-card-title>
      <v-card-text>
        <div>{{ dateBuilder() }}</div>
        <div>{{ Math.round(weather.main.temp) }}°F</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

import Storage from "../classes/Storage.js"

export default {
  data() {
    return {
      api_key: "8b81c25b4594c01f9e7d4caec4793f7a",
      url_base: "https://api.openweathermap.org/data/2.5/",
      weather: {},
    };
  },
  created() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      fetch(`${this.url_base}weather?lat=${Number(Storage.get('Latitude'))}&lon=${Number(Storage.get('Longitude'))}&units=imperial&APPID=${this.api_key}`)
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
  },
};
</script>