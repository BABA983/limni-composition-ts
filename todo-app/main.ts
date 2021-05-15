/*
 * @Author: raoqidi
 * @Date: 2021-05-11 20:05:46
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-12 23:25:20
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
