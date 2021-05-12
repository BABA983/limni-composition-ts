<!--
 * @Author: raoqidi
 * @Date: 2021-05-12 09:46:15
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-12 09:49:15
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/views/Home1.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
