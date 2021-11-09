<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TemplateIntroduction from '@/components/TemplateIntroduction.vue'
import IconGitHub from '~icons/mdi/github'

const onTemplateIntroductionUpdate = (msg: string) => {
  console.log(msg)
}
</script>

<template>
  <div class="px-8 py-12 border-b-gray-400 border-b-width-1px">
    <div class="flex items-center">
      <img
        alt="Vue logo"
        src="./assets/logo.png"
        class="inline-block h-10"
      >
      <div class="flex-grow font-semibold text-xl px-4">
        vue3-compact-template
      </div>
      <a
        href="https://github.com/upupming/vue3-compact-template"
      >
        <IconGitHub class="h-10 w-10" />
      </a>
    </div>
    <TemplateIntroduction
      msg="⚡️ A simple and compact vue 3 template with current cutting edge front end technologies."
      @update="onTemplateIntroductionUpdate"
    />
  </div>
  <div class="mt-12 flex items-center justify-center space-x-2">
    <router-link
      to="/"
      class="nav-item"
    >
      Home
    </router-link>
    <router-link
      to="/about"
      class="nav-item"
    >
      About
    </router-link>
  </div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view class="px-12 py-12" />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: hsl(160deg 100% 37% / 100%);
  transition: 0.4s;
}

a:hover {
  background-color: hsl(160deg 100% 37% / 20%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

:root {
  --color-border: rgb(60 60 60 / 12%);
  --section-gap: 160px;
}

.nav-item {
  @apply py-1 px-2 hover:bg-[#42b983dd] bg-[#42b983ee] active:bg-[#42b983ff] text-white rounded;
}

.router-link-exact-active {
  @apply font-bold;
}

</style>
