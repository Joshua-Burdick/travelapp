<template>
    <div>
        <br><br>
        <p>You searched (Country, State, City)<br>{{this.$route.params.country}}<br>{{this.$route.params.state}}<br>{{this.$route.params.city}}</p>
        <br>
        <p v-if="budget != 0">With a budget of ${{budget}}</p>
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
        data: () => {
            return {
                budget: 0
            }
        },
        async mounted() {
            document.title = "TravelApp - Search";
            this.convertBudget();
        },
        methods: {
            convertBudget() {
                let rbudget = this.$route.params.budget;
                if (rbudget.length != 0) {
                    let nbudget = Number(rbudget);
                    if (!isNaN(nbudget)) this.budget = nbudget;
                }
            }
        }
    }
</script>