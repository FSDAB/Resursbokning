<template>
  <div id="home">
    <div class="hub">
      <Hub/>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import App from '@/App.vue';
    import Hub from '@/Components/Hub.vue';
    @Component({
      components: {
        App,
        Hub,
      }
    })
    export default class Home extends Vue { }
</script>

<style scoped>

@media only screen and (max-width: 1200px) {
  .hub {
    margin-top: 0px;
  }
}
</style>
