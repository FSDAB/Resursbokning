<template>
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
                <th scope="row">Fsdcount {{ booking !== undefined && booking[0] !== undefined ? booking[0].dator : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </th>
                <td> {{ booking !== undefined && booking[0] !== undefined ? booking[0].datumstart : '' }} </td>
                <td> {{ booking !== undefined && booking[0] !== undefined ? booking[0].datumslut : '' }} </td>
                <td> {{ booking !== undefined && booking[0] !== undefined ? booking[0].karnor : '' }} </td>
                <td>  <b-button @click="sune()"> Alternativ </b-button></td>
              </tr>
              <tr>
                <th scope="row">Fsdcount {{ booking !== undefined && booking[1] !== undefined ? booking[1].dator : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </th>
                <td> {{ booking !== undefined && booking[1] !== undefined ? booking[1].datumstart : '' }} </td>
                <td> {{ booking !== undefined && booking[1] !== undefined ? booking[1].datumslut : '' }} </td>
                <td> {{ booking !== undefined && booking[1] !== undefined ? booking[1].karnor : '' }} </td>
                <td>  <b-button @click="sune()"> Alternativ </b-button></td>
              </tr>
            </tbody>
          </table>
        </div>
</template>  

<script lang="ts">
import axios from 'axios';
import App from 'App.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Bookings extends Vue {
  booking: Bokning[];
  state: string;
  constructor() {
    super();
    this.booking = [];
    this.state = 'disabled';

  }
  
  data() {
    return {
      value: '',

    };
  }

  created() {
    axios.get('http://1.1.106.199:3000/bokning').then((response) => {
      this.booking = response.data as Bokning[];
      this.$forceUpdate(); 
    });
  }
  sune () {
      axios.get('http://1.1.106.199:3000/bokningar').then((response) => {
        this.booking = response.data as Bokning[];
        this.$forceUpdate();
    });
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
<style lang="sass">

</style>