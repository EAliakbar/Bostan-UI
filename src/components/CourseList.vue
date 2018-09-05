<template>
    <div class="course-list">
        <div class="searchbox">
            <input type="text" class="searchinput filter" placeholder="جستجو..."/>
        </div>
        <div class="list">
            <ul id="course-group-list" v-bind:style="{height: listHeight }">

            </ul>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>
    export default {
        name: "CourseList",
        computed: {
            listHeight: function() {
                return Math.min($(window).height() - 255, $(".grid").height() - 125)
                // return 200 + 'px'
            }
        }
    }
</script>

<style>

</style>