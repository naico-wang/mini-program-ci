const ci = require('miniprogram-ci')

const desc = 'Terminal Preview'
const project = new ci.Project({
  appid: 'wx00b2480d67a90d90',
  type: 'miniProgram',
  projectPath: process.cwd(),
  privateKeyPath: process.cwd() + '/config/ci/private.wx00b2480d67a90d90.key',
  ignores: ['node_modules/**/*'],
})
ci.preview({
    project,
    desc: desc,
    setting: {
      minify: true,
      autoPrefixWXSS: true,
      minifyWXML: true,
      minifyWXSS: true
    },
    qrcodeFormat: 'terminal'
})
  .then(() => {
    process.exit(0)
  })
