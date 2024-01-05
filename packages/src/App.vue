<template>
  <el-config-provider :locale="appStore.locale" :size="size">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'
import { handleThemeStyle } from '@/utils/theme'
import { ElMessageBox } from 'element-plus'
import { webUpdater } from './plugins/webUpdater.js'
import useAppStore from './store/modules/app'

const appStore = useAppStore();
const size = computed(() => appStore.size as any);


onMounted(() => {
  nextTick(() => {
    // ��ʼ��������ʽ
    handleThemeStyle(useSettingsStore().theme)
  })
})
// �������֪ͨ����
const up = new webUpdater()
let hasDialogModel = false
up.on('update', () => {
  if (!sessionStorage.getItem('NEEDUPDTE') && !hasDialogModel) {
    hasDialogModel = true
    ElMessageBox.confirm('ϵͳ�Ѹ���,��Ҫˢ��ҳ�����¼�������', '��ʾ', {
      confirmButtonText: 'ˢ��',
      cancelButtonText: 'ȡ��',
      center: true,
    })
      .then(() => {
        hasDialogModel = false
        location.reload()
      })
      .catch(() => {
        hasDialogModel = false
        //@ts-ignore
        sessionStorage.setItem('NEEDUPDTE', true)
      })
  }
})
</script>
