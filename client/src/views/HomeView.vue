<template>
  <div class="home">
    <!-- Login Button -->
    <v-btn
      elevation="2"
      @click="$router.push('/login')"
    >
      LOGIN
    </v-btn>
    <button id="to-login" @click="$router.push('/LoginPage')"></button>
        <br><br>
    <br><br><br>
    <br><br>


    <!-- Search criteria -->
    <v-col
      id="country-box"
      cols="12"
      sm="6"
      md="3"
    >
      <v-text-field
          label="Country"
          v-model="country"
          @keyup.enter="search()"
      >
      </v-text-field>
    </v-col>

    <v-col
      id="city-box"
      cols="12"
      sm="6"
      md="3"
    >
      <v-text-field
          label="City"
          v-model="city"
          @keyup.enter="search()"
      >
      </v-text-field>
    </v-col>

    <v-col
      id="budget-box"
      cols="12"
      sm="6"
      md="3"
    >
      <v-text-field
          label="Budget"
          v-model="budget"
          @keyup.enter="search()"
      >
      </v-text-field>
    </v-col>

    <!-- If Invalid Search -->
    <p v-if="validSearch === false" id="invalid-search-error">Invalid Search</p>
    <br>

    <!-- Search button -->
    <v-btn
        elevation="2"
        @click="search()"
    >
      Search
    </v-btn>
    <br><br>
        <!-- Send to Weather page -->
        <v-btn
      elevation="2"
      @click="$router.push('/Weather')"
    >
      Weather
    </v-btn>
    <br><br>
  </div>
</template>

<script>
// @ is an alias to /src

import SearchHandler from '../classes/SearchHandler.js';

export default {
  name: 'HomeView',
  components: {

  },
  data: ()=> {
    return {
      country: "",
      city: "",
      budget: "",
      validSearch: true
    }
  },
  async mounted() {
    document.title = "TravelApp";
  },
  methods: {
    search() {
      this.validSearch = true;
      
      let search = new SearchHandler();
      let searchable = search.validateSearch(this.country, this.city);
      if (searchable) this.$router.push(`/search/${this.country}%${this.city}%budget=${this.budget}`);
      else this.validSearch = false;
    }
  }
}
</script>

<style scoped>
  #country-box, #city-box, #budget-box {
    margin-left: 37%;
  }

  #invalid-search-error {
    color: rgb(230, 35, 35);
  }
</style>