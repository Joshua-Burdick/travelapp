<template>
  <div>
    {{ lat }}
    {{ lng }}
    {{ budget }}
    {{ place }}
    {{ transit }}
  </div>
</template>

<script>
export default {
  mounted() {
    let { lat, lng, place, budget, transit } = this.$route.query;
    this.lat = lat;
    this.lng = lng;
    this.place = place;
    this.budget = budget;
    this.transit = transit;
  },
  data: () => {
    return {
      lat: "",
      lng: "",
      place: "",
      budget: "",
      transit: "",
    };
  },
}
</script>