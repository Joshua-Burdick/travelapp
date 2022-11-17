<template>
    <div>
        <p class="center" id="err-num">404</p>
        <p class="center">Whoops! Looks like an error has occurred.</p>
    </div>
</template>

<script>

import Storage from '../classes/Storage.js';

export default {
    mounted() {
        document.title = "404";
        Storage.set('timesRefreshed', String(Number(Storage.get('timesRefreshed')) + 1));
        window.addEventListener('unload', this.goHome());
    },
    beforeDestroy() {
        window.removeEventListener('unload', this.goHome());
    },
    methods: {
        goHome() {
            let refreshed = Number(Storage.get('timesRefreshed'));
            if (refreshed >= 2) {
                this.$router.push({
                    name: 'home'
                });
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
    }
</style>