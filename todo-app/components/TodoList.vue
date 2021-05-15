<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 11:14:44
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 16:53:32
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/TodoList.vue
-->
<template>
  <div :class="['todo-list', { 'todo-list__selected': !!selected }]">
    <ul :style="{ width: `${todos.length * 100}%` }">
      <li
        v-for="todo in todos"
        :key="todo.name"
        :style="{ transform: `translate3d(-${currentIndex * 100}%,0,0)` }"
      >
        <Todo
          :todo="todo"
          :selected="selected && todo === selected.todo"
          @select="selectTodo"
        ></Todo>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "@vue/composition-api";
import Todo from "./Todo.vue";
import { mapMutations } from "vuex";

export default defineComponent({
  components: { Todo },
  setup(props, ctx) {
    const _this = ctx.root;
    const todos = computed(() => _this.$store.state.todos);
    const selected = computed(() => _this.$store.state.selected);
    const currentIndex = computed(() => _this.$store.state.currentIndex);
    const selectTodo = (selected: any) => {
      console.log(selected);
      _this.$store.commit("selectTodo", selected);
    };
    const prevTodo = () => _this.$store.commit("prevTodo");
    const nextTodo = () => _this.$store.commit("nextTodo");
    onMounted(() => {
      let touch: any = {};
      _this.$el.addEventListener("touchstart", ((e: TouchEvent) => {
        touch.startX = e.touches[0].clientX;
        touch.endX = 0;
      }) as EventListener);

      _this.$el.addEventListener("touchmove", ((e: TouchEvent) => {
        touch.endX = e.touches[0].clientX;
      }) as EventListener);

      _this.$el.addEventListener("touchend", () => {
        if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
          return;
        }
        if (touch.endX < touch.startX) {
          nextTodo();
          // _this.$store.commit("nextTodo");
        } else {
          prevTodo();
          // _this.$store.commit("prevTodo");
        }
      });
    });
    return {
      todos,
      selected,
      currentIndex,
      selectTodo,
      // ...mapMutations({ selectTodo }),
    };
  },
});
</script>

<style lang="scss">
.todo-list {
  padding: 0 32px;
  height: 400px;
  transition: all 0.5s ease;
  > ul,
  > ul > li {
    display: flex;
    height: 100%;
  }
  > ul > li {
    flex: 1;
    transition: transform 0.5s ease;
  }
  .todo {
    border-radius: 8px;
    background-color: white;
  }
  &__selected {
    transform: scaleX(1.25);
  }
}
</style>
