import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login.vue"
import Register from "./components/register.vue"
import Home from './components/home.vue'

import Chat from './components/chat/group_chat.vue'
import Student from './components/student/index.vue'
import StudentCreate from './components/student/create.vue'
import StudentEdit from './components/student/edit.vue'

import File from './components/file/index.vue'
import FileCreate from './components/file/create.vue'
import FileEdit from './components/file/edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        { path: '/chat', name: 'chat', component: Chat },
        { path: '/student', name: 'student', component: Student },
        { path: '/student_create', name: 'student_create', component: StudentCreate },
        { path: '/student_edit/:id', name: 'student_edit', component: StudentEdit },

        { path: '/file', name: 'file', component: File },
        { path: '/file_create', name: 'file_create', component: FileCreate },
        { path: '/file_edit/:id', name: 'file_edit', component: FileEdit }
    ]
})