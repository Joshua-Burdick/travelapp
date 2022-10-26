<template>
    <div>
        <p id="err-num">404</p>
        <p>Whoops! Looks like an error has occurred.</p>
    </div>
</template>

<script>
    export default {
        async mounted() {
            document.title = "404";
            localStorage.setItem('timesRefreshed', String(Number(localStorage.getItem('timesRefreshed')) + 1));
            window.addEventListener('unload', this.goHome());
        },
        async beforeDestroy() {
            window.removeEventListener('unload', this.goHome());
        },
        methods: {
            goHome() {
                let refreshed = Number(localStorage.getItem('timesRefreshed'));
                if (refreshed >= 2) {
                    this.$router.push('/');
                    localStorage.setItem('timesRefreshed', '0');
                }
            }
        }
    }
</script>

<style scoped>
    #err-num {
        font-size: 48pt;
        color: red;
        margin-top: 30%;
    }
</style>