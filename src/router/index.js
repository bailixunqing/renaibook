import { createRouter, createWebHistory } from "vue-router";

import home from '@/components/home'
import test from '@/components/test'
import login from '@/components/login'
import Curator_note from '@/components/Curator_note'
import admin from '@/components/admin/admin'
import Library_Guide from "@/components/Library_Guide";
import Sources from "@/components/Sources";

import Service from "@/components/Service";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/Curator_note',
            name: 'Curator_note',
            component: Curator_note
        },
        {
            path: '/admin',
            name: 'admin',
            component: admin
        },
        {
            path: '/Library_Guide',
            name: 'Library_Guide',
            component: Library_Guide 
        },
        {
            path: '/Sources',
            name: 'Sources',
            component: Sources
        },
        {
            path: '/Service',
            name: 'Service',
            component: Service
        }
    ],
})
