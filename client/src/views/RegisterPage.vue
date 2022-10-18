<template>
    <div>
        This is the register page!

        <br><br><br>

        <v-btn
            elevation="2"
            @click="$router.push('/login')"
        >
            Back to Login
        </v-btn>
        <br><br>
        <v-btn
            elevation="2"
            @click="$router.push('/')"
        >
            Home
        </v-btn>
    </div>
    
</template>