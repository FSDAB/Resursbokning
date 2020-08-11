<template>
  <div class="about">
    <Count1 />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Count1 from '@/Components/CountDatorer/Count1.vue';

    @Component({
      components: {
        Count1
      }
    })
    export default class About extends Vue { }
</script>
