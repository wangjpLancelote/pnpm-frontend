<template>
  <div class="left-menu" :style="{ backgroundColor: bgColor }">
    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
      <transition :enter-active-class="proxy?.animate.menuSearchAnimate.enter" mode="out-in">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="bgColor"
          :text-color="textColor"
          :unique-opened="true"
          :active-text-color="theme"
          :collapse-transition="false"
          mode="vertical"
        >
          <sidebar-item v-for="(route, index) in sidebarRouters" :key="route.path + index" :item="route" :base-path="route.path" />
        </el-menu>
      </transition>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";
import variables from "@/assets/styles/variables.module.scss";
import useAppStore from "@/store/modules/app";
import useSettingsStore from "@/store/modules/settings";
import usePermissionStore from "@/store/modules/permission";
import { ComponentInternalInstance } from "vue";

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const route = useRoute();
const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();

const sidebarRouters = computed(() => permissionStore.sidebarRouters);
const showLogo = computed(() => settingsStore.sidebarLogo);
const sideTheme = computed(() => settingsStore.sideTheme);
const theme = computed(() => settingsStore.theme);
const isCollapse = computed(() => !appStore.sidebar.opened);

const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

const bgColor = computed(() => sideTheme.value === "theme-dark" ? variables.menuBackground : variables.menuLightBackground);
const textColor = computed(() => sideTheme.value === "theme-dark" ? variables.menuColor : variables.menuLightColor);
</script>

<style lang="scss">
.left-menu {
  margin-top: 50px;
  padding-bottom: 50px;

  .el-scrollbar {
    // background: url("~@/assets/images/menu-bg.png") no-repeat;
    // background-size: cover;
    border-right: 1px solid #d8dce5;
  }

  .el-menu {
    // background: url("~@/assets/images/menu-bg.png") no-repeat;
  }
}
.is-active {
}
.openSidebar {
  .drawer-bg {
    display: none;
  }
}
</style>
