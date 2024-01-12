import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
import vuePlugin from "@vitejs/plugin-vue";
export default defineConfig(({ mode, command }: ConfigEnv): any => {
  return {
    base: "/",
    plugins: [Markdown(), vuePlugin({})],
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          docDist: resolve(__dirname, "./index.html")
        }
      }
    }
  };
});
