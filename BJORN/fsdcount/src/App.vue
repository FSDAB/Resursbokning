<template>
  <div id="app">
    <Fsdcount />
  </div>
</template>

<script lang="ts">
import Fsdcount from './components/Fsdcount.vue';

export default {
  name: 'App',
  components: {
    Fsdcount
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
