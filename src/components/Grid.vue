<template>
    <div class="grid" id="grid">
        <div class="hour-column">
            7<br/>
            8<br/>
            9<br/>
            10<br/>
            11<br/>
            12<br/>
            13<br/>
            14<br/>
            15<br/>
            16<br/>
            17<br/>
            18<br/>
            19<br/>
            20<br/>

        </div>
        <div class="week-container">
            <week-day v-for="n in 6" :key="n" :day-number="n - 1">
                <event v-for="(item, index) in items"
                       :key="index"
                       v-if="item.time.day_of_week == n - 1"
                       v-bind=item
                       v-on:deletePreview="deletePreview"
                       v-on:clearDeletePreview="clearDeletePreview"
                       v-on:delete="deleteEvent"
                ></event>
            </week-day>


            <br style="clear:both;"/>
        </div>
    </div>
</template>

<script>
    import WeekDay from './WeekDay.vue'
    import Event from './Event.vue'

    export default {
        name: "Grid",
        components: {
            'week-day': WeekDay,
            'event': Event
        },
        data: function () {
            return {
                items: [],
            }
        },
        methods: {
            deletePreview: function (full_id) {
                let vm = this;
                this.items.forEach(function (item, index) {
                    if (item.full_id === full_id) {
                        vm.items[index].deleting = true
                    }
                })
            },
            clearDeletePreview: function (full_id) {
                let vm = this;
                this.items.forEach(function (item, index) {
                    if (item.full_id === full_id) {
                        vm.items[index].deleting = false
                    }
                })
            },
            deleteEvent: function (full_id) {
                this.items = this.items.filter(function (obj) {
                    return obj.full_id !== full_id;
                });
            }
        },
        mounted: function () {
            this.$root.$on('addCourse', course => {
                let vm = this;
                course.times.forEach(function (time) {
                    let item = {};
                    item['full_id'] = course['full_id'];
                    item['course_name'] = course['course_name'];
                    item['instructor'] = course['instructor'];
                    item['time'] = time;
                    item['preview'] = false;
                    item['deleting'] = false;
                    vm.items.push(item);
                })
            });
            this.$root.$on('previewCourse', course => {
                let vm = this;
                course.times.forEach(function (time) {
                    let item = {};
                    item['full_id'] = course['full_id'];
                    item['course_name'] = course['course_name'];
                    item['instructor'] = course['instructor'];
                    item['time'] = time;
                    item['preview'] = true;
                    item['deleting'] = false;
                    vm.items.push(item)
                })
            });
            this.$root.$on('clearPreview', () => {
                this.items = this.items.filter(function (obj) {
                    return obj.preview !== true;
                });
            });
        }
    }
</script>

<style scoped>

</style>