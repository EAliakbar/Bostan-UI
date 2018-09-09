<template>
    <div class="event"
         :class="{'event-preview': preview, 'event-final': !preview, 'event-delete': deleting}"
         v-bind:style="`top:${top}px;height:${height}px;width:95;`"
         @mouseenter="btnShow = true"
         @mouseleave="btnShow = false"
    >
        <a class="del-button"
           v-show="btnShow"
           @mouseenter="$emit('deletePreview', full_id)"
           @mouseleave="$emit('clearDeletePreview', full_id)"
           @click="$emit('delete', full_id)"
        ></a>
        <p class="course-id">{{full_id}}</p>
        <p class="course-title">{{course_name}}</p>
        <p class="instructor">{{instructor}}</p>
    </div>
</template>

<script>
    function calculatePixel(time) {
        return (Math.floor(time) - 7) * 52 + (time - Math.floor(time) > 0.01 ? 25 : 0)
    }
    export default {
        name: "Event",
        props:['full_id', 'course_name', 'instructor', 'time', 'preview', 'deleting'],
        data: function (){
            return{
                btnShow: false
            }
        },
        computed: {
            top: function () {
                return calculatePixel(this.time.start)
            },
            height: function () {
                return calculatePixel(this.time.end) - this.top
            }
        }
    }
</script>

<style scoped>

</style>