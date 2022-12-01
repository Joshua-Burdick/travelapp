<template>
  <div class="register-form-container">
    <v-card width="500">
      <v-card-title>
        <h1 class="display-1">Register</h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
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
            @click:append="showPassword2 = !showPassword2"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
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
    }
  }
}
</script>


<style scoped>

  .register-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

</style>