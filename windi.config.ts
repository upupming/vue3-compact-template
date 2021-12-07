import { defineConfig } from 'windicss/helpers'
import { themeable } from 'tailwindcss-themeable'

export default defineConfig({
  theme: {
    extend: {
    }
  },
  variants: {
    extend: []
  },
  plugins: [themeable()]
}
)
