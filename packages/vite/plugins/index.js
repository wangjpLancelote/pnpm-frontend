import vue from '@vitejs/plugin-vue'
import htmlPlugin from 'vite-plugin-html-config'
import legacy from '@vitejs/plugin-legacy'

import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'

const packageJson = require('../../package.json')
const version = packageJson.version

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [
    htmlPlugin({
      metas: [
        {
          name: 'version',
          content: version,
        },
      ],
    }),
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true,
      polyfills: ['es.promise', 'es.symbol'],
    }),
  ]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createSvgIcon(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
