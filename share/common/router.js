import { createRouter, createWebHashHistory } from "vue-router";

import pagesRouter from "./itboxModule.json";

const modules = import.meta.glob("../**/index.md");

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    document.title = to.name;
    if (to.fullPath != "/") {
      // document.querySelector('.doc-view').scrollTop = 0
    }
  },
  routes: [
    {
      path: "/",
      name: "组件页面",
      component: () => import("./home.vue"),
      redirect: "ItEmpty",
      children: pagesRouter.map((item) => {
        return {
          path: item.name,
          name: item.name,
          meta: {
            type: item.type
          },
          component: modules[`../${item.path}/index.md`]
        };
      })
    }
  ]
});

export default router;

export { pagesRouter };
