<template>
    <div>
        <div class="home-btn ma-5">
            <!-- Go back to home page -->
            <v-btn @click.stop="sendUserToHome">
                <v-icon>mdi-home</v-icon>
            </v-btn>
        </div>

        <!-- Username Field -->
        <div class= "center">
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
        </div>

        <br><br>

        <!-- Password field -->
        <div class="center">
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
        </div>

        <!-- Send to register page -->
        <p class="question center">Not a member yet? <button id="register" @click.stop="sendUsertoRegister">Register here!</button></p>

        
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            rules: [val => val.length <= 20 || "Max 20 characters"]
        }
    },
    created() {
        document.title = "TravelApp - Log In";
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

    .question {
        margin-top: 25%;
    }

    #register {
        color: blue;
    }
</style>