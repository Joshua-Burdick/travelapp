<template>
  <div class="profile-container">
    <v-card 
      width="400"
      class="card-container pb-2 px-2"
      dark
    >
      <h1 class="text-h1">
        {{ user }}
      </h1>
      <p>
        {{ email }}
      </p>
      <v-btn 
        @click="logout"
        color="error"
      >
        Log Out
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: localStorage.getItem('username'),
      email: 'fetching...'
    }
  },
  mounted() {
    this.axios.get('/api/auth/email/' + this.user)
      .then(response => {
        console.log(response.data)
        this.email = response.data.email;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    logout() {
      localStorage.removeItem('username');
      this.$router.push({
        name: 'home'
      });
    }
  }
};
</script>

<style scoped>
.profile-container {
  background-image: url("https://thumbs.gfycat.com/LatePositiveHerculesbeetle-size_restricted.gif");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.card-container {
  border: 1px solid white; 
  border-radius: 10px; 
  background-color: rgba(255, 255, 255, 0.1);
}
</style>