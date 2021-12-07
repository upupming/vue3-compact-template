# vue3-compact-template

English | [中文](README.zh.md)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

⚡️ A simple and compact vue 3 template with current cutting edge front end technologies.

See the live demo at:

- http://upupming.site/vue3-compact-template/
- http://upupming.site/vue3-compact-template/storybook/

## Tech stack

- Framework: [Vue 3](https://v3.vuejs.org/)
- Package manager: [pnpm](https://github.com/pnpm/pnpm)
- Build tool: [Vite 2](https://vitejs.dev/)
- State management: [Pinia](https://pinia.esm.dev/)
- Router: [Vue Router](https://next.router.vuejs.org/)
- Utility first CSS framework: [WindiCSS](https://windicss.org/)
- CSS preprocessor: [Less](https://lesscss.org/)
- UI component explorer: [Storybook](https://github.com/storybookjs/storybook/)
- Icons: [unplugin-icons](https://github.com/antfu/unplugin-icons)
- ESLint rule: [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
- Style linting: stylelint standard
- commit convention: husky + commitlint

## Development

```bash
# Development
pnpm run dev
# Run storybook
pnpm run storybook
```

## Build

```bash
pnpm run build
pnpm run build-storybook
```

After built, the `dist` folder will contain both the app and storybook build result, you can just serve them using `pnpm run serve`.

- http://localhost:5000/vue3-compact-template/
- http://localhost:5000/vue3-compact-template/storybook/

### Recommendations

- Component library: [NaiveUI](https://www.naiveui.com/zh-CN/os-theme), [arco design](https://arco.design/), [Varlet](https://github.com/haoziqaq/varlet)
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

## References

- https://github.com/antfu/vitesse
- [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
