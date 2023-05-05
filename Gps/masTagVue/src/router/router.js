import { createRouter, createWebHashHistory } from "vue-router";
import  isAuthenticatedGuard from './autenticacion'
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./../pages/Login.vue'),
    },
    {
        path: '/reporte',
        name: 'reporte',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import('./../pages/ReporteTag.vue'),
    },
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router