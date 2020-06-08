<template>
  <div class="home">
    <Hub/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import App from '@/App.vue';
    import Hub from '@/Components/Hub.vue';

    @Component({
      components: {
        App,
        Hub
      }
    })
    export default class Home extends Vue { }
</script>
