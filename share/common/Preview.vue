<template>
  <div class="pre-code-box">
    <transition name="slide-fade">
      <pre v-if="showCode" v-highlight class="language-html"><code ref="slotfather" class="language-html"><slot></slot></code></pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <span>{{ showCode ? "隐藏代码" : "显示代码" }}</span>
    </div>
    <!-- <button @click="fuzhi">复制</button> -->
  </div>
</template>
<script>
export default {
  name: "Preview",
};
</script>
<script setup>
import { ref } from "vue";
const showCode = ref(false);
const showOrhideCode = () => {
  showCode.value = !showCode.value;
};
const slotfather = ref(null);

const fuzhi = () => {
  let str = slotfather.value.innerHTML;
  let reg = /<.*?>/g;
  str = str.replace(reg, "");
  str = str.replace(/&lt;/g, "<");
  str = str.replace(/&gt;/g, ">");
  handleCopy(str);
};
// 复制文本
const handleCopy = (content) => {
  navigator.clipboard.writeText(content).then(
    () => {
      // console.log('复制成功')
    },
    () => {},
  );
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}

.pre-code-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  position: relative;
  transition: all 0.15s ease-out;
  margin-top: 10px;
}
.pre-code-box:hover {
  box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
}

.pre-code-box pre {
  margin-top: 0;
  margin-bottom: 0;
}

.pre-code-box pre code {
  border-radius: 10px;
  padding: 20px 20px;
  /* background-color: #ccc; */
}
.pre-code-box .showCode {
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  background: #f9f9f9;
  box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
}
.pre-code-box .showCode:hover {
  background: #f9f9f9;
  color: #0e80eb;
}

.pre-code-box .showCode span {
  margin-left: 10px;
}
</style>
