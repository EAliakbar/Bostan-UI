<template>
    <div id="app">
        <side-bar></side-bar>
        <div id="content-body">
            <grid ref="grid"></grid>
        </div>
    </div>
</template>

<script>
    import SideBar from './components/SideBar.vue'
    import Grid from './components/Grid.vue'

    export default {
        name: 'app',
        components: {
            'side-bar': SideBar,
            'grid': Grid
        }
    }
</script>

<style>

</style>
