import { createRouter, createWebHistory } from "vue-router";

import home from '@/components/home'
import test from '@/components/test'
import login from '@/components/login'
import Curator_note from '@/components/Curator_note'
import login_1 from '@/components/login_1'
import admin from '@/components/admin/admin'
import behindWang from "@/components/BehindWang";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'home',
            component: home
        },
        {
            path: '/test',
            name:'test',
            component: test
        },
        {
            path: '/login',
            name:'login',
            component: login
        }
        ,
        {
            path: '/Curator_note',
            name:'Curator_note',
            component: Curator_note
        },
        {
            path: '/login_1',
            name:'login_1',
            component: login_1
        },
        {
            path: '/admin',
            name:'admin',
            component: admin
        },
        {
            path: '/behind',
            name: '/behind',
            component: behindWang
        }
    ],
})
