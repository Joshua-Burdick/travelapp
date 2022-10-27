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
        <p>Not a member yet? <button id="register" @click="$router.push('/register')">Register here!</button></p>
        <br><br>

        <!-- Go back to home page -->
        <v-btn
            elevation="2"
            @click="$router.push('/')"
        >
            Back
        </v-btn>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            rules: [val => val.length <= 20 || "Max 20 characters"]
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