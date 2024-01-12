import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
import vuePlugin from "@vitejs/plugin-vue";
export default defineConfig(({ mode, command }: ConfigEnv): any => {
  return {
    base: "./",
    plugins: [
      Markdown(),
      vuePlugin({
        include: [/\.vue$/, /\.md$/]
      })
    ],
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    server: {
      port: 3000,
      host: true,
      open: true
    },
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
