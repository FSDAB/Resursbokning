<template>
  <div class="home">
    <Fsdcount />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Fsdcount from '@/components/Fsdcount.vue'; // @ is an alias to /src

    @Component({
      components: {
        Fsdcount
      }
    })
    export default class Home extends Vue { }
</script>
