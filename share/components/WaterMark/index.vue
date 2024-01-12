<template>
  <div class="watermark" ref="watermark" :style="{ maxHeight: typeof height === 'number' ? height + 'px' : height }" @click="handleDefault">
    <div class="watermark-field" v-for="(item, index) in fillAmount" :key="index">
      {{ text }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "水印文字",
  },
  height: {
    type: [String, Number],
    default: 200,
  },
  width: {
    type: [String, Number],
    default: 200,
  },
});

const watermark = ref<any>();

const fillAmount = computed(() => {
  const maxHeight =
    typeof props.height == "number" ? props.height : parseInt(props.height);
  const maxWidth =
    typeof props.width == "number" ? props.width : parseInt(props.width);
  if (maxHeight && maxWidth) {
    return Math.ceil(maxHeight / 72) * Math.ceil((maxWidth - 72) / 100);
  }
  return Math.ceil(maxHeight / 72);
});

const handleDefault = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
};
</script>
<style lang="scss" scoped>
.watermark {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  padding: 3.5em 2em;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 10;
  min-width: 1px;
  min-height: 1px;
  user-select: none;

  /* 禁止用户选择文字 */
  &-field {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    font-size: 3em;
    width: 100px;
    color: rgba(0, 0, 0, 0.1);
    /* 设置水印颜色和透明度 */
    pointer-events: none;
    /* 防止水印文字影响用户交互 */
    user-select: none;
    /* 禁止用户选择文字 */
    pointer-events: none;
    white-space: nowrap;
    /* 防止文字换行 */
    transform: rotate(-45deg);

    &:not(&:last-of-type) {
      margin-right: 3.5em;
      margin-bottom: 3.5em;
    }
  }
}

// .watermark::before {
//     content: '水印文字';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     font-size: 3em;
//     color: rgba(0, 0, 0, 0.1); /* 设置水印颜色和透明度 */
//     pointer-events: none; /* 防止水印文字影响用户交互 */
//     user-select: none; /* 禁止用户选择文字 */
//   }
</style>
