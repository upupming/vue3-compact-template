# vue3-compact-template

[English](README.md) | 中文

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

⚡️ 一个包含了当前最新的前端技术的简单紧凑的 Vue 3 模板。

前往以下地址查看 Demo:

- http://upupming.site/vue3-compact-template/
- http://upupming.site/vue3-compact-template/storybook/

## 技术栈

- 前端框架: [Vue 3](https://v3.vuejs.org/)
- 包管理器: [pnpm](https://github.com/pnpm/pnpm)
- 构建工具: [Vite 2](https://vitejs.dev/)
- 状态管理: [Pinia](https://pinia.esm.dev/)
- 路由: [Vue Router](https://next.router.vuejs.org/)
- 功能类优先 CSS 框架: [WindiCSS](https://windicss.org/)
- CSS 预编译器: [Less](https://lesscss.org/)
- UI 组件浏览工具: [Storybook](https://github.com/storybookjs/storybook/)
- 图标: [unplugin-icons](https://github.com/antfu/unplugin-icons)
- ESLint 规则: [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)
- 样式规范: stylelint standard
- commit 规范: husky + commitlint

## 本地开发

```bash
# 开发
pnpm run dev
# 运行 storybook
pnpm run storybook
```

## 构建

```bash
pnpm run build
pnpm run build-storybook
```

构建之后，`dist` 文件夹中会包含项目和 Storybook 的静态资源文件。你可以使用 `pnpm run serve` 使用本地服务器来 serve 这些静态资源。

- http://localhost:5000/vue3-compact-template/
- http://localhost:5000/vue3-compact-template/storybook/

### 推荐搭配

- 组件库: [NaiveUI](https://www.naiveui.com/zh-CN/os-theme), [arco design](https://arco.design/), [Varlet](https://github.com/haoziqaq/varlet)
- [VueUse](https://github.com/antfu/vueuse) - 一些有用的 composition API
- [`@vueuse/head`](https://github.com/vueuse/head) - 响应式修改 `head`

## 参考链接

- https://github.com/antfu/vitesse
- [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
