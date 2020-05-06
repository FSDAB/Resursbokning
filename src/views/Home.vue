<template>
<App/>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import App from '@/App.vue';

    @Component({
      components: {
        App
      }
    })
    export default class Home extends Vue {

     }
</script>
