<template>
  <div class="navbar">
    <!--面包屑导航-->
    <!--<breadcrumb id="breadcrumb-container" class="breadcrumb-container" v-if="!settingsStore.topNav" />-->

    <div class="sys-logo">
      <span class="sys-name">Fundamental Demo</span>
    </div>

    <div class="right-menu flex align-center">
      <el-dropdown @command="handleCommand" class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <span>欢迎您，</span>
          <span class="name">{{ nickName }}</span>
          <i class="el-icon-caret-bottom" />
          <el-icon>
            <caret-bottom />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/user/profile" v-if="!dynamic">
              <el-dropdown-item>{{ $t("navbar.personalCenter") }}</el-dropdown-item>
            </router-link>
            <!--<el-dropdown-item command="setLayout">-->
            <!--  <span>{{ $t("navbar.layoutSetting") }}</span>-->
            <!--</el-dropdown-item>-->
            <el-dropdown-item divided command="logout">
              <span>{{ $t("navbar.logout") }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAppStore from "@/store/modules/app";
import useUserStore from "@/store/modules/user";
import useSettingsStore from "@/store/modules/settings";
import { dynamicClear, dynamicTenant } from "@/api/system/tenant";
import { ComponentInternalInstance } from "vue";

const appStore = useAppStore();
const userStore = useUserStore();
const settingsStore = useSettingsStore();

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const userId = ref(userStore.userId);
const nickName = ref(userStore.nickname);
const companyName = ref(undefined);
// 是否切换了租户
const dynamic = ref(false);

// 动态切换
const dynamicTenantEvent = async (tenantId: string) => {
  if (companyName.value != null && companyName.value !== "") {
    await dynamicTenant(tenantId);
    dynamic.value = true;
    proxy?.$tab.closeAllPage();
    proxy?.$router.push("/");
  }
};

const dynamicClearEvent = async () => {
  await dynamicClear();
  dynamic.value = false;
  proxy?.$tab.closeAllPage();
  proxy?.$router.push("/");
};

defineExpose({});

const toggleSideBar = () => {
  appStore.toggleSideBar(false);
};

const logout = async () => {
  await ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  });
  await userStore.logout();
  location.href = import.meta.env.VITE_APP_CONTEXT_PATH + "index";
};

const emits = defineEmits(["setLayout"]);
const setLayout = () => {
  emits("setLayout");
};
// 定义Command方法对象 通过key直接调用方法
const commandMap: { [key: string]: any } = {
  setLayout,
  logout
};
const handleCommand = (command: string) => {
  // 判断是否存在该方法
  if (commandMap[command]) {
    commandMap[command]();
  }
};
</script>

<style lang="scss" scoped>

.sys-logo {
  padding-left: 18px;
  height: 100%;
  //color: #fff;
  float: left;
  display: flex;
  align-items: center;
  font-size: 16px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }
}

:deep(.el-select .el-input__wrapper) {
  height: 30px;
}

.flex {
  display: flex;
}

.align-center {
  align-items: center;
}

.navbar {
  height: 50px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 1px solid #ededed;
  //box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    margin-right: 25px;
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .user-info {
      font-size: 14px;
      color: #172b5f;

      .welcome {
        padding-right: 10px;
      }

      .name {
        color: #6f6f6f;
      }

      .logout {
        cursor: pointer;
      }

      div {
        margin-left: 10px;
        float: left;
      }
    }

    .avatar-container {
      //margin-right: 40px;

      .avatar-wrapper {
        font-size: 14px;
        font-weight: 400;
        line-height: 41px;
        margin-top: 5px;
        position: relative;

        .name {color: #409eff;}

        i {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
