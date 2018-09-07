<template>
    <div id="app">
        <side-bar></side-bar>
    </div>
</template>

<script>
    import SideBar from './components/SideBar.vue'

    export default {
        name: 'app',
        components: {
            'side-bar': SideBar
        }
    }
</script>

<style>

</style>
