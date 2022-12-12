<template>
  <div>
      <div v-for="(weather, index) in weatherList" :key="weather.id">
          <div v-if="index % 8  === 0"> <!--there are 8 3 hour periods in a day-->
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
          lat: "",
          lng: "",
          weather: {},
          weatherList: []      
       }
  },
  mounted() {
      this.lat = Number(localStorage.getItem("lat")),
      this.lng = Number(localStorage.getItem("lng")),
      this.fetchWeather()
  },
  methods: {
      fetchWeather() {
          fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lng}&units=imperial&APPID=8b81c25b4594c01f9e7d4caec4793f7a`)
              .then(res => res.json())
              .then(data => this.weatherList = data.list)
              .catch(err => console.log(err))
              
      },
  }
}
</script>