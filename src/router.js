import Vue from 'vue'
import Router from 'vue-router'
import Login from "./components/login.vue"
import Register from "./components/register.vue"
import Home from './components/home.vue'

import Chat from './components/chat/group_chat.vue'
import Student from './components/student/index.vue'

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
        { path: '/student', name: 'student', component: Student }
    ]
})