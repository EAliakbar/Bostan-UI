<template>
    <div class="column">
        <div class="header">
            <img v-bind:src="`/images/weekdays/day-${dayNumber}.png`"/>
        </div>
        <div v-bind:id="`weekday-${dayNumber}`" class="events">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeekDay",
        props: ['dayNumber']
    }
</script>

<style scoped>

</style>