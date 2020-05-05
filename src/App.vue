<template>
    <div id="app col-md-12" >
      <div v-if="this.Toggle">
      <div class="sidebar col-md-12">
       <Navbar/>
      </div>
      </div>
        <div class="header col-md-12">
          <b-navbar style="background-color: #CBD7FB; " type=""  >
            <b-navbar-nav>
              <b-nav-item @click="hide()"> {{ Toggle ? 'x ' : '+ ' }}Sidebar</b-nav-item>
              <b-nav-item-dropdown text="Länkar 1" left>
                <b-dropdown-item href="#">1</b-dropdown-item>
                <b-dropdown-item href="#">2</b-dropdown-item>
                <b-dropdown-item href="#">3</b-dropdown-item>
                <b-dropdown-item href="#">4</b-dropdown-item> 
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar>
        </div>
      <div class="hub col-md-12">
          <Hub />
<!--    <div class="footer col-md-12"  style="border: 2px solid brown;">
          Footer
        </div>  -->
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Dags from '@/Components/Dags.vue';
import Hub from '@/Components/Hub.vue';
import Mesher from '@/Components/Mesher.vue';
import Month from '@/Components/Month.vue';
import Navbar from '@/Components/Navbar.vue';

@Component({
  components: {    
    Navbar,
    Hub,
  },
})
export default class App extends Vue {
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
.app  {
  width: 100%;
  height: 100%;
  position: absolute;  
  background-color: white;
}

.sidebar {
  height: 100%;
  width: 10%;
  padding: 0%;
  position: fixed;
  float: left;
  overflow-y:hidden;
  overflow-x:auto;
  background-color: #CBD7FB;
}

.header {
  width: 100%;
  top: 0px;
  margin-left: -20px;
  background-color: #CBD7FB;
}

.hub {
  width: 90%;
  margin-left: 10%;
  padding: 20px;
  position: sticky;
  background-color: #ffffff;
  height: auto;

}

@media only screen and (max-width: 1200px) {
.sidebar {
  display:none;
}
/* .footer {
 display:none;
} */
.header {
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
