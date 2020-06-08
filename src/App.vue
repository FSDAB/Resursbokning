<template>
  <div id="app" >
    <SideNav/>
    <div class="hub col-md-12" style="border: 5px solid green ">
     <!-- <router-view /> -->
      <!-- <Hub /> -->
      <Home/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import SideNav from '@/Components/SideNav.vue';
// import Hub from '@/Components/Hub.vue';
@Component({
  components: {    
    SideNav,
    Home,
    // Hub,
    
  }
})
export default class App extends Vue {
   constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
#app  {
  color: white;
}

.hub {
  width: 88%;
  margin-left: 12%;
  margin-top:10px ;
  padding: 20px;
  position: sticky;
  background-color: #ffffff;
  height: 100%;

}

@media only screen and (max-width: 1200px) {
.sidebar {
  display:none;
}

.hub {
  width: 100%;
  height: 100%;
  margin-left: 0%;
  padding:0px;
}
}

</style>
