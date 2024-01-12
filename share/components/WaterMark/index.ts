import WaterMark from "./index.vue";

WaterMark.install = (app) => {
  app.component(WaterMark.name, WaterMark);
};

export default WaterMark;
