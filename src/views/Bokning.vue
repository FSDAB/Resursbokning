<template>
  <div class="about">
    <Bookings />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Bookings from '@/Components/Bookings.vue';

    @Component({
      components: {
        Bookings
      }
    })
    export default class About extends Vue { }
</script>
