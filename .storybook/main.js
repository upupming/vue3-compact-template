const path = require('path')
const WindiCSS = require('vite-plugin-windicss').default
const deployConfig = require('../deploy.config')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite'
  },
  async viteFinal (config, { configType }) {
    // customize the Vite config here
    config.resolve.alias['@/'] = `${path.resolve(__dirname, '../src')}/`

    config.plugins.push(WindiCSS())

    // solve cjs name export not able to be converted to esm problem
    // https://github.com/vitejs/vite/issues/813#issuecomment-691799104
    // https://github.com/eirslett/storybook-builder-vite/issues/132
    config.optimizeDeps = config.optimizeDeps || {}
    config.optimizeDeps.include = config.optimizeDeps.include || []
    config.optimizeDeps.include.push('synchronous-promise')

    // https://github.com/storybookjs/storybook/issues/10887#issuecomment-901109891
    config.resolve.dedupe = ['@storybook/client-api']

    config.base = `/${deployConfig.path}/${deployConfig.storybookFolder}/`

    // return the customized config
    return config
  }
}
