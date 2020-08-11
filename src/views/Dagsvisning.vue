<template>
  <div class="about">
    <Dags />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Dags from '@/Components/Dags.vue';

    @Component({
      components: {
        Dags
      }
    })
    export default class About extends Vue { }
</script>
