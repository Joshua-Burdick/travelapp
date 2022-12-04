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
      // sets starting coords to snhu if permission is denied
      // or location is not available
      localStorage.setItem('startingLat', 43.03821660000001);
      localStorage.setItem('startingLng', -71.4493554);
      console.warn(e);
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