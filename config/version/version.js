/**
* 版本号基本是由三位数字组成：
*   1   .   0   .   0
* [MAJOR].[MINOR].[PATCH]

* */
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const currentDirectory = process.cwd()
const packageJsonPath = path.join(currentDirectory, 'package.json')
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8')
const packageJson = JSON.parse(packageJsonContent)
const currentVersion = packageJson.version
const [ major, minor, patch ] = currentVersion.split('.')
const majorVersion = `${(parseInt(major) + 1).toString()}.${minor}.${patch}`
const minorVersion = `${major}.${(parseInt(minor) + 1).toString()}.${patch}`
const patchVersion = `${major}.${minor}.${(parseInt(patch) + 1).toString()}`


inquirer.prompt({
  type: 'list',
  name: 'version',
  message: 'Select a Release Type:',
  choices: [{
      name: 'Major Release',
      value: majorVersion,
      description: 'Major Release',
    }, {
      name: 'Minor Release',
      value: minorVersion,
      description: 'Minor Release',
    }, {
      name: 'Patch Release',
      value: patchVersion,
      description: 'Minor Release',
    },
    new inquirer.Separator()
  ]
})
  .then((result) => {
    const { version } = result

    packageJson.version = version;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
    console.log(`版本号已从 ${currentVersion} 更新为 ${version}`)
  })
