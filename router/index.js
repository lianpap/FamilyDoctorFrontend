import { createRouter, createWebHistory } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/citizens/:id',
            name: 'citizenDetails',
            component: () => import('../views/CitizenDetailsView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/familydetails',
            name: 'familyDetails',
            component: () => import('../views/FamilyDetailsView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/doctors/:id',
            name: 'doctorDetails',
            component: () => import('../views/DoctorDetailsView.vue'),
            meta: { requiresAuth: true },

        },
        {
            path: '/registerFamilyDoctor',
            name: 'registerFamilyDoctor',
            component: () => import('../views/RegisterFamilyDoctor.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/citizenMenu',
            name: 'citizenMenu',
            component: () => import('../views/CitizenMenu.vue'),
            meta: { requiresAuth: true ,  role: 'ROLE_USER'}
        },
        {
            path: '/doctorMenu',
            name: 'doctorMenu',
            component: () => import('../views/DoctorMenu.vue'),
            meta: { requiresAuth: true, role: 'ROLE_DOCTOR' }
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/ProfileView.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/createFamilyMember',
            name: 'createFamilyMember',
            component: () => import('../views/CreateFamilyMember.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('../views/LogoutView.vue'),
            meta: { requiresAuth: true }
        }


    ]
});

router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useApplicationStore();
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !isAuthenticated) {
        console.log('user not authenticated. redirecting to /login');
        next('/login');
    }else {
        next();
    }

});

export default router;