<template>
<div class="col-md-12 container" id="Month" style="background-color:blue;">
  <!-- <date-range-picker :from="$route.query.from" :to="$route.query.to" :panel="$route.query.panel" @update="update"/> -->
  <div class="row-cols-1 row" style="border: 5px solid red ">

    <div class="col-md-auto" id="Month" style="border: 5px solid yellow ">
      <label class="control-label" for="fsdcountselector" >
       <h4>Count Dator 1 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar1"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 2 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 3 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 4 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 5 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 6 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 7 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 8 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 9 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div> 

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 10 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 11 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 12 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 13 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 114 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 15 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 16 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

    <div class="col-md-auto" id="Month" style="border: 5px solid green ">
      <label class="control-label" for="fsdcountselector" >
        <h4>Count Dator 17 </h4>
      </label>
      <b-row>
        <div class="calendar">
          <b-col md="auto">
            <b-calendar
            v-model="value[countpc]"
            id="countCalendar2"
            locale="sv-Sv"
            :date-info-fn="dateClass"
            ></b-calendar>
          </b-col>
        </div>
      </b-row>
    </div>             

  </div>
</div>
</template>

<script lang='ts'>
import axios from 'axios';
import App from 'App.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {

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
      value: [],
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

  dateClass(ymd: string, date: Date ) {
    const day = date.getDate();
    return day >= 10 && day <= 21 || day === 24 ? 'table-info' : '';
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
        console.log('count kalender 12');
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

</style>