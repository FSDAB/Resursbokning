<template>
<div id="SideNav">
  <div class="col-md-12" style="background-color: #CBD7FB;">
    <b-navbar type="blue"  >
      <b-navbar-nav>
          <b-nav-item @click="hide()" id="hide1200px"> {{ Toggle ? 'x ' : '+ ' }}Sidebar</b-nav-item>
          <b-nav-item-dropdown text="Länkar 1" left>
         <!-- <router-link :to="{ name: 'Dagoversikt' }">    -->        
          <b-dropdown-item >Dagsöversikt</b-dropdown-item>
          <!-- </router-link> -->
          <b-dropdown-item >2</b-dropdown-item>
          <b-dropdown-item href="#">3</b-dropdown-item>
          <b-dropdown-item href="#">4</b-dropdown-item> 
          </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
  <div v-if="this.Toggle" >
    <div class="sidebar-body col-md-12" style="border: 5px solid red;">
          <div class="img col-md-12" style="padding:5px;"> 
            <a href="@/views/App.vue">
            <img src="@/assets/fsd_logo.png">
            </a>
          </div>
      <div class="links col-md-12" style="padding:0px;">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="@/Components/Hub.vue">Startsida</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :to="{ name: 'Dagoversikt' }">Dagsöversikt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="@/Components/Month.vue">Månadsöversikt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="@/Components/Bookings.vue">Bokningar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="src\Components\Mesher.vue">Mesher</a>
        </li>
      </ul>
      </div> 
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import App from 'App.vue';

@Component({
  components: {

  }
})

export default class SideNav extends Vue {
  Toggle: boolean;

  constructor() {
    super();
    this.Toggle = true;

  }
    hide() {
    if (this.Toggle) {
      this.Toggle = false;
    } else {
      this.Toggle = true;
    }
  }
}
</script>

<style scoped lang="scss">
.hide {
  background-color: #CBD7FB;

}

.sidebar-body{
  height: 100%;
  width: 10%;
  min-width: 150px;
  padding: 0px;
  position: fixed;
  float: left;
  overflow-y:hidden;
  overflow-x:hidden;
  background-color: #CBD7FB;
}
.img {
 // margin-top: 70px;
  margin-bottom: 20px;
}
.links {
  width: 100%;
  margin-left: 0;
  a{
    color: #1E45A1;
  }
}

@media only screen and (max-width: 1200px) {
  .sidebar-body {
    display:none;
  }
  #hide1200px{
    display:none;
  }
}
</style>