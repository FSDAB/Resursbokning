<template>
    <div id="col-md-12">
      <div class="sidebar col-md-12">
       <Navbar/>
      </div>
      <div class="hub col-md-12">
        <div class="header col-md-12" style="border: 2px solid brown;">
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
  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
#col-md-12  {
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid green;
}
.sidebar {
  height: 100%;
  width: 10%;
  position: absolute;
  border: 2px solid Blue;
  float: left;
  overflow:hidden;
  padding: 0%;

}

.header {
  height: 100px;
  width: 100%;
  margin-left:-20px ;
  position: absolute;
  top: 0px;
}
.hub {
  height: 100%;
  width: 90%;
  margin-left: 10%;
  border: 2px solid Red;
  padding: 20px;
}

.footer {
height: 70px;
position: fixed;
bottom: 0;
width: 90%;
margin-left:-20px ;
}

@media only screen and (max-width: 900px) {
.sidebar {
  display:none;
}
.footer {
 display:none;
}
.header {
 display:none;
}
.hub {
  width: 100%;
  margin-left: 0%;
  padding:0px;
}
}

</style>
