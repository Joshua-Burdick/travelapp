<template>
  <div class="profile-container">
    <div class="title-card-container">
      <div class="text-h5 font-weight-black white--text">
        Your Profile:
      </div>
      <v-card 
        width="400"
        class="card-container pb-2 px-2"
        dark
      >
        <h1 class="text-h3 font-weight-black my-5">
          {{ user }}
        </h1>
        <div class="text-h6 font-weight-black">
          Registered Email Address:
        </div>
          <p>
            {{ email }}
          </p>
        <v-card-actions class="card-actions">
          <v-btn
            @click="back"
            text

          >
            <v-icon class="mr-2">mdi-arrow-left</v-icon>
            Back
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn 
            @click="logout"
            color="error"
            text
          >
            <v-icon class="mr-2">mdi-account-off</v-icon>
            Log Out
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
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
      localStorage.clear();
      this.$router.push({
        name: 'home'
      });
    },
    back() {
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
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.title-card-container {
  display: flex;
  flex-direction: column;
  align-items: left;
}
.card-container {
  border: 1px solid white; 
  border-radius: 10px; 
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%
}
</style>