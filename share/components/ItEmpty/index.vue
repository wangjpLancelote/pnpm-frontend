<template>
  <div :class="['empty-box', `empty-box-${size}`]">
    <slot>
      <div class="empty-images"></div>
      <div class="empty-title">{{ name }}</div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "ItEmpty",
};
</script>

<script setup>
defineProps({
  name: {
    type: String,
    default: "暂无数据",
  },
  size: {
    type: String, // big small default
    default: "default",
  },
});
</script>
<style scoped>
.empty-box {
  width: 100%;
  margin: 0 auto;
  cursor: default;
  text-align: center;
}
.empty-images {
  margin: 0 auto;
  width: 320px;
  height: 320px;
  background-image: url("./images/normal.webp");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}
.empty-title {
  text-align: center;
  font-size: 18px;
  color: #a2abc7;
}
.empty-box-default {
  padding: 10px 0;
}
.empty-box-small {
  padding: 10px 0;
}
.empty-box-default .empty-images {
  width: 320px;
  height: 320px;
}
.empty-box-small .empty-images {
  width: 200px;
  height: 200px;
}
</style>
