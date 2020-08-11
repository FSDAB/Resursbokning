<template>
  <div class="about">
    <Hub />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Hub from '@/Components/Hub.vue';

    @Component({
      components: {
        Hub
      }
    })
    export default class About extends Vue { }
</script>
