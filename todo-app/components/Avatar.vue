<!--
 * @Author: raoqidi
 * @Date: 2021-05-12 23:47:04
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 15:45:06
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/Avatar.vue
-->
<template>
  <div class="avatar" :class="{ avatar__selected: !!selected }">
    <div class="avatar__face">
      <img src="../assets/face.jpeg" alt="avatar" />
    </div>
    <h2 class="avatar__name">Hello, Jane</h2>
    <p class="avatar__tips">
      Looks like feed good.<br />You have {{ todayTasks.length }} tasks to do
      today.
    </p>
    <p class="avatar__date">TODAY : {{ today | formatDate }}</p>
  </div>
</template>

<script lang="ts">
import {
  computed,
  Data,
  defineComponent,
  onMounted,
  ref,
  SetupContext,
} from "@vue/composition-api";
// import { mapState, mapGetters } from "vuex";
export default defineComponent({
  filters: {
    formatDate(val: Date) {
      return val
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ",$1");
    },
  },
  setup(props: Data, ctx: SetupContext) {
    const store = ctx.root.$store;
    const today = ref(new Date());
    const todayTasks = computed(() => store.getters.todayTasks);
    const selected = computed(() => store.state.selected);
    // console.log(today.value);
    // console.log(todayTasks.value);
    // console.log(selected.value);
    onMounted(() => {
      // console.log(store);
    });
    return {
      today,
      todayTasks,
      selected,
    };
  },
});
</script>

<style lang="scss">
.avatar {
  display: flex;
  height: 300px;
  padding: 0 40px;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.5s ease;
  &__selected {
    transform: translate3d(0, 20px, 0);
    opacity: 0;
  }
  &__face {
    width: 44px;
    height: 44px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__name {
    margin-top: 32px;
    padding: 0 6px;
    font-size: 32px;
    letter-spacing: 1px;
    font-weight: 300;
  }
  &__tips {
    margin-top: 16px;
    padding: 0 6px;
    font-size: 14px;
    font-weight: 100;
    opacity: 0.8;
    line-height: 1.6em;
  }
  &__date {
    margin-top: 44px;
    margin-bottom: 16px;
    padding: 0 6px;
    font-size: 14px;
  }
}
</style>
