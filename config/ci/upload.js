const ci = require('miniprogram-ci')
let { wxVersion: version, wxDesc: desc } = require('../../package.json').wx

if (!version) version = 'v1.0.0'
if (!desc) desc = new Date() + '上传'

const project = new ci.Project({
  appid: 'wx00b2480d67a90d90',
  type: 'miniProgram',
  projectPath: process.cwd(),
  privateKeyPath: process.cwd() + '/config/ci/private.wx00b2480d67a90d90.key',
  ignores: ['node_modules/**/*'],
})
ci.upload({
  project,
  version,
  desc,
  setting: {
    minify: true,
  },
}).then(res => {
  console.log(res)
  console.log('上传成功')
  process.exit(-1)
}).catch(error => {
  if (error.errCode === -1) {
    console.log('上传成功')
  }
  console.log(error)
  console.log('上传失败')
  process.exit(-1)
})
