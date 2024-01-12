<template>
  <div class="box">
    <watermark :width="400" :height="400" text="水印文字" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import watermark from "./index";
</script>
<style scoped>
.box {
  width: 500px;
  border: 1px solid #000;
  font-size: 16px;
  color: #131313;
  line-height: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 20px;
  line-height: 1.8;
}
</style>
