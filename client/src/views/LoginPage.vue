<template>
    <div>
        <!-- Username Field -->
        <v-col
            id="username-box"
            cols="12"
            sm="6"
            md="3"
        >
            <v-text-field
                label="Username"
                :rules="rules"
                counter="20"
            >
            </v-text-field>
        </v-col>

        <br><br>

        <!-- Password field -->
        <v-col
            id="password-box"
            cols="12"
            sm="6"
            md="3"
        >
            <v-text-field
                label="Password"
                :rules="rules"
                counter="20"
            >
            </v-text-field>
        </v-col>

        <br><br>

        <!-- Send to register page -->
        <p class="center">Not a member yet? <button id="register" @click.stop="sendUsertoRegister">Register here!</button></p>

        <div class="center">
            <br><br>
            <!-- Go back to home page -->
            <v-btn @click.stop="sendUserToHome">
                Back
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            rules: [val => val.length <= 20 || "Max 20 characters"]
        }
    },
    methods: {
        sendUsertoRegister() {
            this.$router.push({
                name: 'register'
            });
        },
        sendUserToHome() {
            this.$router.push({
                name: 'home'
            });
        }
    }
}
</script>

<style scoped>
    #username-box, #password-box {
        margin-left: 37%;
    }

    #register {
        color: blue;
    }
</style>