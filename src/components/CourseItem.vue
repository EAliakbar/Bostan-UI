<template>
    <li >
        <a href="#" v-tooltip="{ html: tooltip_name }">{{course_name}}</a>
        <div v-bind:id="tooltip_name">
            <b>{{course_name}}</b>
            ({{full_id}})<br>
            استاد: {{instructor}}<br>
            ظرفیت: 17<br>
        </div>
    </li>
</template>

<script>
    export default {
        name: "CourseItem",
        props: ['full_id', 'course_name', 'instructor', 'times'],
        computed: {
            tooltip_name: function () {
                return `tooltipContent-${this.$vnode.key}`
            }
        }
    }
</script>

<style>
    .vue-tooltip {
        background-color: #f5f5b5;
        border: 1px solid #DECA7E;

        box-sizing: border-box;
        color: #303030;
        font-size: 12px;
        line-height: 18px;

        width: 200px;
        padding: 6px 10px;
        border-radius: 6px;
        z-index: 100;
        /*box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4)*/

    }

    .vue-tooltip .vue-tooltip-content {
        text-align: center
    }

    .vue-tooltip .tooltip-arrow {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 8px
    }


    .vue-tooltip[x-placement^="right"] {
        margin-left: 5px
    }

    .vue-tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 8px 8px 8px 0;
        border-right-color: #DECA7E;
        border-top-color: transparent !important;
        border-left-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -8px;
        margin-left: 0;
        margin-right: 0
    }

</style>