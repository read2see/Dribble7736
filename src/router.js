import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue';
import Login from './pages/Auth/Login.vue';
import Register from './pages/Auth/Register.vue';

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
        }
    ],
});
  
export default router;