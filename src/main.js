import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
new Vue({ el: "#app", render: h => h(App) });
