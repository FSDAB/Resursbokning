<template>
  <div class="home">
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
    export default class Home extends Vue { }
</script>
