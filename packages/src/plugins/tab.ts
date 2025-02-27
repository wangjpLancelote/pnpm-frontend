import { useTagsViewStore } from "@/store/modules/tagsView";
import router from "@/router";
import { TagView, RouteLocationRaw } from "vue-router";

export default {
  // 刷新当前tab页签
  async refreshPage(obj: TagView): Promise<void> {
    const { path, query, matched } = router.currentRoute.value;
    if (obj === undefined) {
      matched.forEach((m) => {
        if (m.components && m.components.default && m.components.default.name) {
          if (!["Layout", "ParentView"].includes(m.components.default.name)) {
            obj = { name: m.components.default.name, path: path, query: query };
          }
        }
      });
    }
    // prettier-ignore
    await useTagsViewStore().delCachedView(obj)
    router.replace({
      path: "/redirect" + obj.path,
      query: obj.query
    });
  },
  // 关闭当前tab页签，打开新页签
  closeOpenPage(obj: RouteLocationRaw): void {
    useTagsViewStore().delView(router.currentRoute.value);
    if (obj !== undefined) {
      router.push(obj);
    }
  },
  // 关闭指定tab页签
  async closePage(obj?: TagView): Promise<{ visitedViews: TagView[]; cachedViews: string[] } | any> {
    if (obj === undefined) {
      // prettier-ignore
      const { visitedViews } = await useTagsViewStore().delView(router.currentRoute.value) as any
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        return router.push(latestView.fullPath);
      }
      return router.push("/");
    }
    return useTagsViewStore().delView(obj);
  },
  // 关闭所有tab页签
  closeAllPage() {
    return useTagsViewStore().delAllViews();
  },
  // 关闭左侧tab页签
  closeLeftPage(obj: TagView) {
    return useTagsViewStore().delLeftTags(obj || router.currentRoute.value);
  },
  // 关闭右侧tab页签
  closeRightPage(obj: TagView) {
    return useTagsViewStore().delRightTags(obj || router.currentRoute.value);
  },
  // 关闭其他tab页签
  closeOtherPage(obj: TagView) {
    return useTagsViewStore().delOthersViews(obj || router.currentRoute.value);
  },
  // 打开tab页签
  openPage(url: RouteLocationRaw) {
    return router.push(url);
  },
  // 修改tab页签
  updatePage(obj: TagView) {
    return useTagsViewStore().updateVisitedView(obj);
  }
};
