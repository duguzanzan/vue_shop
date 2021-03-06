import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
// 全局样式
import "./assets/css/global.css";
// 字体图标
import "./assets/fonts/iconfont.css";

import axios from "axios";
// 配置请求的跟路径
axios.defaults.baseURL = "http://119.23.53.78:8888/api/private/v1/";
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");