<template>
  <div>
      <div v-for="(weather, index) in weatherList" :key="weather.id">
          <div v-if="index % 8  === 0">
              in {{( index * 3)}} hours, it will be
              {{weather.main.temp}} °F
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
  data() {
      return {
          api_key: '8b81c25b4594c01f9e7d4caec4793f7a',
          url_base: 'https://api.openweathermap.org/data/2.5/',
          lat: "-34.0522",
          lon: "118.2437",
          weather: {},
          weatherList: []      
       }
  },
  mounted() {
      this.fetchWeather()
  },
  methods: {
      fetchWeather() {
          fetch(`${this.url_base}forecast?lat=${this.lat}&lon=${this.lon}&units=imperial&APPID=${this.api_key}`)
              .then(res => res.json())
              .then(data => this.weatherList = data.list)
              .catch(err => console.log(err))
              
      },
  }
}
</script>