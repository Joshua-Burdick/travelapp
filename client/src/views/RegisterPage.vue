<template>
    <div>
        <!-- Email -->
        <v-col
            id="register-email"
            cols="12"
            sm="6"
            md="3"
        >
            <v-text-field
                label="Enter an email"
                :rules="rules"
                counter="20"
            >
            </v-text-field>
        </v-col>

        <!-- Username -->
        <v-col
            id="register-user"
            cols="12"
            sm="6"
            md="3"
        >
            <v-text-field
                label="Create a username"
                :rules="rules"
                counter="20"
            >
            </v-text-field>
        </v-col>

        <!-- Password -->
        <v-col
            id="register-pwd"
            cols="12"
            sm="6"
            md="3"
        >
            <v-text-field
                label="Create a password"
                :rules="rules"
                rules.color="red"
                counter="20"
            >
            </v-text-field>
        </v-col>

        <!-- Return to login -->
        Already a member? <button id="to-login" @click="$router.push({name: '/login'})">Login Here</button>
        <br><br>

        <!-- Return to Home -->
        <v-btn
            elevation="2"
            @click="$router.push({name: 'home'})"
        >
            Home
        </v-btn>
    </div>
    
</template>

<script>

export default{
    data: () => {
        return {
            rules: [
                val => val.length <= 20 || "Max 20 characters",
                val => !!val || "Required"
            ]
        }
    }
}
</script>

<style scoped>
    #to-login {
        color: blue;
    }

    #register-email, #register-user, #register-pwd {
        margin-left: 38%;
    }
</style>