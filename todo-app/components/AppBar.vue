<!--
 * @Author: raoqidi
 * @Date: 2021-05-12 09:46:08
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 14:51:21
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/AppBar.vue
-->
<template>
  <div class="app-bar">
    <span class="app-bar-l" @click="$emit('left')">
      <i :class="['fa', `fa-${left}`]"></i>
    </span>
    <h1>{{ title }}</h1>
    <span class="app-bar-r" @click="$emit('right')">
      <i :class="['fa', `fa-${right}`]"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    left: {
      type: String,
      default: "chevron-left",
    },
    right: {
      type: String,
      default: "ellipsis-v",
    },
  },
});
</script>

<style lang="scss">
.app-bar {
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 14px;
  z-index: 1;
  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  span {
    padding: 0 20px;
  }
}
</style>
