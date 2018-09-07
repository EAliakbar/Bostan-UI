<template>
    <div id="sidebar">

        <div class="schedule-header">تعداد واحدها: <span id="unitsum">0</span>
            <small style="font-weight:normal;"><br/><a style="color:#999;" href="/schedule/summary/">(مشاهده
                جدول واحد‌های انتخابی)</a></small>
        </div>

        <select class="combobox" v-model="selectedDepartment">
            <option value="-2">انتخاب دانشکده...</option>
            <option disabled="disabled"></option>
            <option value="-1">درسهای من</option>
            <option disabled="disabled"></option>

            <option
                v-for="(department, index) in departments"
                v-bind:key="index"
                v-bind:value="department.id"
            >{{department.name}}</option>

        </select>

        <div class="course-list">
            <div class="searchbox">
                <input type="text" class="searchinput filter" placeholder="جستجو..."/>
            </div>
            <div class="list">
                <ul id="course-group-list" :style="{height: listHeight + 'px'}">
                    <course-item v-for="(course, index) in courseList" v-bind="course"
                                 :key="`item-${index}`"></course-item>
                </ul>
            </div>
            <div class="bottom"></div>
        </div>

        <div id="loading"><img src="/images/loading.gif"/></div>

    </div>
</template>

<script>
    import CourseItem from './CourseItem.vue'
    import axios from 'axios'

    export default {
        name: "SideBar",
        components: {
            'course-item': CourseItem
        },
        data: function () {
            return {
                departments: [],
                selectedDepartment: '',
                courseList: []
            }
        },
        computed: {
            listHeight: function () {
                // todo: get height value from grid module
                return Math.min(window.innerHeight - 255, document.getElementById('grid').clientHeight - 125)
                // return 200;
            }
        },
        watch: {
            selectedDepartment: function (newDepartment) {
                if (newDepartment == -2) return;
                if (newDepartment == -1) {
                    return
                }
                else {
                    var vm = this;
                    axios.get('http://127.0.0.1:8000/courses/list/' + newDepartment + '/')
                        .then(function (response) {
                            console.log(response.data);
                            vm.courseList = response.data
                        })
                        .catch(function () {
                            window.alert("Cant Connect To Server")
                        })
                }

            }
        },
        created: function () {
            var vm = this;
            axios.get('http://127.0.0.1:8000/departments/')
                .then(function (response) {
                    vm.departments = response.data
                })
        }
    }
</script>

<style scoped>

</style>