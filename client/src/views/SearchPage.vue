<template>
    <div>
        <br><br>
        <p>You searched (Country, State, City)<br>{{this.$route.params.country}}<br>{{this.$route.params.state}}<br>{{this.$route.params.city}}</p>
        <br><br>

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
        async mounted() {
            document.title = "TravelApp - Search";
        }
    }
</script>