<template>
  <div class="container col-md-12">
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
        <div class="row" id="Rubrik" style="margin-left: -15px;">
          <a href="@/Components/Dags.vue" style="color:black ">
            <h2 >Dagsöversikt</h2>
          </a>
        </div>
          <div class="dator-row row">
            <div class="dator-row-1 row">
              <div class="dator col-md-3">
                <h4>Dator 1</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count1" >
                  <img src="@/assets/countpcfree.png" id="count1"/>
                  </a>
                  <b-popover target="count1" triggers="hover" placement="top">
                    <template v-slot:title>Count 1 Specs</template>
                      Namn:<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                      Antal kärnor:<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].karnor : '' }} </p>
                      Processor<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].desc : '' }} </p>      
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 2</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count2" >
                  <img src="@/assets/countpcfree.png" id="count2" />
                  </a>
                  <b-popover target="count2" triggers="hover" placement="top">
                    <template v-slot:title>Count 2 Specs</template>
                      Namn:<p> {{ computer !== undefined && computer[1] !== undefined ? computer[1].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                      Antal kärnor:<p> {{ computer !== undefined && computer[1] !== undefined ? computer[1].karnor : '' }} </p>
                      Processor<p> {{ computer !== undefined && computer[1] !== undefined ? computer[1].desc : '' }} </p>                 
                    </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 3</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count3" >
                  <img src="@/assets/countpcfree.png" id="count3" />
                  </a>
                  <b-popover target="count3" triggers="hover" placement="top">
                    <template v-slot:title>Count 3 Specs</template>
                      Namn:<p> {{ computer !== undefined && computer[2] !== undefined ? computer[2].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                      Antal kärnor:<p> {{ computer !== undefined && computer[2] !== undefined ? computer[2].karnor : '' }} </p>
                      Processor<p> {{ computer !== undefined && computer[2] !== undefined ? computer[2].desc : '' }} </p> 
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 4</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count13" >
                  <img src="@/assets/countpcfree.png" id="count4" />
                  </a>
                  <b-popover target="count4" triggers="hover" placement="top">
                    <template v-slot:title>Count 4 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[3] !== undefined ? computer[3].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[3] !== undefined ? computer[3].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[3] !== undefined ? computer[3].desc : '' }} </p>  
                  </b-popover>
                </div>
              </div>

            </div>

            <div class="dator-row-2 row">
              <div class="dator col-md-3">
                <h4>Dator 5</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count5" >
                  <img src="@/assets/countpcfree.png" id="count5" />
                  </a>
                  <b-popover target="count5" triggers="hover" placement="top">
                  <template v-slot:title>Count 5 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[4] !== undefined ? computer[4].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[4] !== undefined ? computer[4].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[4] !== undefined ? computer[4].desc : '' }} </p>  
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 6</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count6" >
                  <img src="@/assets/countpcfree.png" id="count6" />
                  </a>
                  <b-popover target="count6" triggers="hover" placement="top">
                  <template v-slot:title>Count 6 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[5] !== undefined ? computer[5].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[5] !== undefined ? computer[5].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[5] !== undefined ? computer[5].desc : '' }} </p>  
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 7</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count7" >
                  <img src="@/assets/countpcfree.png" id="count7" />
                  </a>
                  <b-popover target="count7" triggers="hover" placement="top">
                    <template v-slot:title>Count 7 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[6] !== undefined ? computer[6].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[6] !== undefined ? computer[6].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[6] !== undefined ? computer[6].desc : '' }} </p>          
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 8</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count8" >
                  <img src="@/assets/countpcfree.png" id="count8" />
                  </a>
                  <b-popover target="count8" triggers="hover" placement="top">
                  <template v-slot:title>Count 8 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[7] !== undefined ? computer[7].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[7] !== undefined ? computer[7].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[7] !== undefined ? computer[7].desc : '' }} </p>  
                  </b-popover>
                </div>
              </div>

            </div>

            <div class="dator-row-3 row">

              <div class="dator col-md-3">
                <h4>Dator 9</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count9" >
                  <img src="@/assets/countpcfree.png" id="count9" />
                  </a>
                  <b-popover target="count9" triggers="hover" placement="top">
                  <template v-slot:title>Count 9 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[8] !== undefined ? computer[8].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[8] !== undefined ? computer[8].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[8] !== undefined ? computer[8].desc : '' }} </p>
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 10</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count10" >
                  <img src="@/assets/countpcfree.png" id="count10" />
                  </a>          
                  <b-popover target="count10" triggers="hover" placement="top">
                  <template v-slot:title>Count 10 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[9] !== undefined ? computer[9].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[9] !== undefined ? computer[9].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[9] !== undefined ? computer[9].desc : '' }} </p>
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 11</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count11" >
                  <img src="@/assets/countpcfree.png" id="count11" />
                  </a>
                  <b-popover target="count11" triggers="hover" placement="top">
                    <template v-slot:title>Count 11 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[10] !== undefined ? computer[10].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[10] !== undefined ? computer[10].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[10] !== undefined ? computer[10].desc : '' }} </p>              
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 12</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count12" >
                  <img src="@/assets/countpcfree.png" id="count12" />
                  </a>
                  <b-popover target="count12" triggers="hover" placement="top">
                    <template v-slot:title>Count 12 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[11] !== undefined ? computer[11].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[11] !== undefined ? computer[11].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[11] !== undefined ? computer[11].desc : '' }} </p>  
                  </b-popover>
                </div>
              </div>

            </div>

            <div class="dator-row-4 row">

              <div class="dator col-md-3" >
                <h4>Dator 13</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count13" >
                  <img src="@/assets/countpcfree.png" id="count13" />
                  </a>
                  <b-popover target="count13" triggers="hover" placement="top">
                  <template v-slot:title>Count 13 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[12] !== undefined ? computer[12].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[12] !== undefined ? computer[12].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[12] !== undefined ? computer[12].desc : '' }} </p>                  
                  </b-popover>
                </div>
              </div>
              
              <div class="dator col-md-3">
                <h4>Dator 14</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count14" >
                  <img src="@/assets/countpcfree.png" id="count14" />
                  </a>
                  <b-popover target="count14" triggers="hover" placement="top">
                  <template v-slot:title>Count 14 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[13] !== undefined ? computer[13].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[13] !== undefined ? computer[13].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[13] !== undefined ? computer[13].desc : '' }} </p>                  
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 15</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count15" >
                  <img src="@/assets/countpcfree.png" id="count15" />
                  </a>
                  <b-popover target="count15" triggers="hover" placement="top">
                  <template v-slot:title>Count 15 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[14] !== undefined ? computer[14].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[14] !== undefined ? computer[14].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[14] !== undefined ? computer[14].desc : '' }} </p>                  
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-3">
                <h4>Dator 16</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count16" >
                  <img src="@/assets/countpcfree.png" id="count16" />
                  </a>
                  <b-popover target="count16" triggers="hover" placement="top">
                  <template v-slot:title>Count 16 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[15] !== undefined ? computer[15].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[15] !== undefined ? computer[15].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[15] !== undefined ? computer[15].desc : '' }} </p>                  
                  </b-popover>
                </div>
              </div>
            </div>
              <div class="dator col-md-3" style="margin-left:-15px;">
                <h4>Dator 17</h4>
                <div class="dator-bild">
                  <a href="@/Components/count_datorer/Count17" >
                  <img src="@/assets/countpcfree.png" id="count17" />
                  </a>
                  <b-popover target="count17" triggers="hover" placement="top">
                  <template v-slot:title>Count 17 Specs</template>
                    Namn:<p> {{ computer !== undefined && computer[16] !== undefined ? computer[16].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                    Antal kärnor:<p> {{ computer !== undefined && computer[16] !== undefined ? computer[16].karnor : '' }} </p>
                    Processor<p> {{ computer !== undefined && computer[16] !== undefined ? computer[16].desc : '' }} </p>                  
                  </b-popover>
                </div>
              </div>
          </div>
        </div>

      <div class="size-grid-standard col-md-5" id="Month" style="background-color:blue;">
        <div class="dator-row-1 row" id="Rubrik" >
          <a href="@/Components/Month.vue" style="color:black">
            <h2>Månadsöversikt</h2> 
          </a>
        </div>
          <div class="size-grid-standard col-md-5" id="Month">
            <label class="control-label" for="fsdcountselector" >
              <h4>Count Dator </h4>
            </label>
              <b-form-select
                v-model="countpc"
                class="form-control"
                id="fsdcountselector"
                @change="countCalendarSelect()"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option> 
              </b-form-select>
                <b-row>
                  <div class="calendar">
                    <b-col md="auto">
                      <b-calendar
                        v-model="value"
                        id="countCalendar1"
                        locale="sv-Sv"
                      ></b-calendar>
                    </b-col>
                  </div>
              </b-row>
          </div>
      </div>
    </div>


    <div class="row-cols-table row" style="background-color:yellow; ">
        <div class="dator-row-1 row" id="Rubrik">
          <a href="@/Components/Bookings.vue" style="color:black">
           <h2>Mina Bokningar</h2>
          </a>
        </div>
      <div class="size-grid-auto col-md-12" style="overflow-y:auto;">
        <div class="table-responsive">
          <table class="bokningar table-striped">
            <thead>
              <tr>
                <th scope="col">Dator</th>
                <th scope="col">Start</th>
                <th scope="col">Slut</th>
                <th scope="col">Objekt</th>
                <th scope="col">Alternativ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Fsdcount {{ booking !== undefined && booking[0] !== undefined ? booking[0].dator : 'Ett fel har inträffat ladda om sidan' }} </th>
                <td> {{ booking !== undefined && booking[0] !== undefined ? booking[0].datumstart : '' }} </td>
                <td> {{ booking !== undefined && booking[0] !== undefined ? booking[0].datumslut : '' }} </td>
                <td> {{ booking !== undefined && booking[0] !== undefined ? booking[0].karnor : '' }} </td>
                <td>  <b-button @click="bokingAlt()"> Alternativ </b-button></td>
              </tr>
              <tr>
                <th scope="row">Fsdcount {{ booking !== undefined && booking[1] !== undefined ? booking[1].dator : 'Ett fel har inträffat ladda om sidan' }} </th>
                <td> {{ booking !== undefined && booking[1] !== undefined ? booking[1].datumstart : '' }} </td>
                <td> {{ booking !== undefined && booking[1] !== undefined ? booking[1].datumslut : '' }} </td>
                <td> {{ booking !== undefined && booking[1] !== undefined ? booking[1].karnor : '' }} </td>
                <td>  <b-button @click="bokingAlt()"> Alternativ </b-button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row-cols-table row" style="background-color:green; margin-top:10px;">
      <div class="row" id="Rubrik" >
        <a href="@/Components/Mesher.vue" style="color:black">
         <h2>Mesher</h2>
        </a> 
      </div>
       <div class="size-grid-auto col-md-12" style="overflow-y:auto;">
        <table class="mesher table-striped">
          <thead>
            <tr>
              <th scope="col">Beräkningsdator</th>
              <th scope="col">Tillgängliga kärnor</th>
              <th scope="col">Använda Kärnor</th>
              <th scope="col">Lediga Kärnor</th>
              <th scope="col">
                Multipla beräkningar ryms i samma kolumn.
                (Röd=Använd),(Grön=Ledig)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">FSDCOUNT 3</th>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>
                <p>
                  /Goteborg/Jonatan/2318085LisebergJP1/Scenario1_1_7/Scenario1_1_7.fds
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">FSDCOUNT 4</th>
              <td>6</td>
              <td>12</td>
              <td>-6</td>
              <td>
                <p>
                  /Stockholm/2919-001_Martinservera/MoS_Kylt_Scenario_2b_2MW/MoS_Kylt_Scenario_2b_2MW.fds
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">FSDCOUNT 5</th>
              <td>12</td>
              <td>10</td>
              <td>2</td>
              <td>
                <p>
                  /Goteborg/Jonatan/2318085LisebergJP1/Scenario1_1_6/Scenario1_1_6.fds
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  </div>
</template>

<script lang='ts'>
import axios from 'axios';
import App from 'App.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
/* import Mesher from './Mesher.vue';
import Dags from './Dags.vue';
import Month from './Month.vue';   
import Bookings from './Bookings.vue';  */  

@Component({
  components: {
/*     Dags,
    Month,  
    Bookings,
    Mesher */
  }
})

export default class Hub extends Vue {
  computer: Datorer[];
  booking: Bokning[];
  counting: Berakningar[];
  state: string;
  countpc: Number;
  constructor() {
    super();
    this.computer = [];
    this.booking = [];
    this.counting = [];
    this.state = 'disabled';
    this.countpc = 0;
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
        this.$forceUpdate();
       });
      axios.get('http://1.1.106.199:3000/bokningar').then((response) => {
        this.booking = response.data as Bokning[];
        this.$forceUpdate();
    });
      axios.get('http://1.1.106.199:3000/berakningar').then((response) => {
        this.counting = response.data as Berakningar[];
        this.$forceUpdate();
    });    
  }

  bokingAlt () {
    // tslint:disable-next-line:no-console
    console.log('Få en ruta lite snyggt med olika alternativ');
  }

  countCalendarSelect () {
    const countCalendar: Number = parseInt(this.countpc.toString(), 10);
    switch (countCalendar ) {
      case 1: {
        // tslint:disable-next-line:no-console 
        console.log('count kalender 1');
        break;
      }
      case 2: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 2');
        break;
      }
      case 3: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 3');
        break;
      }
      case 4: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 4');
        break;
      }
      case 5: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 5');
        break;
      }
      case 6: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 6');
        break;
      }
      case 7: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 7');
        break;
      }
      case 8: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 8');
        break;
      }  
      case 9: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 9');
        break;
      }
      case 10: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 10');
        break;
      }
      case 11: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 11');
        break;
      }
      case 12: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 13');
        break;
      }
      case 13: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 13');
        break;
      }
      case 14: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 14');
        break;
      }
      case 15: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 15');
        break;
      }
      case 16: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 16');
        break;
      }
      case 17: {
        // tslint:disable-next-line:no-console
        console.log('count kalender 17');
        break;
      }                                                          
      default: {
        // tslint:disable-next-line:no-console
        console.log('Countpc = ' + this.countpc + ' och countCalendar = ' + countCalendar);
        break;
      }
    }
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

class Berakningar {
  nr: Number;
  karnor: Number;
  berakning: String;
  berakningtxt: String;

  constructor() {
      this.nr = 0;
      this.karnor = 0;
      this.berakning = '';
      this.berakningtxt = '';
  }
} 
</script>

<style scoped lang="scss">
#fsdcountselector {
  width: 100px;
  position: absolute;
  margin-left: 10px;
  margin-bottom: 10px;
}
#Dags-fullscreen {
  overflow: hidden;
 // margin-left:20px ;
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
