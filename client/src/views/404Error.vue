<template>
    <div>
        <p id="err-num">404</p>
        <p>Whoops! Looks like an error has occurred.</p>
    </div>
</template>

<script>

import Storage from '../classes/Storage.js';

export default {
    async mounted() {
        document.title = "404";
        Storage.set('timesRefreshed', String(Number(Storage.get('timesRefreshed')) + 1));
        window.addEventListener('unload', this.goHome());
    },
    async beforeDestroy() {
        window.removeEventListener('unload', this.goHome());
    },
    methods: {
        goHome() {
            let refreshed = Number(Storage.get('timesRefreshed'));
            if (refreshed >= 2) {
                this.$router.push('/');
                Storage.set('timesRefreshed', '0');
            }
        }
    }
}
</script>

<style scoped>
    #err-num {
        font-size: 48pt;
        color: red;
        margin-top: 20%;
    }
</style>