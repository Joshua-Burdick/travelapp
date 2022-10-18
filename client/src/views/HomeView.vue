<template>
  <div class="home">
    <p> Here's some text </p>
        <v-btn
            elevation="2"
            @click="$router.push('/search')"
        >Search
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
