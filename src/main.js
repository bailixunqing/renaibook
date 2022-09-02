import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/font.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import TEditor from '@/components/TEditor.vue'
import AdminBottom from '@/components/admin/AdminBottom.vue'



const app = createApp(App)
    .use(router)
    .use(ElementPlus, { locale })
    .use(VueAxios, axios)
    .component('TEditor', TEditor)
    .component('AdminBottom', AdminBottom)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')


router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.getItem('adminlogin');
    console.log(isLogin)
    if (to.name == "admin" && from.name != "login") {
        next('/login')
    }
    else
    {
        next()
    }

 });

