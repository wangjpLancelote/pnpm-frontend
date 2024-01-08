import vue from "@vitejs/plugin-vue";
import htmlPlugin from "vite-plugin-html-config";
import legacy from "@vitejs/plugin-legacy";
import createComponents from "./components";
import path from "path";

import createAutoImport from "./auto-import";
import createSvgIcon from "./svg-icon";
import createCompression from "./compression";
import createSetupExtend from "./vue-setup-extend";
import setupExtend from "./setup-extend";
import wind from "./wind";
import fs from "fs";

const packageJsonContent = fs.readFileSync("./package.json", "utf-8");
const packageJson = JSON.parse(packageJsonContent);

const version = packageJson.version;

// export default function createVitePlugins(viteEnv, isBuild = false) {
//   const vitePlugins = [
//     htmlPlugin({
//       metas: [
//         {
//           name: 'version',
//           content: version,
//         },
//       ],
//     }),
//     vue(),
//     legacy({
//       targets: ['defaults', 'not IE 11'],
//       additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
//       modernPolyfills: true,
//       polyfills: ['es.promise', 'es.symbol'],
//     }),
//   ]
//   vitePlugins.push(createAutoImport())
//   vitePlugins.push(createSetupExtend())
//   vitePlugins.push(createSvgIcon(isBuild))
//   isBuild && vitePlugins.push(...createCompression(viteEnv))
//   return vitePlugins
// }

export default (viteEnv: any, isBuild = false): any[] => {
  const vitePlugins: any[] = [
    htmlPlugin({
      metas: [
        {
          name: "version",
          content: version
        }
      ]
    }),
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      modernPolyfills: true,
      polyfills: ["es.promise", "es.symbol"]
    })
  ];
  vitePlugins.push(createAutoImport(path));
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(setupExtend());
  vitePlugins.push(createSvgIcon(isBuild));
  vitePlugins.push(createComponents(path));
  vitePlugins.push(wind());
  isBuild && vitePlugins.push(...createCompression(viteEnv));

  return vitePlugins;
};
