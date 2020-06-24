<template>
  <div class="home">
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
    export default class Home extends Vue { }
</script>
