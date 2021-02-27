<template>
    <div>
        main
        <router-link :to="'/step1'">to steps</router-link>
    </div>
</template>

<script>

    export default {
        name: 'Main',
        data: () => ({
        }),
        mounted() {
        },

        methods: {
        },

    }
</script>
<style lang="scss">
    #app {
        margin-top: 100px;
    }
</style>
