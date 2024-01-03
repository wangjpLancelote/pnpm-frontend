import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import createVitePlugins from './vite/plugins'

const packageJson = require('./package.json')
const version = packageJson.version

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, './mode')
  const { VITE_APP_ENV, VITE_APP_BASE_API } = env
  return {
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    envDir: './mode',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    server: {
      port: 3000,
      host: true,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, ''),
        },
      },
    },
    //fix:error:stdin>:7356:1: warning: "@charset" must be the first rule in the file
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
    build: {
      target: 'es2015',
      sourcemap: false,
      reportCompressedSize: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'],
        },
        output: {
          comments: true,
        },
      },
      assetsDir: 'static',
      assetsInclude: ['image/**'],
      rollupOptions: {
        output: {
          assetFileNames: `${version}/[ext]/[name].[hash].[ext]`,
          chunkFileNames: `${version}/js/[name].[hash].js`,
          entryFileNames: `${version}/[name].[hash].js`,
        },
      },
    },
  }
})
