<template>
  <div class="register-form-container">
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
      <v-card-title class="center mb-3">
        <h1>
          Register
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form 
          ref="form"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            filled
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            filled
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            filled
            required
            @click:append="showPassword = !showPassword"
          ></v-text-field>
          <!-- re-enter password -->
          <v-text-field
            v-model="password2"
            :rules="password2Rules"
            :type="showPassword ? 'text' : 'password'"
            label="Re-enter Password"
            required
            filled
            @click:append="showPassword2 = !showPassword2"
          ></v-text-field>
        </v-form>
        <div class="text-h6 red--text">
          {{ error }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          color="primary" 
          @click="register"
        >
          Register
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn 
          @click="login"
          text
        >
          Login here
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 6) || "Password must be greater than 6 characters",
      ],
      showPassword: false,
      password2: "",
      password2Rules: [
        (v) => (v === this.password) || "Passwords must match",
      ],
      error: "",
    }
  },
  methods: {
    register() {
      // make sure form is valid
      if (this.$refs.form.validate()) {
        // send post request to server
        this.axios.post('/api/auth/register', {
          username: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.user) {
            console.log(response.data.user)
            // if successful, redirect to login page
            this.$router.push({
              name: 'login'
            })
          } else {
            // if not successful, display error message
            this.error = response.data.error
          }
        })
        .catch((error) => {
          // if error, show error message
          console.log(error)
        })
      }
    },
    login() {
      // redirect to login page
      this.$router.push({
        name: 'login'
      })
    }
  },
  watch: {
    // clear error message when user starts typing
    name() {
      this.error = ''
    },
    email() {
      this.error = ''
    },
    password() {
      this.error = ''
    },
    password2() {
      this.error = ''
    },
    error(v) {
      if (v) {
        setTimeout(() => {
          this.error = ''
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
.register-form-container {
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