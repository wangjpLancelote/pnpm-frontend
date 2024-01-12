let fs = require('fs')
const path = require('path')

let outFiles = ['common', 'dist', 'node_modules']
let docFiles = ['components', 'styles', 'utils']

function getComponentRouter() {
  const modules = []

  docFiles.map((ele) => {
    let filepath = path.join(__dirname, `../${ele}/`)
    let files = fs.readdirSync(filepath)

    modules.push({
      path: `${ele}`,
      name: ele,
      type: ele,
    })

    files.map((file) => {
      const location = path.join(filepath, file)
      const info = fs.statSync(location)

      if (!outFiles.includes(file) && info.isDirectory()) {
        modules.push({
          path: `${ele}/${file}`,
          name: file,
          type: ele,
        })
      }
    })
    fs.writeFileSync(`${__dirname}/itboxModule.json`, `${JSON.stringify(modules)}`, (res) => {})
  })
}
getComponentRouter()
