import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
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
const app = createApp(App)
app.use(router)
app.mount('#app')
