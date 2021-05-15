<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 11:15:27
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 16:28:29
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/Todo.vue
-->
<template>
  <div ref="root" :class="['todo', { todo__selected: !!selected }]">
    <div class="todo__head" @click="handleClick">
      <div class="todo__icon" :style="{ color }">
        <i :class="['fa', `fa-${todo.icon}`]"></i>
      </div>
      <div class="todo__menu"><i class="fa fa-ellipsis-v"></i></div>
    </div>
    <div class="todo__body">
      <p class="todo__tips">{{ todo.tasks.length }} Tasks</p>
      <h3 class="todo__title">{{ todo.name }}</h3>
      <div class="todo__progress">
        <span class="todo__progress__line">
          <i :style="{ width: progress, backgroundImage: progressColor }"></i>
        </span>
        <span class="todo__progress__num">{{ progress }}</span>
      </div>
      <div class="todo__tasks">
        <h4 class="todo__subtitle" v-if="todayTasks.length">Today</h4>
        <ul>
          <li v-for="task in todayTasks" :key="task.id">
            <Task :task="task" />
          </li>
        </ul>
        <h4 class="todo__subtitle" v-if="tomorrowTasks.length">Tomorrow</h4>
        <ul>
          <li v-for="task in tomorrowTasks" :key="task.id">
            <Task :task="task" />
          </li>
        </ul>
        <h4 class="todo__subtitle" v-if="outdatedTasks.length">Outdated</h4>
        <ul>
          <li v-for="task in outdatedTasks" :key="task.id">
            <Task :task="task" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from "@vue/composition-api";
import Task from "./Task.vue";
import { today, tomorrow } from "../shared";

export default defineComponent({
  components: { Task },
  props: {
    todo: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
    },
  },
  setup(props, ctx) {
    const _this = ctx.root;
    const color = computed(() => props.todo.colors[0]);
    const progress = computed(() => {
      const totalCount = props.todo.tasks.filter((t) => !t.deleted).length;
      const doneCount = props.todo.tasks.filter(
        (t) => !t.deleted && t.done
      ).length;
      return `${Math.round((doneCount / totalCount) * 100)}%`;
    });
    const progressColor = computed(() => {
      const colorLeft = `color-stop(30%, ${props.todo.colors[0]})`;
      const colorRight = `to(${props.todo.colors[1]})`;
      return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`;
    });
    const todayTasks = computed(() =>
      props.todo.tasks.filter(
        (task) => task.date >= today && task.date < tomorrow
      )
    );
    const tomorrowTasks = computed(() =>
      props.todo.tasks.filter((task) => task.date >= tomorrow)
    );
    const outdatedTasks = computed(() =>
      props.todo.tasks.filter((task) => task.date < today)
    );

    const root = ref(null);

    const handleClick = () => {
      const appRect = document.querySelector("#app").getBoundingClientRect();
      console.log(appRect);
      const elRect = root.value.getBoundingClientRect();
      console.log(elRect);
      const todo = props.todo;
      const rect = {};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;
      console.log(rect);
      ctx.emit("select", { rect, todo });
      // 下面这个方法虽然vetur有提示可以用 但是实际上根本emit不了
      // _this.$emit("select", { rect, todo });
    };
    return {
      root,
      color,
      progress,
      progressColor,
      todayTasks,
      tomorrowTasks,
      outdatedTasks,
      handleClick,
    };
  },
});
</script>

<style lang="scss">
.todo {
  flex: 1;
  margin: 0 8px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #666;
  &__selected {
    visibility: hidden;
  }
  &__head {
    display: flex;
    height: 44px;
    padding: 20px;
    justify-content: space-between;
    align-items: flex-start;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }
  &__icon {
    display: flex;
    width: 44px;
    height: 44px;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 50%;
    border: 1px solid #eee;
  }
  &__menu {
    color: #eee;
  }
  &__body {
    padding: 0 20px;
    transform: translate3d(0, 189px, 0);
    will-change: transform;
  }
  &__tips {
    opacity: 0.6;
    font-size: 14px;
    font-weight: 600;
  }
  &__title {
    margin-top: 6px;
    font-size: 32px;
  }
  &__progress {
    display: flex;
    align-items: center;
    margin-top: 30px;
    &__line {
      flex: 1;
      margin-right: 10px;
      height: 3px;
      background-color: #eee;
      i {
        display: block;
        height: 100%;
        transition: all 0.3s ease;
      }
    }
    &__num {
      font-size: 12px;
    }
  }
  &__tasks {
    opacity: 0;
    transform: scale3d(1, 0, 1);
  }
  &__subtitle {
    margin-top: 32px;
    margin-bottom: 8px;
    color: #999;
  }
}
</style>
