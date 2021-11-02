const { spawn } = require('child_process')
const deployConfig = require('./deploy.config')

spawn(
  'pnpx',
  [
    'build-storybook',
    '-o', `${deployConfig.path}/${deployConfig.storybookFolder}`
  ],
  { stdio: 'inherit' }
)
