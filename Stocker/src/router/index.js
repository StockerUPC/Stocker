//Router
import { createRouter, createWebHistory } from 'vue-router';

// Importar componentes
import landingComponent from "../logistics/components/landing.component.vue";
import loginSection from "../logistics/components/login.component.vue";
import stockerComponent from "../logistics/components/stocker.component.vue";
import notfoundComponent from "../logistics/components/notfound.component.vue";
import dashboardComponent from "../public/components/dashboard.component.vue";
import inventoryComponent from "../public/components/inventory.component.vue";
import reportsComponent from "../public/components/reports.component.vue";
import suppliersComponent from "../public/components/suppliers.component.vue";
import ordersComponent from "../public/components/orders.component.vue";
import managementComponent from "../public/components/management.component.vue";
import settingsComponent from "../public/components/settings.component.vue";
// Crear rutas

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: landingComponent},
        { path: '/login', component: loginSection},
        { path: '/stocker', component: stockerComponent,
            children: [
                { path: 'dashboard', component: dashboardComponent},
                { path: 'inventory', component: inventoryComponent},
                { path: 'reports', component: reportsComponent},
                { path: 'suppliers', component: suppliersComponent},
                { path: 'orders', component: ordersComponent},
                { path: 'management', component: managementComponent},
                { path: 'settings', component: settingsComponent}
            ]
        },


        { path: '/:pathMatch(.*)*', component: notfoundComponent}
    ]
});

export default router;