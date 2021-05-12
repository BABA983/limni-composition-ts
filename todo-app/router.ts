/*
 * @Author: raoqidi
 * @Date: 2021-05-11 20:06:17
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-12 09:49:53
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/router.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/home1",
    name: "Home1",
    component: () => import("./views/Home1.vue"),
  },
  {
    path: "/",
    name: "About",
    component: () => import("./views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
