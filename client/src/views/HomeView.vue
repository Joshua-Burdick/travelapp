<template>
  <div class="home">
    <!-- Login Button -->
    <v-btn
      elevation="2"
      @click="$router.push('/login')"
    >
      LOGIN
    </v-btn>
    <br><br><br>
    <!-- Search button -->
    <v-btn
        elevation="2"
        @click="$router.push('/search')"
    >
      Search
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>