import WaterMark from "./WaterMark";
import ItEmpty from "./ItEmpty";

// 组件列表
const components: any = [WaterMark, ItEmpty];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue: any) => {
  // 判断是否安装
  if ((install as any).installed) return;
  // 遍历注册全局组件
  components.map((component: any) => Vue.component(component.name, component));
};

const UIKit = {
  install
};
if (typeof window !== "undefined" && (window as any).Vue) {
  install((window as any).Vue);
}

export { WaterMark, ItEmpty };
export default UIKit;
