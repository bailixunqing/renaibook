import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/font.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


//组件
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//富文本
import TEditor from '@/components/TEditor.vue'
//全局底部
import AdminBottom from '@/components/admin/AdminBottom.vue'


const app = createApp(App)
    .use(router)
    .use(ElementPlus, { locale })
    .use(VueAxios, axios)
    .component('TEditor',TEditor)
    .component('AdminBottom',AdminBottom)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
}

app.mount('#app')


// router.beforeEach((to, from, next) => {
//     const isLogin = sessionStorage.getItem('adminlogin');
//     console.log(isLogin)
//     if (to.name == "admin" && from.name != "login_1") {
//         next('/login_1')
//     }
//     else if (isLogin == "true") {
//         next()
//     }
//     else
//     {
//         next()
//     }
//
//  });
//
