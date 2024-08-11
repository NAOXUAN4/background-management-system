import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  //导入router

//ElementPlus 导入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' 

//创建实例，挂载插件
const app = createApp(App)
for (const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}
app.use(router).use(ElementPlus,{locale:zhCn,}).mount('#app')
