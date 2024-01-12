import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Attributes from "./Attributes.vue";
import Preview from "./Preview.vue";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import "element-plus/dist/index.css";
import "@lib/share/styles/main.js";

const app = createApp(App);
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: ["javascript", "css", "html", "bash", "java", "sql", "json", "http"]
});
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightAll(block);
  });
});

app.component(Preview.name, Preview);
app.component(Attributes.name, Attributes);

app.use(router);
app.mount("#app");
