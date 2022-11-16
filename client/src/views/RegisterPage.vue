<template>
    <div>
        <div class="home-btn ma-5">
            <!-- Return to Home -->
            <v-btn @click.stop="sendUserToHome">
                <v-icon>mdi-home</v-icon>
            </v-btn>
        </div>

        <div class="center">
            <!-- Email -->
            <v-col
                id="register-email"
                cols="12"
                sm="6"
                md="3"
            >
                <v-text-field
                    label="Enter an email"
                    :rules="emailRules"
                    counter="50"
                >
                </v-text-field>
            </v-col>
        </div>

        <div class="center">
            <!-- Username -->
            <v-col
                id="register-user"
                cols="12"
                sm="6"
                md="3"
            >
                <v-text-field
                    label="Create a username"
                    :rules="acctRules"
                    counter="20"
                >
                </v-text-field>
            </v-col>
        </div>
        
        <div class="center">
            <!-- Password -->
            <v-col
                id="register-pwd"
                cols="12"
                sm="6"
                md="3"
            >
                <v-text-field
                    label="Create a password"
                    :rules="acctRules"
                    rules.color="red"
                    counter="20"
                >
                </v-text-field>
            </v-col>
        </div>

        <!-- Return to login -->
        <p class="question center">Already a member? <button id="to-login" @click.stop="sendUserToLogin">Log In</button></p>
    </div>
    
</template>

<script>

export default{
    data: () => {
        return {
            acctRules: [
                val => val.length <= 20 || "Max 20 characters",
                val => !!val || "Required"
            ],
            emailRules: [
                val => val.length <= 50 || "Max 50 characters",
                val => !!val || "Required"
            ]
        }
    },
    created() {
        document.title = "TravelApp - Register";
    },
    methods: {
        sendUserToLogin() {
            this.$router.push({
                name: 'login'
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
        margin-top: 22%;
    }

    #to-login {
        color: blue;
    }
</style>