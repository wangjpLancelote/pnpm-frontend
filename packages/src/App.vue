<template>
  <router-view />
</template>

<script setup>
import useSettingsStore from '@/store/modules/settings'
import { handleThemeStyle } from '@/utils/theme'
import { ElMessageBox } from 'element-plus'
import { webUpdater } from './plugins/webUpdater.js'

onMounted(() => {
  nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(useSettingsStore().theme)
  })
})
// 代码更新通知更新
const up = new webUpdater()
let hasDialogModel = false
up.on('update', () => {
  if (!sessionStorage.getItem('NEEDUPDTE') && !hasDialogModel) {
    hasDialogModel = true
    ElMessageBox.confirm('系统已更新,需要刷新页面重新加载数据', '提示', {
      confirmButtonText: '刷新',
      cancelButtonText: '取消',
      center: true,
    })
      .then(() => {
        hasDialogModel = false
        location.reload()
      })
      .catch(() => {
        hasDialogModel = false
        sessionStorage.setItem('NEEDUPDTE', true)
      })
  }
})
</script>
