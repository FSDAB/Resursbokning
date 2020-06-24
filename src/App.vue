<template>
  <div id="app">
    <div class="nav col-md-12" style="background-color: #CBD7FB;">
    <b-navbar type="blue">
      <b-navbar-nav>
          <b-nav-item @click="hide()" > {{ Toggle ? 'x ' : '+ ' }}Sidebar</b-nav-item>
          <b-nav-item-dropdown text="Länkar 1" left>

          <!-- <router-link :to="{ name: 'dags' }"></router-link> -->
          <!-- <b-nav-item :to="{ name: 'dags' }">Dags</b-nav-item> -->

          <b-dropdown-item >Dagsöversikt</b-dropdown-item>
          <b-dropdown-item >2</b-dropdown-item>
          <b-dropdown-item href="#">3</b-dropdown-item>
          <b-dropdown-item href="#">4</b-dropdown-item> 
          </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
  <Menu/> 
    <div class="hub col-md-12" style="border: 5px solid green ">
      <Reveal id="desktop-only" >
          <div class="img col-md-12" style="padding:5px;"> 
          <b-nav-item :to="{ name: 'hub' }">
            <img src="@/assets/fsd_logo.png">
          </b-nav-item>
          </div>       
          <ul class="nav flex-column">
            <li class="nav-item">
            <a class="nav-link active" href="@/views/App.vue">Startsida</a>
            </li>
            <li class="nav-item">
              <b-nav-item :to="{ name: 'dags' }">Dags</b-nav-item> 
            </li>
              <router-link :to="{ name: 'bookings' }">
               <a>Månadsöversikt</a>
              </router-link>
            <li class="nav-item">
              <a class="nav-link " href="@/Components/Booking.vue">Bokningar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="@/Components/Mesher.vue">Mesher</a>
            </li>
          </ul>
      </Reveal> 
      <main id="page-wrap">
        <router-view />
        <Home/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import SideNav from '@/Components/SideNav.vue';
import { Push, Reveal } from 'vue-burger-menu';
@Component({
  components: {    
    SideNav,
    Home,
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
  color: white;
  width: 100%;
  height: 100%;
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
  background-color: #ffffff;
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
  border: 5px solid purple; 
}
}

</style>
