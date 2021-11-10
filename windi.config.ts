import { defineConfig } from 'windicss/helpers'

function withOpacity (variableName: string) {
  return ({ opacityValue = 1 }) => {
    return `rgba(var(${variableName}), ${opacityValue})`
  }
}

export default defineConfig({
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted')
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted')
        }
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill')
        }
      }
    }
  },
  variants: {
    extend: []
  },
  plugins: []
}
)
