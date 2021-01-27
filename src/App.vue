<template>
  <div id="app">
  <Menu/> 
  
    <div class="hub col-md-12">
      <Reveal id="desktop-only" >
          <div class="img col-md-12" style="padding:5px;"> 
          <b-link :to="{ name: 'hub' }">
            <img src="@/assets/fsd_logo.png">
          </b-link>
          </div>       
          <ul class="nav flex-column">
            <li class="nav-item">
              <b-nav-item :to="{ name: 'hub' }"> Startsida </b-nav-item>
            </li>
            <li class="nav-item">
              <b-nav-item :to="{ name: 'dags' }">Dags</b-nav-item> 
            </li>
              <b-nav-item :to="{ name: 'month' }">Månadsöversikt</b-nav-item> 
            <li class="nav-item">
              <b-nav-item :to="{ name: 'bookings' }">Bokningar</b-nav-item> 
            </li>
            <li class="nav-item">
              <b-nav-item :to="{ name: 'mesher' }">Mesher</b-nav-item> 
            </li>
          </ul>
      </Reveal> 
      <main id="page-wrap" style="margin-top:50px;">
        <b-link :to="{ name: 'hub' }">
          <img src="https://www.fsd.se/images/logo/fsd_logo2.png">
        </b-link>       
         <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SideNav from '@/Components/SideNav.vue';
import { Push, Reveal } from 'vue-burger-menu';
@Component({
  components: {    
    SideNav,
    Push,
    Reveal,
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
  color: #E6EFF6;
  width: 100%;
  height: 100%;
}
#page-wrap {
  margin-top:50px;
  background-color: white;
  margin-bottom: 20px;
  // border-radius: 40px;
  
}
.img {
 // margin-top: 70px;
  margin-bottom: 20px;
  width: 200px;
  left: 50px;
}
.hub {
  height: 100%;
  padding: 20px;
  background-color: #E6EFF6;
}

@media only screen and (max-width: 1200px) {
#desktop-only {
 display:none;
}

.hub {
  width: 100%;
  height: 100%;
  margin-left: 0%;
  padding:0px;
}
.page-wrap{
  margin-top: 0px;
}
}

</style>
