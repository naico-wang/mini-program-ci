const ci = require('miniprogram-ci')
const { version } = require('../../package.json')

const desc = 'TestCI Bot Uploaded'
const project = new ci.Project({
  appid: 'wx00b2480d67a90d90',
  type: 'miniProgram',
  projectPath: process.cwd() + '/dist/',
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
  process.exit(0)
}).catch(error => {
  if (error.errCode === -1) {
    console.log('上传成功')
  }
  console.log(error)
  console.log('上传失败')
  process.exit(-1)
})
