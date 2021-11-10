import { defineConfig } from 'windicss/helpers'

function withOpacity (variableName: string) {
  return ({ opacityValue }: {opacityValue?: number}) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
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
