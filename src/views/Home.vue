<template>
    <Hub />
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Hub from '@/Components/Hub.vue';

    @Component({
      components: {
        Hub
      }
    })
    export default class Home extends Vue {

     }
</script>
