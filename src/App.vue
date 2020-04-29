<template>
    <div id="app col-md-12" style="background-color:#f0f0f0;">
      <div v-if="this.Toggle">
      <div class="sidebar col-md-12">
       <Navbar/>
      </div>
      </div>
      <div class="hub col-md-12">
        <div class="header col-md-12">
        <b-button @click="hide()" style=" margin-left:-15px;"> {{ Toggle ? 'Göm ' : 'Visa ' }}sidebar</b-button>
          HEADER
        </div>
          <Hub />
        <div class="footer col-md-12"  style="border: 2px solid brown;">
          Footer
        </div> 
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navbar from '@/Components/Navbar.vue';
import Hub from '@/Components/Hub.vue';
import Mesher from '@\Components\Mesher.vue';
import Dags from '@\Components\Dags.vue';

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
}

.sidebar {
  height: 100%;
  width: 10%;
  position: absolute;
  float: left;
  overflow:hidden;
  padding: 0%;
  background-color: #171717;

}

.header {
  height: 10%;
  width: 100%;
  margin-left:-20px ;
  position: absolute;
  top: 0px;
}
.hub {
  height: 100%;
  width: 90%;
  margin-left: 10%;
  padding: 20px;
}

/* .footer {
height: 70px;
position: fixed;
bottom: 0;
width: 90%;
margin-left:-20px ;
} */

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
  flex-direction: column;
}
}

</style>
