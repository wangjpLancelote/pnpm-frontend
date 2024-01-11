<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <template v-for="(row, index) in formRowItems" :key="index">
      <Transition name="fade">
        <el-row :justify="index === 0 ? 'space-between' : 'start'" v-show=" index !== 0 ? showMore : true">
          <el-col v-for="(item) in row" :key="item.prop" :span="calcColSpan(item, row.length, index === 0)" :offset="item.offset">
            <el-form-item v-bind="(item as any).formItemAttrs" :prop="item.prop" :label="item.label" :rules="formItemRule(item)">
              <form-render
                v-model="formModel[item.prop]"
                :tag="item.tag"
                :prop="item.prop"
                :label="item.label"
                :props="item.props"
                :events="item.events"
                :dict="item.dict"
                :style="item.style"
                :render-slot="typeof item.renderSlot === 'function' ? () => item.renderSlot() : null"
                v-bind="$attrs"
              ></form-render>
            </el-form-item>
          </el-col>
          <template v-if="index === 0">
            <el-col :span="6">
              <el-form-item v-if="showButtons" label-width="0px" class="handle">
                <div class="buttons">
                  <el-button type="primary" @click="submitForm()">查询</el-button>
                  <el-button @click="resetForm()">刷新</el-button>
                  <el-button @click="more()"
                    >更多
                    <el-icon class="el-icon--right">
                      <ArrowUp v-show="showMore" />
                      <ArrowDown v-show="!showMore" />
                    </el-icon>
                  </el-button>
                </div>
              </el-form-item>
              <!-- buttons的插槽 -->
              <el-form-item v-else>
                <template #buttons> </template>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </Transition>
    </template>
  </div>
</template>
<script lang="ts" setup>
import FormRender from './form-render';
import { calcColSpan } from './utils';

const showMore = ref(false)

defineProps({
  formRowItems: {
    type: [Array, Object],
    default: () => []
  },
  formModel: {
    type: Object,
    default: () => {}
  },
  disabled: {
    type: Boolean,
    default: false
  },
  // 显示查询和刷新按钮
  showButtons: {
    type: Boolean,
    default: true,
  },
  // 按钮插槽
  buttons: {
    type: Object
  }
});

const emit = defineEmits(['search', 'reset']);

/**
 * 事件触发不做任何处理，直接return,由开发者决定
 */
const submitForm = () => {
  emit('search');
}

const resetForm = () => {
  emit('reset');
}

const more = () => {
  showMore.value = !showMore.value
}

const formItemRule = (item: any) => {
  const trigger = ["el-input", "el-input-number"].includes(item.type) ? "blur" : "change";
  let rules = [];
  if (item.required) {
    const obj = { required: true, message: `${(item.label || "").replace(/:|：/g, "")}不能为空`, trigger: trigger };
    rules.push(obj);
  }
  if (item.validator && item.validator instanceof Function) {
    const obj = { validator: item.validator, trigger, validParams: item.validParams };
    rules.push(obj);
  }
  if (item.rules) {
    if (Array.isArray(item.rules)) {
      rules = [...rules, ...item.rules];
    } else if (Object.prototype.toString.call(item.rules) === "[object Object]") {
      rules.push(item.rules);
    }
  }
  return rules;
}
</script>
<style lang="scss">
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.handle  {
  .el-form-item__content {
    display: flex;
    justify-content: flex-end;
  }
}
@keyframes moveIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: moveIn 0.5s 1 ease-in forwards;
}
.fade-enter, .fade-leave-to {
  transition: moveIn 0.5s 1 ease-in forwards reverse;
}
</style>
