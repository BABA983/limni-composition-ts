<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 16:54:37
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 17:12:11
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/FloatingButton.vue
-->
<template>
  <transition name="grow">
    <button
      class="floating-button"
      v-if="!!selected"
      :class="[{ 'floating-button__editing': !!editing }]"
      :style="{ background: gradientColor }"
      @click="toggleEditing"
    ></button>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup(props, ctx) {
    const store = ctx.root.$store;
    const selected = computed(() => store.state.selected);
    const editing = computed(() => store.state.editing);
    const currentTodo = computed(() => store.getters.currentTodo);
    const gradientColor = computed(() => {
      const colorLeft = `color-stop(30%, ${currentTodo.value.colors[0]})`;
      const colorRight = `to(${currentTodo.value.colors[1]})`;
      return `-webkit-gradient(linear, left bottom, right top, ${colorLeft}, ${colorRight})`;
    });
    const toggleEditing = () => store.commit("toggleEditing");
    return {
      selected,
      editing,
      currentTodo,
      toggleEditing,
      gradientColor,
    };
  },
});
</script>

<style lang="scss">
.floating-button {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 44px;
  bottom: 64px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 44px;
  width: 44px;
  height: 44px;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: white;
  }
  &::after {
    transform: rotate(90deg);
  }
  &__editing {
    width: 100%;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
}
.grow-leave-to,
.grow-enter {
  transform: scale(0);
}
.grow-enter-to,
.grow-leave {
  transform: scale(1);
}
.grow-enter-active {
  transition: all 0.2s 0.3s ease;
}
.grow-leave-active {
  transition: all 0.3s ease;
}
</style>
