<template>
  <div class="container col-md-12" style="background-color:white;">
    <div class="sidebar-mobile " >
      <b-button style="background-color:#171717; margin-top:5px; margin-left: 3px;" v-b-toggle.sidebar-backdrop>Meny</b-button>
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
              <a class="nav-link active" href="#">Startsida</a>
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

    <div class="row-cols-1 row">
      <div class="size-grid-standard col-md-6" id="Dags-fullscreen">
        <div class="dator-row row">
          <div class="dator-row row" id="Rubrik">
            <h2>Dagsöversikt</h2>
          </div>
          <div class="dator-row-1 row">
            <div class="dator col-md-3">
              <h4>Dator 1</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 2</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 3</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 4</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
          </div>

          <div class="dator-row-2 row">
            <div class="dator col-md-3">
              <h4>Dator 5</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 6</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 7</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 8</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
          </div>

          <div class="dator-row-3 row">
            <div class="dator col-md-3">
              <h4>Dator 9</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 10</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 11</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 12</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
          </div>

          <div class="dator-row-4 row">
            <div class="dator col-md-3">
              <h4>Dator 13</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 14</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 15</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
            <div class="dator col-md-3">
              <h4>Dator 16</h4>
              <div class="dator-bild">
                <img src="@/assets/countpc.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="size-grid-standard col-md-5" id="Month">
        <div class="dator-row-1 row" id="Rubrik">
          <h2>Månadsöversikt</h2>
        </div>
        <label class="control-label" for="fsdcountselector"
          ><h4>Count Dator {{ fsdcountselector }}</h4></label
        >
        <b-form-select
          v-model="countpc"
          :options="options"
          class="form-control"
          id="fsdcountselector"
          @change="updateCalender"
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
                @context="onContext"
                locale="en-US"
              ></b-calendar>
            </b-col>
          </div>
        </b-row>
      </div>
    </div>

    <div class="row-cols-table row">
      <div class="size-grid-auto col-md-12">
        <div class="dator-row-1 row" id="Rubrik">
          <h2>Mina Bokningar</h2>
        </div>
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
                <th scope="row">FSDCOUNT 3</th>
                <td>2016</td>
                <td>1014</td>
                <td>3122</td>
                <td><b-button> Alternativ </b-button></td>
              </tr>
              <tr>
                <th scope="row">FSDCOUNT 13</th>
                <td>2016</td>
                <td>1014</td>
                <td>3122</td>
                <td><b-button> Alternativ </b-button></td>
              </tr>
              <tr>
                <th scope="row">FSDCOUNT 7</th>
                <td>2016</td>
                <td>1014</td>
                <td>3122</td>
                <td><b-button> Alternativ </b-button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row-cols-table row">
      <div class="size-grid-auto col-md-12" style="overflow-y:auto;">
        <h2>Mesher</h2>
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
import Dags from './Dags.vue'; */

@Component({
  components: {
    /*     Mesher,
    Dags */
  },
})
export default class Hub extends Vue {
  msg: Datorer[];
  state: string;
  constructor() {
    super();
    this.msg = [];
    this.state = 'disabled';
  }

  data() {
    return {
      value: '',
      context: null,
      countpc: '1'
    };
  }

  created() {
    axios.get('http://1.1.106.199:3000/datorer').then((response) => {
      this.msg = response.data as Datorer[];
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
</script>

<style scoped lang="scss">
#fsdcountselector {
  width: 100px;
  margin-left: 10px;
  margin-bottom: 10px;
}
#Dags-fullscreen {
  overflow: hidden;
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
  .dator-bild {
    float: left;
  }
  .dator-text {
    margin-left: 120px;
  }
}

@media only screen and (max-width: 600px) {

  .row-cols-1 {
    float: none;
    width: 100%;
    padding: 10px;
    flex-direction: column;
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
    background-color: #171717;

    .sidebar{
      height: 100%;
      background-color: #171717;
      overflow-y: hidden;

      a{
      color: lightgray;
      }
    }
  }

  .container {
    margin: 0%;
  }
  .dator {

    img {
      width: 100%;
      height: 100%;
      margin-left: 10px;
    }
    h3 {
      font: 15px;
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
