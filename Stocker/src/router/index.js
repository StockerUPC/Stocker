//Router
import { createRouter, createWebHistory } from 'vue-router';

// Importar componentes
import landingComponent from "../logistics/components/landing.component.vue";
import loginSection from "../logistics/components/login.component.vue";
import dashboard2Component from "../logistics/components/dashboard.component.vue";
// Crear rutas

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: landingComponent},
        { path: '/login', component: loginSection},
        { path: '/dashboard', component: dashboard2Component}
    ]
});

export default router;