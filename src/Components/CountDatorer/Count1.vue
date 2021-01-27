<template>
  <div
    class="container col-md-12"
    style=" height:100%; border: 5px solid green; "
  >
    <div class="row" style="">
      <div class="size-grid-standard col-md-12" style=" border: 5px solid blue; ">
        <div class="size-grid-standard col-md-6" id="Month" >
          <div class="dator-row-1 row" id="Rubrik">
            <b-link :to="{ name: 'month' }">
              <h2 style="color:white; ">Månadsöversikt</h2>
            </b-link>
          </div>
          <div class="row ">
            <div class="col-md-auto">
              <label for="datepicker-start">Välj startdatum för bokning</label>
              <b-form-datepicker
                placeholder="Välj startdatum för bokning"
                id="datepicker-start"
                v-model="valuestart"
                class="mb-2"
                :hide-header="true"
                :min="minstart"
                :max="maxstart"
              ></b-form-datepicker>
              <label for="datepicker-end" :min="minslut" :max="maxslut"
                >Välj slutdatum för bokning</label
              >
              <b-form-datepicker
                placeholder="Välj slutdatum för bokning"
                id="datepicker-end"
                v-model="valueend"
                c
                lass="mb-2"
                :hide-header="true"
                :min="minend"
                :max="maxend"
              ></b-form-datepicker>
              <p></p>
              <b-button
                variant="outline-success"
                @click="bookdate()"
                v-b-modal="'booking-modal'"
              >
                Boka Vald tid
              </b-button>
              <b-modal id="booking-modal">
                <p>Din bokning bekräftad</p>
                <p>Du har bokat Count Dator {{ countpc }} mellan den</p>
                <p>{{ valuestart }} och {{ valueend }}</p>
              </b-modal>
              <p></p>
              <p>start: '{{ valuestart }}'</p>
              <p>slut: '{{ valueend }}'</p>
              <p></p>
            </div>
            <div class="col-md-auto">
              <b-calendar
              width="600px"
                v-model="valuestart[countpc]"
                id="countCalendar"
                locale="sv-Sv"
                :date-info-fn="dateClass"
                :hide-header="true"
              ></b-calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import axios from 'axios';
import App from 'App.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {

  }
})

export default class Count1 extends Vue {
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
    this.countpc = 1;
  }
    data() {
    const now = new Date();
    const tmp = new Date().setDate(0);
    const tmp2 = new Date(tmp).setDate(1);
    const tmp3 = new Date(tmp2); 
      
    return {
        context: null,
        countpc: '1',
        start: 0,
        valuestart: tmp3 ,
        valueend: new Date(now.setDate(0) ), 
   
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
    dateClass(ymd: string, date: Date ) {
    const day = date.getDate();
    return day >= 10 && day <= 21 || day === 24 ? 'table-info' : ''; // Lägg till input returnsen här istället för siffrorna
  }
    bookdate() {
    // Boka
  }

  bokingAlt () {
    // tslint:disable-next-line:no-console
    console.log('Få en ruta lite snyggt med olika alternativ');
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


#Rubrik {
  margin-left: 2px;
  margin-bottom: 2px;
}

#Month {
  background-color:#014B94; 
  border-radius: 40px; 
  padding:20px;

}

.calendar-start {
  padding: 20px;
  margin-left: 20px;
  float: right;
}
.calendar-end {
  padding: 20px;
  margin-left: 300px;
  margin-top: -404px;

}
.container {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}


@media only screen and (max-width: 1200px) {


  .container {
    margin: 0%;
  }

}
@media only screen and (max-width: 2500px) {
  #Dags-fullscreen {
    overflow-y: auto;
    overflow-x: hidden;
  }
    #Month {
    overflow-y: auto;
    overflow-x: auto;

  }
  .calendar-start {
  padding: 20px;
  margin-left: 20px;
  float: right;
  margin-left: 0px;
  margin-top: 0px;
}

}
</style>

