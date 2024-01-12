<template>
  <router-view></router-view>
</template>
<script setup></script>
<style scoped></style>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --header-height: 50px;
  --active-color: rgba(0, 99, 255, 1);
}
.doc-view blockquote {
  background-color: rgba(104, 109, 224, 0.1);
  padding: 10px;
  border-radius: 5px;
}
.doc-view .hljs {
  border-radius: 10px;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body blockquote {
  line-height: 2;
}
.markdown-body pre {
  line-height: 1.5;
}
</style>
