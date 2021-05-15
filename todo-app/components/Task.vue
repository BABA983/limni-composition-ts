<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 11:16:22
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 16:37:28
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/Task.vue
-->
<template>
  <transition name="fade">
    <div class="task" v-if="!task.deleted">
      <input :id="id" type="checkbox" v-model="task.done" />
      <label :for="id">{{ task.title }}</label>
      <transition name="fade">
        <span
          class="task__delete"
          v-show="task.done"
          @click="deleteTask({ task })"
        >
          <i class="fa fa-trash"></i>
        </span>
      </transition>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { mapMutations } from "vuex";
let GID = 1;
export default defineComponent({
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    const _this = ctx.root;
    let id = `task-${GID++}`;
    const deleteTask = (task) => {
      console.log(task);
      _this.$store.commit("deleteTask", task);
    };
    return {
      id,
      deleteTask,
      // ...mapMutations({ deleteTask }),
    };
  },
});
</script>

<style lang="scss">
.task {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  input {
    display: none;
    &:checked + label::after {
      display: inline-block;
    }
  }
  label {
    flex: 1;
    line-height: 20px;
    &::before,
    &::after {
      content: "";
      display: inline-block;
      margin-right: 20px;
      margin-top: 1px;
      width: 14px;
      height: 14px;
      vertical-align: top;
    }
    &::before {
      border: 1px solid #ccc;
      border-radius: 2px;
      background-color: white;
    }
    &::after {
      content: "\f00c";
      position: relative;
      display: none;
      z-index: 10;
      margin-right: -16px;
      width: 10px;
      height: 10px;
      padding: 3px;
      border-radius: 2px;
      font: normal normal normal 10px/1 FontAwesome;
      color: white;
      background-color: #ccc;
      float: left;
    }
  }
  &__delete {
    padding: 0 10px;
    color: #ccc;
    font-size: 16px;
  }
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
