<template>
  <div class="about">
    <Mesher />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Mesher from '@/Components/Mesher.vue';

    @Component({
      components: {
        Mesher
      }
    })
    export default class About extends Vue { }
</script>
