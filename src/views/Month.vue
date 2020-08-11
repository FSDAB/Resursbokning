<template>
  <div class="about">
    <Monthlyview />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Monthlyview from '@/Components/Monthlyview.vue';

    @Component({
      components: {
        Monthlyview,
      }
    })
    export default class About extends Vue { }
</script>
