<!--
 * @Author: raoqidi
 * @Date: 2021-05-11 20:06:18
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 20:02:36
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/views/Home.vue
-->
<template>
  <div class="home">
    <AppBar title="TODO" left="bars" right="search" />
    <Avatar />
    <Gradient />
    <TodoList />
    <TodoDetail />
    <TodoEditing />
    <FloatingButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import AppBar from "../components/AppBar.vue";
import Avatar from "../components/Avatar.vue";
import Gradient from "../components/Gradient.vue";
import TodoList from "../components/TodoList.vue";
import TodoDetail from "../components/TodoDetail.vue";
import TodoEditing from "../components/TodoEditing.vue";
import FloatingButton from "../components/FloatingButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton,
  },
  // props: Data, context: SetupContext
  setup() {
    onMounted(() => {
      // console.log(props);
      // console.log(context);
    });
  },
});
</script>
<style>
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
}
</style>
