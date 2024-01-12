<template>
  <div class="it-ui-doc">
    <div class="it-ui-header">
      <div class="logo-box">ITBOX</div>
      <div class="nav-box">
        <button v-for="item in docFilesMap" :key="item[0]" :class="[item[0] == activeType ? 'active' : '']" @click="handleClick(item[0])">
          {{ item[1] }}
        </button>
      </div>
    </div>
    <div class="it-ui-center">
      <aside class="scrollbarHide">
        <div class="doc-menu">
          <li v-for="(v, i) in MenuList" :key="i" :class="[activePathName == v.name ? 'active' : '']" @click="switchMenu(v)">
            {{ v["name"] }}
          </li>
        </div>
      </aside>
      <main class="doc-view">
        <router-view v-highlight></router-view>
      </main>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { pagesRouter } from "./router";
import { docFilesMap } from "./config.js";

const router = useRouter();
const switchMenu = (obj) => {
  if (router.currentRoute.value.name != obj.name) {
    router.push(obj.name);
  }
};

const activePathName = computed(() => router.currentRoute.value.name);

const route = useRoute();
let activeType = ref(route.meta.type || "");
const handleClick = (ele) => {
  activeType.value = ele;
  router.push(ele);
};

const MenuList = computed(() => {
  return pagesRouter.filter((item) => item.type == activeType.value);
});
</script>
<style scoped>
.it-ui-doc {
  position: relative;
}
.it-ui-header {
  width: 100%;
  height: var(--header-height);
  background-color: #ffffff;
  box-shadow: 0px 20px 30px rgba(35, 52, 122, 0.08);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.logo-box {
  line-height: var(--header-height);
  font-size: 48px;
  font-weight: bold;
  color: transparent;
  background: -webkit-linear-gradient(
    30deg,
    #32c5ff 25%,
    #b620e0 50%,
    #f7b500 75%,
    #20e050 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: auto;
  animation: gradientText 300s infinite linear;
  -webkit-animation: gradientText 300s infinite linear;
}
@keyframes gradientText {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 28000px;
  }
}

.nav-box button {
  line-height: var(--header-height);
  margin-left: 20px;
}
.nav-box button.active {
  color: var(--active-color);
}

.it-ui-doc aside {
  left: 0;
  top: var(--header-height);
  position: fixed;
  width: 172px;
  height: calc(100vh - var(--header-height));
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 5px;
  background: #ffffff;
  box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.08);
}
.doc-menu {
  line-height: 2em;
}

.doc-menu li {
  padding: 10px 16px;
  line-height: 1.5;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 5px;
}

.doc-menu li:hover,
.doc-menu li.active {
  background-color: rgba(64, 158, 255, 0.1);
  color: var(--active-color);
}
.it-ui-center {
  padding-left: 172px;
}
.doc-view {
  width: 100%;
  width: calc(100% - 172px);
  padding: 20px;
}
</style>
<style>
.componetnsBox {
  padding: 30px 15px;
  border: 1px solid #f0f0f0;
  border-bottom: 0px;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
}
</style>
