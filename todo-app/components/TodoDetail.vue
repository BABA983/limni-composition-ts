<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 13:45:52
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 16:47:43
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/TodoDetail.vue
-->
<template>
  <transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="todo-detail" v-if="selected">
      <AppBar @left="unselectTodo" />
      <Todo :todo="selected.todo" :active="true" @close="unselectTodo" />
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import AppBar from "./AppBar.vue";
import Todo from "./Todo.vue";

export default defineComponent({
  components: {
    AppBar,
    Todo,
  },
  setup(props, ctx) {
    const store = ctx.root.$store;
    const selected = computed(() => store.state.selected);
    const unselect = computed(() => store.state.unselect);
    const unselectTodo = () => store.commit("unselectTodo");
    const handleEnter = (el: HTMLElement) => {
      console.log("selected", selected);
      Object.assign(el.style, {
        top: `${selected.value.rect.top}px`,
        left: `${selected.value.rect.left}px`,
        width: `${selected.value.rect.width}px`,
        height: `${selected.value.rect.height}px`,
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${selected.value.rect.appWidth}px`,
          height: `${selected.value.rect.appHeight}px`,
        });
      }, 0);
    };
    const handleLeave = (el: HTMLElement) => {
      console.log("unselect", unselect);
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${unselect.value.rect.appWidth}px`,
        height: `${unselect.value.rect.appHeight}px`,
      });
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${unselect.value.rect.top}px`,
          left: `${unselect.value.rect.left}px`,
          width: `${unselect.value.rect.width}px`,
          height: `${unselect.value.rect.height}px`,
        });
        console.log(el.style);
      }, 0);
    };
    return {
      selected,
      unselectTodo,
      handleEnter,
      handleLeave,
    };
  },
});
</script>

<style lang="scss">
.todo-detail {
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  background-color: white;
  color: #666;
  will-change: top, left, width, height;
  .todo {
    margin: 0;
    margin-top: -44px;
    padding: 0 20px;
    box-shadow: none;
    &__head,
    &__body {
      transform: translate3d(0, 88px, 0);
    }
    &__menu {
      opacity: 0;
    }
    &__tasks {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  .app-bar {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.show-enter-to,
.show-leave {
  border-radius: 0;
  .todo {
    padding: 0 20px;
    &__head,
    &__body {
      transform: translate3d(0, 88px, 0);
    }
    &__menu {
      opacity: 0;
    }
    &__tasks {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
  .app-bar {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.show-leave-to,
.show-enter {
  border-radius: 8px;
  .todo {
    padding: 0;
    &__head {
      transform: translate3d(0, 0, 0);
    }
    &__body {
      transform: translate3d(0, 189px, 0);
    }
    &__menu {
      opacity: 1;
    }
    &__tasks {
      opacity: 0;
      transform: scale3d(1, 0, 1);
    }
  }
  .app-bar {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.show-enter-active,
.show-leave-active {
  transition: all 0.5s ease;

  .todo,
  .todo__head,
  .todo__body,
  .todo__menu,
  .todo__tasks,
  .app-bar {
    transition: all 0.5s ease;
  }
}
</style>
