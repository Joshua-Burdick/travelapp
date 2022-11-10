<template>
    <div>
        <MapComponent/>
    </div>
</template>

<script>

import MapComponent from "../components/MapComponent"

export default {
    data: () => {
        return {
            budget: 0,
        }
    },
    components: {
        MapComponent
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

<style scoped>
    #map {
        position: relative;
        z-index: 0;
    }

    #some-text {
        position: absolute;
        margin-top: 5%;
        margin-left: 0.5%;
        z-index: 2;
    }
</style>