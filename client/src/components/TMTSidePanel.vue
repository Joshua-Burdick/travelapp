<template>
  <div class="side-panel-container">
    Side Panel
  </div>
</template>

<script>
export default {
  props: {
    place: String,
    budget: String,
    transit: String,
    distance: String,
    weather: Object,
  }
}
</script>

<style scoped>
.side-panel-container {
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
