<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
    class="inline"
  >
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <hr>
  <h3>Current router view</h3>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  // less feature
  h3 {
    color: #42b983;
  }
}
</style>
