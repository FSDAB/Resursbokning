<template>
  <div class="home">
<hub/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Hub from './Components/Hub.vue';

    @Component({
      components: {
      }
    })
    export default class Home extends Vue { }
</script>
