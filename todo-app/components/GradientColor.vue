<!--
 * @Author: raoqidi
 * @Date: 2021-05-15 10:31:11
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-05-15 15:44:58
 * @Description: please add a description to the file
 * @FilePath: /limni-composition-ts/todo-app/components/GradientColor.vue
-->
<template>
  <div
    :class="['gradient__color', { 'gradient--active': active }]"
    :style="{ backgroundImage: gradientColor }"
  ></div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "@vue/composition-api";

export default defineComponent({
  props: {
    colors: {
      type: Array,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    // or use props.colors directly
    const { colors } = toRefs(props);
    const gradientColor = computed(() => {
      const colorBottom = `color-stop(30%, ${colors.value[0]})`;
      const colorTop = `to(${colors.value[1]})`;
      return `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop}`;
    });
    return { gradientColor };
  },
});
</script>

<style lang="scss">
.gradient {
  &__color {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5 ease;
  }
  &--active {
    opacity: 1;
  }
}
</style>
