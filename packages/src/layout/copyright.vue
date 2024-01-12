<template>
  <div class="copyright">
    <span
      >Copyright © {{ date }}
      <a href="http://www.szsic.cn" target="_blank">@copyright Copyright</a>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    let date = new Date();
    return {
      date: date.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.copyright {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
