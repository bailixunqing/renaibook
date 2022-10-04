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
//import  {detectZoom}  from '@/utils/detectZoom.js';

//const m = detectZoom();

//document.body.style.zoom = 100 / Number(m);
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

//ads
//测试
router.beforeEach((to, from, next) => {



    const token = sessionStorage.getItem("token");

    if (to.name == "admin") {
        if (token != null) {
            next()
        }
        else if (from.name != "login") {
            next('/login')
        }

    }
    if (to.name == "Curator_note") {
        if(from.name != "home")
        {
            next('/')
        }
        else next()
        // if (from.name == "home") {
        //     next({
        //         path: '/Curator_note',
        //         query: {
        //             id: 1 // 把要跳转的页面路径作为参数传到登录页面
        //         }
        //     })
        // }
        // else {
        //     next('/home')
        // }
    }
    next()


});





