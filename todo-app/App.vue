<!--
 * @Author: raoqidi
 * @Date: 2021-05-11 20:06:26
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-12 23:21:46
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/App.vue
-->
<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style>
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");

* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: inherit;
}
ul,
ol {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  font: inherit;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>
