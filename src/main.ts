/*
 * @Author: raoqidi
 * @Date: 2021-05-11 20:02:07
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-11 20:09:45
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/src/main.ts
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
