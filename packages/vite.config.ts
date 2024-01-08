import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import path from "path";
import createVitePlugins from "./vite/plugins";
import fs from "fs";

const packageJsonContent = fs.readFileSync("./package.json", "utf-8");
const packageJson = JSON.parse(packageJsonContent);

// const packageJson = require('./package.json');
const version = packageJson.version;

export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, "./mode");
  const { VITE_APP_ENV } = env;
  return {
    base: VITE_APP_ENV === "production" ? "/" : "/",
    envDir: "./mode",
    plugins: createVitePlugins(env, command === "build"),
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./"),
        "@": path.resolve(__dirname, "./src"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    server: {
      port: 3000,
      host: true,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: "http://localhost:8080",
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, "")
        }
      }
    },
    //fix:error:stdin>:7356:1: warning: "@charset" must be the first rule in the file
    css: {
      postcss: {
        plugins: [
          require("tailwindcss"),
          require("autoprefixer"),
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    },
    build: {
      target: "es2015",
      sourcemap: false,
      reportCompressedSize: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ["console.log"]
        },
        output: {
          comments: true
        }
      },
      assetsDir: "static",
      assetsInclude: ["image/**"],
      rollupOptions: {
        output: {
          assetFileNames: `${version}/[ext]/[name].[hash].[ext]`,
          chunkFileNames: `${version}/js/[name].[hash].js`,
          entryFileNames: `${version}/[name].[hash].js`
        }
      }
    },
    // 预编译
    optimizeDeps: {
      include: [
        "vue",
        "vue-router",
        "pinia",
        "axios",
        "@vueuse/core",
        "path-to-regexp",
        "echarts",
        "vue-i18n",
        "@vueup/vue-quill",
        "element-plus/es/components/form/style/css",
        "element-plus/es/components/form-item/style/css",
        "element-plus/es/components/button/style/css",
        "element-plus/es/components/input/style/css",
        "element-plus/es/components/input-number/style/css",
        "element-plus/es/components/switch/style/css",
        "element-plus/es/components/upload/style/css",
        "element-plus/es/components/menu/style/css",
        "element-plus/es/components/col/style/css",
        "element-plus/es/components/icon/style/css",
        "element-plus/es/components/row/style/css",
        "element-plus/es/components/tag/style/css",
        "element-plus/es/components/dialog/style/css",
        "element-plus/es/components/loading/style/css",
        "element-plus/es/components/radio/style/css",
        "element-plus/es/components/radio-group/style/css",
        "element-plus/es/components/popover/style/css",
        "element-plus/es/components/scrollbar/style/css",
        "element-plus/es/components/tooltip/style/css",
        "element-plus/es/components/dropdown/style/css",
        "element-plus/es/components/dropdown-menu/style/css",
        "element-plus/es/components/dropdown-item/style/css",
        "element-plus/es/components/sub-menu/style/css",
        "element-plus/es/components/menu-item/style/css",
        "element-plus/es/components/divider/style/css",
        "element-plus/es/components/card/style/css",
        "element-plus/es/components/link/style/css",
        "element-plus/es/components/breadcrumb/style/css",
        "element-plus/es/components/breadcrumb-item/style/css",
        "element-plus/es/components/table/style/css",
        "element-plus/es/components/tree-select/style/css",
        "element-plus/es/components/table-column/style/css",
        "element-plus/es/components/select/style/css",
        "element-plus/es/components/option/style/css",
        "element-plus/es/components/pagination/style/css",
        "element-plus/es/components/tree/style/css",
        "element-plus/es/components/alert/style/css",
        "element-plus/es/components/checkbox/style/css",
        "element-plus/es/components/date-picker/style/css",
        "element-plus/es/components/transfer/style/css",
        "element-plus/es/components/tabs/style/css",
        "element-plus/es/components/image/style/css",
        "element-plus/es/components/tab-pane/style/css"
      ]
    }
  };
});
