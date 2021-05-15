<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 17:12:54
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 20:15:07
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/TodoEditing.vue
-->
<template>
  <transition name="edit">
    <div class="todo--editing" v-if="!!editing">
      <AppBar title="New Tasks" left="close" @left="toggleEditing" />
      <div class="todo--editing__head">
        <p>What tasks are you planning to perform?</p>
      </div>
      <div class="todo--editing__body">
        <textarea rows="3" v-model="editing.text"></textarea>
        <p class="todo--editing__meta">
          <i :class="['fa', `fa-${selected.todo.icon}`]"></i>
          {{ selected.todo.name }}
        </p>
        <p class="todo--editing__meta">
          <i class="fa fa-calendar"></i>
          Today
        </p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import AppBar from "./AppBar.vue";
export default defineComponent({
  components: { AppBar },
  setup(props, ctx) {
    const store = ctx.root.$store;
    const selected = computed(() => store.state.selected);
    const editing = computed(() => store.state.editing);
    const toggleEditing = () => store.commit("toggleEditing");
    return {
      selected,
      editing,
      toggleEditing,
    };
  },
});
</script>

<style lang="scss">
.todo {
  &--editing {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    color: #666;
    textarea {
      width: 100%;
      margin: 6px 0;
      color: #666;
      font-size: 32px;
      line-height: 1.2em;
      border: none;
      outline: none;
      resize: none;
    }
    &__head {
      padding: 40px 40px 0;
      color: #999;
    }
    &__body {
      padding: 0 40px;
    }
    &__meta {
      display: flex;
      height: 44px;
      align-items: center;
      border-bottom: 1px solid #eee;
      color: #999;
      i {
        padding-right: 10px;
      }
    }
  }
}
.edit-leave-to,
.edit-enter {
  transform: translateY(100%);
}
.edit-enter-to,
.edit-leave {
  transform: translateY(0);
}
.edit-enter-active,
.edit-leave-active {
  transition: all 0.5s ease;
}
</style>
