<template>
  <div class="login-form-container">
    <v-card 
      width="400"
      class="card-container pb-2 px-2"
      dark
    >
      <v-btn
        @click="home"
        text
        style="position: absolute; left: 0; top: 0;"
      >
        <v-icon 
          class="mr-1" 
          small
        >mdi-arrow-left</v-icon>
        Home
      </v-btn>
      <v-card-title class="center mt-1 mb-3">
        <h1>
          Login
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form 
          ref="form" 
          lazy-validation
        >
          <v-text-field
            v-model="username"
            :rules="nameRules"
            prepend-icon="mdi-account"
            filled
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="password"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            prepend-icon="mdi-lock"
            label="Password"
            filled
          ></v-text-field>
        </v-form>
        <div class="text-h6 red--text">
          {{ error }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          @click="login"
          color="primary" 
        >
          Login
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn 
          @click="register"
          text
        >
          Register here
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',
    showPassword: false,
    error: '',
    nameRules: [
      v => !!v || 'Name is required',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
    ],
  }),
  methods: {
    login() {

      if (!this.$refs.form.validate()) return

      this.axios.post('/api/auth/login', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log(response.data)
        if (response.data.authed) {
          localStorage.setItem('username', this.username);
          this.$router.push({ 
            name: 'home' 
          });
        } else {
          this.error = "Invalid username or password";
        }
      })
      .catch(error => {
        console.log(error)
      })
    },
    register() {
      this.$router.push({ 
        name: 'register' 
      });
    },
    home() {
      this.$router.push({ 
        name: 'home' 
      });
    }
  },
  watch: {
    error() {
      if (this.error) {
        setTimeout(() => {
          this.error = ''
        }, 3000)
      }
    }
  }
};
</script>

<style scoped>
.login-form-container {
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

