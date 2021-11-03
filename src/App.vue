<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import IconGitHub from '~icons/mdi/github'

</script>

<template>
  <div class="px-8 py-12">
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
    <HelloWorld
      msg="⚡️ A simple and compact vue 3 template with current cutting edge front end technologies."
      class="mt-2 pb-2 space-y-2 border-b-gray-400 border-b-width-1px"
    />

    <div class="mt-2 flex items-center justify-center space-x-2">
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
  </div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // less feature
  h3 {
    color: #42b983;
  }
}

.nav-item {
  @apply py-1 px-2 hover:bg-[#42b983dd] bg-[#42b983ee] active:bg-[#42b983ff] text-white rounded;
}

.router-link-exact-active {
  @apply font-bold;
}
</style>
