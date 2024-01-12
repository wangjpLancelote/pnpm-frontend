<template>
  <div class="table-box">
    <!-- <ItTable :list="datalist" :amount="0" :columns="getCols"></ItTable> -->
  </div>
</template>
<script>
export default {
  name: "Attributes",
};
</script>

<script setup>
import { ref, computed } from "vue";
// import { ItTable } from "@5dyl/itbox";

const props = defineProps({
  datalist: {
    type: Array,
    default: () => {
      return {
        attribute: "",
        instructions: "",
        type: "",
        option: "",
        default: "",
      };
    },
  },
  type: {
    type: String,
    default: "attributes", // attributes/events
  },
});

const cols = ref([
  { title: "参数", dataIndex: "attribute", width: "10" },
  { title: "说明", dataIndex: "instructions", width: "30" },
  { title: "类型", dataIndex: "type", width: "10" },
  { title: "可选择", dataIndex: "option", width: "20" },
  { title: "默认值", dataIndex: "default", width: "20" },
]);

const colsEvents = ref([
  { title: "事件名称", dataIndex: "name", width: "10" },
  { title: "说明", dataIndex: "instructions", width: "30" },
  { title: "回调参数", dataIndex: "arg", width: "20" },
  { title: "示例", dataIndex: "example", width: "20" },
]);

const getCols = computed(() => {
  let col = [];
  switch (props.type) {
    case "attributes":
      col = cols.value;
      break;
    case "events":
      col = colsEvents.value;
      break;
    default:
      break;
  }
  return col;
});
</script>
<style scoped>
.table-box .it-table {
  margin: 0;
}
</style>
