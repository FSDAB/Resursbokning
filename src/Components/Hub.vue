<template>
  <div class="container col-md-12">
      Processor<p> {{ computer !== undefined && computer[15] !== undefined ? computer[15].desc : '' }} </p>                  
    <div class="sidebar-mobile " >
      <b-button style="margin-top:5px; margin-right: 5px; float:right;" v-b-toggle.sidebar-backdrop>Meny</b-button>
      <b-sidebar
        id="sidebar-backdrop"
        title="Resursbokning"
        backdrop
        shadow
      >
      <a href="@Components/App.vue">
       <img src="@/assets/fsd_logo.png" style=" width: 100%; height: 150px;  ">
      </a>
        <div class="sidebar py-2" >
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="@/views/App.vue">Startsida</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="@/Components/Dags.vue">Dagsöversikt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="@/Components/Month.vue">Månadsöversikt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="@/Components/Booking.vue">Bokningar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="@/Components/Mesher.vue">Mesher</a>
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div>

    <div class="row-cols-1 row" >
      <div class="size-grid-standard col-md-6" id="Dags-fullscreen" style="background-color:red; height:500px;" >
        <div class="dator-row row" id="Rubrik" style="margin-bottom:3px;">
          <a href="@/Components/Dags.vue" style="color:black ">
            <h2 >Dagsöversikt</h2>
          </a>
        </div>
        <div class="dagsoversikt" style="background-color:blue;">
        <Dags/>
        </div>
      </div>

      <div class="size-grid-standard col-md-5" id="Month" style="background-color:blue;">
        <div class="dator-row-1 row" id="Rubrik" style="margin-left:40px;">
          <a href="@/Components/Month.vue" style="color:black">
            <h2>Månadsöversikt</h2> 
          </a>
        </div>
        <div class="col-md-12">
         <Month/>
        </div>
      </div>
    </div>


    <div class="row-cols-table row" style="background-color:yellow; height:200px;">
      <div class="dator-row row" id="Rubrik" style="margin-bottom:3px;">
        <div class="dator-row-1 row" id="Rubrik">
          <a href="@/Components/Bookings.vue" style="color:black">
           <h2>Mina Bokningar</h2>
          </a>
        </div>
        <div class="row-cols-table row">
          <div class="size-grid-auto col-md-12">      
            <Bookings/>
          </div>
        </div>
      </div>
    </div>

    <div class="row-cols-table row" style="background-color:green; height:200px;">
      <div class="dator-row row" id="Rubrik" style="margin-bottom:3px;">
        <a href="@/Components/Mesher.vue" style="color:black">
         <h2>Mesher</h2>
        </a> 
      </div>
      <div class="row-cols-table row">
        <div class="size-grid-auto col-md-12" style="overflow-y:auto;">
         <Mesher/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import axios from 'axios';
import App from 'App.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Mesher from './Mesher.vue';
import Dags from './Dags.vue';
import Month from './Month.vue';   
import Bookings from './Bookings.vue';   

@Component({
  components: {
    Mesher,
    Dags,
    Month,  
    Bookings,
  },
})

export default class Hub extends Vue {
  computer: Datorer[];
  booking: Bokning[];
  state: string;
  constructor() {
    super();
    this.computer = [];
    this.booking = [];
    this.state = 'disabled';
  }
  
  data() {
    return {
      value: '',
      context: null,
      countpc: '1',

    };
  }

  created() {
    this.getApi();

  }
    getApi () {
      axios.get('http://1.1.106.199:3000/datorer').then((response) => {
        this.computer = response.data.datorer as Datorer[];
        // tslint:disable-next-line:no-console
        console.log(this.computer[1]);
        this.$forceUpdate();
       });
      axios.get('http://1.1.106.199:3000/bokningar').then((response) => {
        this.booking = response.data as Bokning[];
        this.$forceUpdate();
    });
  }
}

class Datorer {
  namn: String;
  karnor: Number;
  desc: String;

  constructor() {
    this.namn = '';
    this.karnor = 0;
    this.desc = '';
  }
}

class Bokning {
  dator: Number;
  karnor: Number;
  datumstart: Date;
  datumslut: Date;

  constructor() {
    this.dator = 0;
    this.karnor = 0;
    this.datumstart = new Date();
    this.datumslut = new Date();
  }
} 
</script>

<style scoped lang="scss">
#fsdcountselector {
  width: 100px;
  margin-left: 10px;
  margin-bottom: 10px;
}
#Dags-fullscreen {
  overflow: hidden;
  margin-left:20px ;
}
#Rubrik {
  width: 100%;
  margin-left: 2px;
  margin-bottom: 2px;
}
.mesher {
  width: 100%;
  height: 80%;
  td {
    p {
      color: red;
    }
  }
}

.bokningar {
  width: 100%;
  height: 80%;
}

.calendar {
  padding: 20px;
  margin-left: 20px;
}
.container {
  width: 100%;
  height: 100%;
  margin-top: 100px;
}

.sidebar-mobile {
  display: none;
}

.dator-row-1 {
  margin-right: 10px;
}

.dator-row-3 {
  margin-right: 10px;
  margin-top: 30px;
}
.dator-row-4 {
  margin-top: 30px;
}

.row-cols-1 {
  margin-bottom: 30px;
  width: 100%;
  padding: 5px;

}

.row-cols-2 {
  margin-bottom: 30px;
  width: 100%;
}

.row-cols-3 {
  width: 100%;
}

.dator {
  height: 145px;
  img {
    width: 100px;
    height: 100px;
  } 
}

@media only screen and (max-width: 600px) {

  .row-cols-1 {
    float: none;
    width: 100%;
    padding: 10px;
  }
  .row-cols-2 {
    float: none;
    width: 100%;
  }
  #hidden {
    display: none;
  }
}
@media only screen and (max-width: 1200px) {
  .sidebar-mobile {
    display: block;
    width: 100%;
    height: 50px;
    overflow-y: hidden;
    background-color:white;

    .sidebar{
      height: 100%;
      background-color: #CBD7FB;
      overflow-y: hidden;

      a{
      color: #1E45A1;
      }
    }
  }

  .container {
    margin: 0%;
  }

  .dator {

    h3 {
      font: 15px;
      margin-top: 10px;
    }

  }
  .row-cols-1{
    width: 100%;
  }
  .row-cols-table {
    float: none;
    width: 100%;
    flex-direction: row;
  }

  .dator-row-1 {
    margin-right: 0px;
  }
}
@media only screen and (max-width: 2500px) {
  #Dags-fullscreen {
    overflow-y: auto;
    overflow-x: hidden;
  }
  .dator-row-3 {
  margin-top: 0px;
}
.dator-row-4 {
  margin-top: 0px;
}
}
</style>
