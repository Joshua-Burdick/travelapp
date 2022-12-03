<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // get user location
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem('startingLat', position.coords.latitude);
        localStorage.setItem('startingLng', position.coords.longitude);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
</script>


<style>
  .center {
    display: flex; 
    justify-content: center; 
    align-items: center
  }
</style>