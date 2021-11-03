const { spawn } = require('child_process')
const deployConfig = require('./deploy.config')

spawn(
  /^win/.test(process.platform) ? 'pnpx.cmd' : 'pnpx',
  [
    'build-storybook',
    '-o', `dist/${deployConfig.storybookFolder}`
  ],
  { stdio: 'inherit' }
)
