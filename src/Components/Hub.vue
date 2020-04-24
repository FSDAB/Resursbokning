<template>
<div class=" container col-md-12">
  <div class="sidebar-mobile">
  <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      backdrop
      shadow
    >
      <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      <div class="px-3 py-2">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">Startsida</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Dagsöversikt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Månadsöversikt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Bokningar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="src\Components\Mesher.vue">Mesher</a>
          </li>
        </ul>
      </div>
    </b-sidebar>
  </div>

  <div class="row-cols-1 row ">
    <div class="size-grid-standard col-md-4" id="Dags" style="border: 2px solid black;">
     <h2> Dagsöversikt </h2>
     <p></p>
      <div class="dator-row-1 row">
        <div class="dator col-md-4">
        Dator 1
        </div>
        <div class="dator col-md-4">
        Dator 2
        </div>
        <div class="dator col-md-4">
        Dator 3
        </div>
      </div>

      <div class="dator-row-2 row">
        <div class="dator col-md-4">
        Dator 4
        </div>
        <div class="dator col-md-4">
        Dator 5
        </div>
        <div class="dator col-md-4">
        Dator 6
        </div>
      </div>

      <div class="dator-row-3 row">
        <div class="dator col-md-4">
        Dator 7
        </div>
        <div class="dator col-md-4">
        Dator 8
        </div>
        <div class="dator col-md-4">
        Dator 9
        </div>
      </div>
    </div>

    <div class=" size-grid-standard col-md-4" id="Month" style="border: 2px solid blue;">
      <h2> Månadsöversikt</h2>
      <p></p>
      <b-row>
          <b-col md="auto">
            <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
          </b-col>
          <b-col>
            <p>Value: <b>'{{ value }}'</b></p>
            <p class="mb-0">Context:</p>
            <pre class="small">{{ context }}</pre>
          </b-col>
        </b-row>
    </div>

      <div class="size-grid-standard col-md-4" id="Bokningar" style="border: 2px solid blue;">
      Bokningar
    </div>

  </div>

  <div class="row-cols-2 row ">
    <div class="size-grid-standard col-md-12" id="Mesher" style="border: 2px solid red;">
      <h2> Mesher </h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Beräkningsdator</th>
            <th scope="col">Tillgängliga kärnor</th>
            <th scope="col">Använda Kärnor</th>
            <th scope="col">Lediga Kärnor	</th>
            <th scope="col">Multipla beräkningar ryms i samma kolumn. (Röd=Använd),(Grön=Ledig) </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">FSDCOUNT  3	</th>
            <td>6</td>
            <td>4</td>
            <td>2</td>
            <td><p> /Goteborg/Jonatan/2318085LisebergJP1/Scenario1_1_7/Scenario1_1_7.fds </p> </td>
          </tr>
          <tr>
            <th scope="row">FSDCOUNT  4</th>
            <td>6</td>
            <td>12</td>
            <td>-6</td>
            <td><p> /Stockholm/2919-001_Martinservera/MoS_Kylt_Scenario_2b_2MW/MoS_Kylt_Scenario_2b_2MW.fds </p> </td>
          </tr>
          <tr>
            <th scope="row">FSDCOUNT  5</th>
            <td>12</td>
            <td>10</td>
            <td>2</td>
            <td><p> /Goteborg/Jonatan/2318085LisebergJP1/Scenario1_1_6/Scenario1_1_6.fds </p> </td>
          </tr>
        </tbody>
      </table>    
    </div>
  </div>
</div>
</template>

<script lang="ts">
import axios from 'axios';
import App from 'App.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Mesher from '@\Components\Mesher.vue';
import Dags from '@\Components\Dags.vue';

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

    };
  }


disabled() {
  return this.state === 'disabled'
}
readonly() {
  return this.state === 'readonly'
}

  created() {
    axios.get('http://1.1.106.199:3000/datorer')
    .then(response => {
      this.msg = response.data as Datorer[];
      this.$forceUpdate();
    });
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 85%;
  border: 2px solid cyan;
  margin-top: 100px;
}

.sidebar-mobile {
  display:none
}
.row-cols-2 {
margin-top:30px ;
}
.dator {
    border: 2px solid orange;
    height: 145px;

}
#Mesher {
  padding-left: 20px;
  padding-right: 20px;
  padding-top:10px ;
  td {
    p {
      color: red;
    }
  }
}

@media only screen and (max-width: 600px) {
.sidebar-mobile {
  display:block;
}
.box-1 {
  width: 500px;
  margin-top:1%;
  float: left;
  position: relative;
}
.box-2 {
  width: 500px;
  margin-top:1%;
  float:left;
  position: relative;

}
.row-cols-1 {
  float: none;
  width: 100%;  
  flex-direction: column;
}
.row-cols-2 {
  float: none;
  width: 100%;  
  flex-direction: column;
}
}
@media only screen and (max-width: 900px) {
.sidebar-mobile {
  display:block;
}
.container {
  padding: 0%;
  margin: 0%;
}
}
</style>
