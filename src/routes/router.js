import { createRouter, createWebHistory } from "vue-router";
import AppLayout from '@/layouts/AppLayout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('@/views/Home.vue'),
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/views/about.vue'),
                }
            ]
        }
    ],
});

export default router