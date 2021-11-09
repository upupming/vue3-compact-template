<script lang="ts">
import { defineComponent, ref, defineEmits } from 'vue'
import { useCounterStore } from '@/stores/counter'

export interface TemplateIntroductionProps {
  msg?: string
}

// https://github.com/vuejs/vue-next/issues/4918
export default defineComponent({})
</script>

<script setup lang="ts">
defineProps<TemplateIntroductionProps>()
interface TemplateIntroductionEmits {
  (event: 'update', msg: string): void
}
const emits = defineEmits<TemplateIntroductionEmits>()

const count = ref(0)
const counter = useCounterStore()
</script>

<template>
  <div
    class="mt-2 pb-2 space-y-2"
    @click="emits('update', 'Hello from TemplateIntroductionEmits')"
  >
    <h1
      v-if="msg"
      class="font-semibold text-xl text-gray-600"
    >
      {{ msg }}
    </h1>

    <h2 class="font-semibold">
      Tech stack
    </h2>
    <ul
      class="pl-8 list-disc"
    >
      <li>
        Framework: <a
          href="https://v3.vuejs.org/"
          rel="nofollow"
        >Vue 3</a>
      </li>
      <li>Package manager: <a href="https://github.com/pnpm/pnpm">pnpm</a></li>
      <li>
        Build tool: <a
          href="https://vitejs.dev/"
          rel="nofollow"
        >Vite 2</a>
      </li>
      <li>
        State management: <a
          href="https://pinia.esm.dev/"
          rel="nofollow"
        >Pinia</a>
      </li>
      <li>
        Router: <a
          href="https://next.router.vuejs.org/"
          rel="nofollow"
        >Vue Router</a>
      </li>
      <li>
        Utility first CSS framework: <a
          href="https://windicss.org/"
          rel="nofollow"
        >WindiCSS</a>
      </li>
      <li>
        CSS preprocessor: <a
          href="https://lesscss.org/"
          rel="nofollow"
        >Less</a>
      </li>
      <li>UI component explorer: <a href="https://github.com/storybookjs/storybook/">Storybook</a></li>
      <li>Icons: <a href="https://github.com/antfu/unplugin-icons">unplugin-icons</a></li>
      <li>ESLint rule: <a href="https://github.com/standard/eslint-config-standard-with-typescript">eslint-config-standard-with-typescript</a></li>
      <li>Style linting: stylelint standard</li>
      <li>commit convention: husky + commitlint</li>
    </ul>

    <p>See <code>README.md</code> for more information.</p>

    <div class="text-center">
      <button
        type="button"
        class="btn mx-2"
        @click="count++"
      >
        ref in component count is: {{ count }}
      </button>
    </div>

    <div class="text-center">
      <button
        type="button"
        class="btn mx-2"
        @click="counter.increment()"
      >
        ref in pinia store count is: {{ counter.count }}
      </button>
    </div>
    <p>
      Edit
      <code>components/TemplateIntroduction.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<style>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

p {
  @apply my-4;
}

.btn {
  @apply px-4 py-1 rounded inline-block
    bg-teal-600 text-white cursor-pointer
    hover:bg-teal-700
    disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50;
}

</style>
