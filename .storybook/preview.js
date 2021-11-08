// https://stackoverflow.com/a/67001933
import { app } from '@storybook/vue3'
// CSS must be imported before .vue files to ensure that the styles defined in .vue files cam overwrite the default base styles
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'
import { createPinia } from 'pinia'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
const pinia = createPinia()
app.use(pinia)
