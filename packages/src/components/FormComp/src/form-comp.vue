<template>
  <el-form ref="form" :model="formModel" :label-position="labelPosition" :label-width="labelWidth" v-bind="$attrs" :disabled="disabled">
    <form-comp-row
      :form-model="formModel"
      :form-row-items="formRowItems"
      :disabled="disabled"
      :show-buttons="showButtons"
      :buttons="buttons"
      @search="handleSearch(form)"
      @reset="handleReset(form)"
    />
  </el-form>
</template>
<script lang="ts" setup>
import FormCompRow from './form-comp-row.vue';
import { useCalcFormRows } from './utils';
import type { FormInstance } from 'element-plus'

const form = ref<any>();

const innerWidth = ref<number>(window.innerWidth);
window.addEventListener('resize', () => {
  innerWidth.value = window.innerWidth;
})
onUnmounted(() => {
  window.removeEventListener('resize', () => {});
})
const formRowItems = computed(() => {
  return useCalcFormRows({ items: props.formItems, formCols: 3 }, 'items');
})
const emit = defineEmits(['search', 'reset'])

const props = defineProps({
  formItems: {
    type: Array,
    default: () => []
  },
  formModel: {
    type: Object,
    default: () => { }
  },
  disabled: {
    type: Boolean,
    default: false
  },
  autoSearch: {
    type: Boolean,
    default: false
  },
  // 显示查询和刷新按钮
  showButtons: {
    type: Boolean,
    default: true,
  },
  // 查询按钮插槽
  buttons: {
    type: Object
  },
  // label position
  labelPosition: {
    type: String,
    default: "right" as const
  },
  // form-label的宽度
  labelWidth: {
    type: String,
    default: "80px"
  },
  formCols: {
    type: Number,
    default: 3,
  },
  // 是否开启自适应layout
  autoFix: {
    type: Boolean,
    default: false
  }
})

const handleSearch = (FormEl: FormInstance) => {
  emit('search', FormEl);
}

const handleReset = (FormEl: FormInstance) => {
  if (!FormEl) return;
  FormEl.resetFields();
  emit('reset', FormEl)
}

/**
 * 是否自动查询
 */
watch(props.formModel, () => {
  if (props.autoSearch) {
    emit('search')
  }
}, {
  deep: true,
  immediate: true,
})

defineExpose({
  form
})
</script>
<style lang="scss"></style>
