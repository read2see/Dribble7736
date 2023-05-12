import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue';
import Login from './pages/Auth/Login.vue';
import Register from './pages/Auth/Register.vue';
import CoursesIndex from './pages/Courses/Index.vue';
import EventsIndex from './pages/Events/Index.vue';

const router = createRouter({
    history: createWebHistory() ,
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/courses',
            component: CoursesIndex
        },
        {
            path: '/events',
            component: EventsIndex
        },
    ],
});
  
export default router;