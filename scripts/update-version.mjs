import fs from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

// 从命令行参数中获取版本号
const version = process.argv[2]

// 读取 package.json 文件
const pkgPath = fileURLToPath(new URL(`../packages/package.json`, import.meta.url))
const pkgContent = fs.readFileSync(pkgPath, 'utf-8')
const pkgData = JSON.parse(pkgContent)

// 更新版本号，并保存文件
pkgData.version = version
fs.writeFileSync(pkgPath, JSON.stringify(pkgData, null, 2))

// console.log(`Package version updated to ${version}`)
// 设置atlas URL

// const urlType = process.argv[3]

// const urlTypeList = {
//   master: 'https://gslmy-server.qyxqk.com',
//   release: 'https://gslmy-server.qyxqk.com',
// }

// const atlasConfig = fileURLToPath(new URL(`../packages/public/atlas/config.js`, import.meta.url))
// const atlasConfigData = `let url = '${urlTypeList[urlType]}';export default {url};`

// fs.writeFileSync(atlasConfig, atlasConfigData)
