<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 10:29:41
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 11:08:57
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/Gradient.vue
-->
<template>
  <div class="gradient">
    <GradientColor
      v-for="(todo, index) in todos"
      :key="todo.name"
      :colors="todo.colors"
      :active="index <= currentIndex"
    />
  </div>
</template>

<script lang="ts">
import GradientColor from "./GradientColor.vue";
import { computed, defineComponent } from "@vue/composition-api";
export default defineComponent({
  components: {
    GradientColor,
  },
  setup(props, ctx) {
    const store = ctx.root.$store;
    const todos = computed(() => store.state.todos);
    const currentIndex = computed(() => store.state.currentIndex);
    return {
      todos,
      currentIndex,
    };
  },
});
</script>

<style lang="scss">
.gradient {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
