<template>
  <div class="container col-md-12" style="background-color:#E6EFF6;">
     <div class="sidebar-mobile " >
      <b-button style="margin-top:5px; margin-right: 5px; float:right;" v-b-toggle.sidebar-backdrop>Meny</b-button>
      <b-sidebar
        id="sidebar-backdrop"
        title="Resursbokning"
        backdrop
        shadow
      >
        <b-link :to="{ name: 'hub' }">
          <img src="@/assets/fsd_logo.png">
        </b-link>
        <div class="sidebar py-2" >
          <ul class="nav flex-column">
            <li class="nav-item">
              <b-nav-item :to="{ name: 'hub' }"> Startsida </b-nav-item>
            </li>
            <li class="nav-item">
              <b-nav-item :to="{ name: 'dags' }">Dags</b-nav-item> 
            </li>
              <b-nav-item :to="{ name: 'month' }">Månadsöversikt</b-nav-item> 
            <li class="nav-item">
              <b-nav-item :to="{ name: 'bookings' }">Bokningar</b-nav-item> 
            </li>
            <li class="nav-item">
              <b-nav-item :to="{ name: 'mesher' }">Mesher</b-nav-item> 
            </li>
          </ul>
        </div>
      </b-sidebar>
    </div> 
    <!-- <div class="row">
      <div class="col align-self-end">
        <p>Du är inloggad som </p>
      </div>
    </div> -->
    <div class="row justify-content-between firstcontent" style="padding-top:20px;">
      <div class="col-md-6" id="Dags-fullscreen" style="background-color:#014B94; height:500px; border-radius: 40px;">
        <div class="row" id="Rubrik" style="margin-left: -15px;">
          <b-link :to="{ name: 'dags' }">
            <h2 style="color:#ffffff; margin-left:30px; " >Dagsöversikt</h2>
          </b-link> 
        </div>

          <div class="dator-row col-md-12">

            <div class="row">

              <div class="dator col-md-auto" v-for="comp in computer" :key="comp.nr">
                <h4>Dator {{ comp.nr }}</h4>
                <div class="dator-bild">
                  <b-link :to="{ name: 'count'+comp.nr }">
                    <img v-if="isBooked(comp)" src="@/assets/countpctaken.png" :id="'count'+comp.nr"/>
                    <img v-else src="@/assets/countpcfree.png" :id="'count'+comp.nr"/>
                  </b-link>
                  <b-popover :target="'count'+comp.nr" triggers="hover" placement="top">
                    <template v-slot:title>Count {{ comp.nr }} Specs</template>
                      Namn:<p> {{ comp.namn }} </p>
                      Antal kärnor:<p> {{ comp.karnor }} </p>
                      Processor<p> {{ comp.desc }} </p>      
                  </b-popover>
                </div>
              </div>

            </div>
          </div>
        </div>

      <div class="col-md-5" id="Month" >
        <div class="dator-row-1 row" id="Rubrik" >
            <b-link :to="{ name: 'month' }"> 
              <h2 style="color:#ffffff; margin-left:10px;">Månadsöversikt</h2> 
            </b-link> 
        </div>
         <!-- <date-range-picker :from="$route.query.from" :to="$route.query.to" :panel="$route.query.panel" @update="update"/> -->
          <div class="size-grid-standard col-md-12" >
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
              <b-container class="col-container" >
                <div class="row " style=" width:70%; float:left; padding-top:1%; margin-right:1%;">
                  <div class="col-md-9" style="">
                    <b-form-input v-model="name" placeholder="Skriv in namn för projektnamn"></b-form-input>
                    <label for="datepicker-start" :min="min" :max="max"
                      >Välj startdatum för bokning</label
                    >
                    <b-form-datepicker
                      placeholder="Välj startdatum för bokning"
                      id="datepicker-start"
                      v-model="valuestart"
                      :date-disabled-fn="dateDisabled"
                      :hide-header="true"
                      :value-as-date="false"
                      :min="min"
                      :max="max"
                    ></b-form-datepicker>
                    <label for="datepicker-end" :min="min" :max="max"
                      >Välj slutdatum för bokning</label
                    >
                    <b-form-datepicker
                      placeholder="Välj slutdatum för bokning"
                      id="datepicker-end"
                      v-model="valueend"
                      :date-disabled-fn="dateDisabled"
                      class="mb-2"
                      :hide-header="true"
                      :value-as-date="false"
                      :min="min"
                      :max="max"
                      :hidden="isBookingFree(valuestart,valueend,countpc)"
                    ></b-form-datepicker>
                    <p></p>
                    <b-button 
                    variant="outline-success"
                    @click="bookdate()"
                 
                    >
                      Boka Vald tid
                    </b-button> 
                    <div class="selects">        
                      <b-form-select v-model="fdsversion" :options="fdsoptions"></b-form-select>
                      <b-form-select v-model="foldercityselected" :options="foldercity"></b-form-select>
                      <b-form-select v-model="folderprojectselected" :options="folderproject"></b-form-select>
                    </div>
                  </div>
<!--                 <b-row >
                  <b-col sm="auto">
                    <label for="datepicker-end">Välj slutdatum för bokning</label>
                    <b-form-datepicker placeholder="Välj slutdatum för bokning" id="datepicker-end" v-model="valueend" class="mb-2"></b-form-datepicker>
                  </b-col>
                </b-row > -->
                  <div class="col-md-3" style="margin-top: -33px;" >
                    <b-calendar
                    width="300px"
                    v-model="valuestart[countpc]"
                    id="countCalendar"
                    locale="sv-Sv"
                    :date-info-fn="dateClass" 
                    :date-disabled-fn="dateDisabled"
                    :hide-header="true"
                    ></b-calendar>
                  </div>
                </div >
              </b-container>                    
<!--             Kalendrar för bokning kanske ska ha med     
                 <div class="calendar-start">
                    <b-col md="auto">
                      <b-calendar
                        v-model="valuestart[countpc]"
                        id="countCalendar-start"
                        locale="sv-Sv"
                        :date-info-fn="dateClass"
                      ></b-calendar>
                    </b-col>
                  </div>
                  <div class="calendar-end">
                    <b-col md="auto">
                      <b-calendar
                        v-model="valueend[countpc]"
                        id="countCalendar-end"
                        locale="sv-Sv"
                        :date-info-fn="dateClass"
                      ></b-calendar>
                    </b-col>
                  </div> 
              </b-row>-->
          </div> 
      </div>
    </div>

<!-- <button @click="removeCookie()">TEST</button> -->

    <div class="row-cols-table row" style="background-color:#D69996;   border-radius: 25px;">
        <div class="dator-row-1 row" id="Rubrik">
          <b-link :to="{ name: 'bookings' }">
            <h2 style="color:#ffffff; margin-left:20px;"> Mina Bokningar</h2>
          </b-link>         
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
              <tr v-for="mybooking in mybookings" :key="mybooking.id">
                <th scope="row">Fsdcount {{ mybooking.dator }} </th>
                <td> {{ removeTime(mybooking.datumstart) }} </td>
                <td> {{ removeTime(mybooking.datumslut) }} </td>
                <td> {{ mybooking.karnor }} </td>
                <td><b-button v-b-modal="'modal'+mybooking.id" > Alternativ </b-button></td>
                <b-modal :id="'modal'+mybooking.id">
                  <p>Fyll i beräkningsuppgifter</p>
                  <p v-if="bookingHasBerakning(mybooking)">{{ getBerakningFromBooking(mybooking) }}</p>
                  <p v-else>Saknar beräkning</p>
                  <div class="selects">
                  <b-form-select v-if="!bookingHasBerakning(mybooking)" v-model="modalfdsversion" :options="fdsoptions"></b-form-select>
                  <b-form-select v-if="!bookingHasBerakning(mybooking)" v-model="modalfoldercityselected" :options="foldercity"></b-form-select>
                  <b-form-select v-if="!bookingHasBerakning(mybooking)" v-model="modalfolderprojectselected" :options="folderproject"></b-form-select>
                  </div>
                  <div class="modalbuttons">
                  <button class="greenbutton" v-if="!bookingHasBerakning(mybooking)" @click="bokaberakningalt(mybooking.id,mybooking.dator)">Skicka in beräkning</button>
                  <button class="redbutton" @click="removeBooking(mybooking)">Ta bort bokning</button>
                  </div>
                </b-modal>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="row-cols-table row" style="background-color:#014B94; margin-top:10px; border-radius: 25px;">
      <div class="row" id="Rubrik" >
        <b-link :to="{ name: 'mesher' }">
          <h2 style="color:#ffffff; margin-left:20px;" >Mesher</h2>
        </b-link>
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
            <tr v-for="m in mesher" :key="m.dator">
              <th scope="row">FSDCOUNT {{ m.dator }}</th>
              <td>{{ computer[m.dator-1].karnor }}</td>
              <td>{{ multipleCountingsKarnor(m) }}</td>
              <td>{{ freeKarnorCount(m) }}</td>
              <td>
                <p>
                  {{ /*multipleCountings(m)*/ m.path }}
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
import Bookings from './Bookings.vue';

/* import Mesher from './Mesher.vue';
import Dags from './Dags.vue';
import Month from './Month.vue';   
import Bookings from './Bookings.vue';  */  

@Component({
  components: {
/*    Dags,
    Month,
    Bookings,
    Mesher, */

  }
})

export default class Hub extends Vue {
  computer: Datorer[];
  booking: Bokning[];
  counting: Berakningar[];
  currentcountings: Nuvarandeberakningar[];
  state: string;
  countpc: Number;
  valuestart: string;
  valueend: string;
  name: string;
  fdsversion: Number;
  foldercityselected: String;
  folderprojectselected: String;
  mybookings: Bokning[];
  modalfdsversion: Number;
  modalfoldercityselected: String;
  modalfolderprojectselected: String;
  mesher: Nuvarandeberakningar[];
  

  constructor() {
    super();
    this.computer = [];
    this.booking = [];
    this.counting = [];
    this.currentcountings = [];
    this.state = 'disabled';
    this.countpc = 1;
    this.valuestart = new Date().toLocaleDateString('sv-se');
    // this.valuestart = this.firstavaliable(new Date().toLocaleDateString('sv-se'),this.countpc).toString();
    // this.valueend = new Date(new Date().getTime() + 604800000).toLocaleDateString('sv-se');
    this.valueend = this.valuestart
    this.name = '';
    this.fdsversion = 0;
    this.foldercityselected = '';
    this.folderprojectselected = '';
    this.mybookings = [];
    this.modalfdsversion = 0;
    this.modalfoldercityselected = '';
    this.modalfolderprojectselected = '';
    this.mesher = [];
  }
  
  data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() - 2)
      minDate.setDate(15)
      
      const maxDate = new Date(today)
      maxDate.setMonth(maxDate.getMonth() + 4)
      maxDate.setDate(15)
      // let minabokningar = this.getmybookings();

      return {
      value: '',
      min:minDate,
      max:maxDate,
      fdsoptions:[
        { value:0, text:'Välj FDS version', disabled:true},
        { value:5.00, text:'5.00'},
        { value:6.53, text:'6.53'},
        { value:6.60, text:'6.60'}
      ],
      fdsversion:0,
      foldercity:[
        { value: null, text:'Välj stad', disabled:true},
        { value: 'Malmö', text:'Malmö'},
        { value: 'Göteborg', text: 'Göteborg'},
        { value: 'Helsingborg', text: 'Helsingborg'}
      ],
      foldercityselected:null,
      folderproject:[
        { value: null, text: 'Välj projekt',disabled:true},
        { value: 'Projekt1', text: 'Projekt 1'},
        { value: 'Projekt2', text: 'Projekt 2'}
      ],
      folderprojectselected:null,
      };
  }

  isValidDate(d) {​​
  return d instanceof Date && !isNaN(d);
  }​​
  // this.isValidDate(new Date(this.removeTime(x.datumstart))) &&

  dateDisabled(ymd:String,date:Date) {
      // let date = new Date();
      const weekday = date.getDay()
      const day = date.getDate()

      let blockeddates = this.getblockeddates(this.countpc)

      if(blockeddates.length === 0){
        return false
      }
      
      // console.log(Date.parse(date.toString())+ this.removeTime(date.toString()))
      // console.log(Date.parse(this.removeTime(blockeddates[5].datumstart)))
      // console.log(blockeddates.findIndex(x => Date.parse(this.removeTime(x.datumstart)) <= Date.parse(date.toString()) && Date.parse(this.removeTime(x.datumslut)) >= Date.parse(date.toString())))
      let s = ( blockeddates.find(x => date >= new Date(this.removeTime(x.datumstart)) && date <= new Date(this.removeTime(x.datumslut)))) === undefined
  
      return !s
      // Return `true` if the date should be disabled
      
  }

  created() {
    this.getApi();
    this.checkCookie();
  }

  mounted(){
    this.getmybookings();
    
  }

    getApi () {
      axios.get('http://1.1.106.199:3000/datorer').then((response) => {
        this.computer = response.data.datorer as Datorer[];
        // this.$forceUpdate();
       });
      axios.get('http://1.1.106.199:3000/bokningar').then((response) => {
        this.booking = response.data as Bokning[];
        // this.$forceUpdate();
        this.getmybookings();
        // alert(new Date(this.firstavaliable(new Date().toLocaleDateString('sv-se'),this.countpc)).toLocaleDateString('sv-se'))
        this.valuestart = new Date(this.firstavaliable(new Date().toLocaleDateString('sv-se'),this.countpc)).toLocaleDateString('sv-se');
    });
      axios.get('http://1.1.106.199:3000/berakningar').then((response) => {
        this.counting = response.data as Berakningar[];
        // this.$forceUpdate();
    }); 
      axios.get('http://1.1.106.199:3000/hamtanuvarandeberakningar').then((response) => {
        // console.log('RESPONSE')
        // console.log(response.data)
        this.currentcountings = response.data as Nuvarandeberakningar[];
        // this.$forceUpdate();
        this.getMesher();
    }); 
    
  } 

  bookdate() {
    // Boka skicka med namnet på Bokning
    let nybokning = new Bokning();
    let cookie = this.getCookie('username');
    let bokningsid = -1;
    nybokning.dator = this.countpc;
    nybokning.datumstart = this.valuestart;
    nybokning.datumslut = this.valueend;
    nybokning.name = cookie;
    this.mybookings.push(nybokning);
    this.$forceUpdate();

    // console.log(cookie)
    // Skicka "nybokning" till Databas V
    if(!this.bookDateValidation(new Date(nybokning.datumstart),new Date(nybokning.datumslut),nybokning.dator)){
    axios.post('http://1.1.106.199:3000/bokningar',{dator:nybokning.dator,datumstart: nybokning.datumstart,datumslut:nybokning.datumslut,name:nybokning.name,karnor:6}).then(function(response){
      console.log(response);
      bokningsid = Number(response);
    }).catch(function(error){
      console.log(error)
    }).then(()=>{
       if(this.fdsversion !== 0 && this.folderprojectselected && this.foldercityselected){
        this.bokaberakning(bokningsid,nybokning.dator);
      }
    });
    alert('Du har bokat dator ' + nybokning.dator + ' från ' + nybokning.datumstart + ' till ' + nybokning.datumslut + '.')
    } else{
      alert('Det finns redan en bokning mellan ' + nybokning.datumstart + ' och ' + nybokning.datumslut + '.')
    }
  }

  bookDateValidation(bookingstart:Date,bookingend:Date,computerID:Number){
    if(bookingstart < new Date(2019,1,1)){
      return true;
    }
    let desiredStart = bookingstart.toString();
    let desiredEnd = bookingend.toString();
    let bookedDates = this.getblockeddates(computerID);

    let bool = false;
    console.log(desiredStart)
    console.log(desiredEnd)
    console.log(bookedDates)
    for(let i = 0; i < bookedDates.length; i++){
        if(Date.parse(desiredStart) < Date.parse(bookedDates[i].datumstart) &&/* !(new Date(desiredStart) > new Date(bookedDates[i].datumslut)) && */ Date.parse(desiredEnd) > Date.parse(bookedDates[i].datumslut)){
        //  desiredStart < bokning < desiredEnd
        // console.log(i+ ' '+Date.parse(desiredStart) + '<' + Date.parse(bookedDates[i].datumstart) + ' ' + Date.parse(desiredEnd) + '>' + Date.parse(bookedDates[i].datumslut))
        
        bool = true
        console.log(bool)
      }
      // console.log(i + ' ' + desiredStart + '<' + bookedDates[i].datumstart + ' ' + desiredEnd + '>' + bookedDates[i].datumslut) 
      // console.log(i+ ' '+Date.parse(desiredStart) + '<' + Date.parse(bookedDates[i].datumstart) + ' ' + Date.parse(desiredEnd) + '>' + Date.parse(bookedDates[i].datumslut))
      // console.log(' ')
      // console.log(bool)
    }
    // if(bool == true){
    //   alert('Bokning överlappar ' + this.valuestart + ' - ' + this.valueend)
    //   this.valueend = this.valuestart;
    //   this.$forceUpdate();
    // }
    console.log(bool)
    return bool;
  }

  // Funktion som avänds för bokning
  bokaberakning(id:number,dator:Number){

      // skicka in sträng mapp till stad/projekt
      // val av FDS version
      // dator/nr
      let nyberakning = new Berakningar();
      nyberakning.cityfolder = this.foldercityselected;
      nyberakning.projectfolder = this.folderprojectselected;
      nyberakning.fds = this.fdsversion;
      nyberakning.bokningsid = id;
      nyberakning.namn = this.getCookie('username');
      nyberakning.nr = dator;
      console.log(nyberakning)
      this.counting.push(nyberakning)
      this.$forceUpdate();

      // Skicka in beräkningar
    axios.post('http://1.1.106.199:3000/berakningar',{nr: nyberakning.nr,fds: nyberakning.fds,cityfolder: nyberakning.cityfolder, projectfolder: nyberakning.projectfolder,name:nyberakning.namn,bokningsid: nyberakning.bokningsid,karnor:6}).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }

  // Funktion som används i modal
    bokaberakningalt(id:number,dator:Number){

      // skicka in sträng mapp till stad/projekt
      // val av FDS version
      // dator/nr
      let nyberakning = new Berakningar();
      nyberakning.cityfolder = this.modalfoldercityselected;
      nyberakning.projectfolder = this.modalfolderprojectselected;
      nyberakning.fds = this.modalfdsversion;
      nyberakning.bokningsid = id;
      nyberakning.namn = this.getCookie('username');
      nyberakning.nr = dator;
      console.log(nyberakning)
      this.counting.push(nyberakning);
      this.$forceUpdate();

      // Skicka in beräkningar
    axios.post('http://1.1.106.199:3000/berakningar',{nr: nyberakning.nr,fds: nyberakning.fds,cityfolder: nyberakning.cityfolder, projectfolder: nyberakning.projectfolder,name:nyberakning.namn,bokningsid: nyberakning.bokningsid,karnor:6}).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }

  // Tar bort tiden från datestring
  removeTime(string:String){
    let newstring = string.slice(0,10)
    return newstring
  }

  // Sätter Cookie Username
  setCookie(cname:string, cvalue:string, exdays:any) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // Hämtar Cookie Username
  getCookie(cname:string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // Kollar om cookie finns annars ber om nytt username
  checkCookie() {
    let user = this.getCookie("username");
    if (user != "") {
      alert("Välkommen " + user);
    } else {
      user = prompt("Skriv in ditt namn:", "");
      if (user != "" && user != null) {
        this.setCookie("username", user, 3650);
      }
    }
  }

  removeCookie(){
    this.setCookie("username","",3650);
  }

  // Funktion som hämtar mina bokningar
  getmybookings(){
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    
    let cookie = this.getCookie('username');
    let getbookings = this.booking.filter(d => d.name == cookie && new Date(d.datumslut) > today);
    
    this.mybookings = getbookings;

    return getbookings;
  }

  // Hämtar blockerade datum för dator ID
  getblockeddates(compID:Number){
    
    let bookings = this.booking.filter(d => d.dator == compID);
  
    return bookings;
  }


  isBooked(computer:any){

    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    let booked = false;

    let bookings = this.getblockeddates(computer.nr)

    for(let i = 0; i < bookings.length; i++){
      if(today >= new Date(bookings[i].datumstart) && today <= new Date(bookings[i].datumslut)){
        booked = true;
      }
    }
    return booked;
  }

  isBookingFree(bookingstart:Date,bookingend:Date,computerID:Number){
    if(bookingstart < new Date(2019,1,1)){
      return true;
    }
    let desiredStart = bookingstart.toString();
    let desiredEnd = bookingend.toString();
    let bookedDates = this.getblockeddates(computerID);

    let bool = false;

    for(let i = 0; i < bookedDates.length; i++){
      // if(new Date(bookedDates[i].datumstart) >= new Date(desiredStart) && new Date(desiredStart) <= new Date(bookedDates[i].datumslut) || new Date(desiredEnd) >= new Date(bookedDates[i].datumstart) && new Date(desiredEnd) <= new Date(bookedDates[i].datumslut)){
        if(Date.parse(desiredStart) < Date.parse(bookedDates[i].datumstart) &&/* !(new Date(desiredStart) > new Date(bookedDates[i].datumslut)) && */ Date.parse(desiredEnd) > Date.parse(bookedDates[i].datumslut)){
        //  desiredStart < bokning < desiredEnd
        // console.log(i+ ' '+Date.parse(desiredStart) + '<' + Date.parse(bookedDates[i].datumstart) + ' ' + Date.parse(desiredEnd) + '>' + Date.parse(bookedDates[i].datumslut))
        bool = true
        if(bool){
          console.log(bookedDates[i].id)
        }
      }
      // console.log(i+ ' '+desiredStart + '<' + this.removeTime(bookedDates[i].datumstart) + ' ' + desiredEnd + '>' + this.removeTime(bookedDates[i].datumslut))
      // console.log(' ')
    }
    if(bool == true){
      alert('Bokning överlappar ' + this.valuestart + ' - ' + this.valueend)
    }
    return bool;
  }

  firstavaliable(startdate:string,computerID:Number){
    let desiredStart = new Date(startdate);
    let bookedDates = this.getblockeddates(computerID);

    let adddays = 0;
    let loop = false;
    // console.log(desiredStart)
    // console.log(bookedDates)
    do{
      loop = false;
      try {
        for(let i = 0; i < bookedDates.length; i++){
  
          if(desiredStart >= new Date(bookedDates[i].datumstart) && desiredStart <= new Date(bookedDates[i].datumslut)){
          // const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*millisecondsconst firstDate = new Date(2008, 1, 12);

          // const diffDays = Date.parse(bookedDates[i].datumslut) - Date.parse(startdate.toString());
          // adddays = Math.round(Math.abs(diffDays  / oneDay));
          desiredStart = new Date(Date.parse(bookedDates[i].datumslut.toString()) + Date.parse(new Date(1970,0,2).toString()))
          loop = true;
          // alert(desiredStart + '  ' + bookedDates[i].datumslut)
          // alert(diffDays);
      }
    }
      } catch (error) {
        alert(error)
      }

    }while(loop)

    return desiredStart.toString();
  }

  getMesher(){
    // console.log('CURRENTCOUNTINGS')
    // console.log(this.currentcountings)
    let used = this.currentcountings.filter(d => d.usedkarnor != 0);
    // console.log('MESHER')
    // console.log(used)
    this.mesher = used.sort(function(a, b){return a.dator-b.dator});
    
    return used;
  }

  // Funktion för v-for mesher för att skriva ut båda pathsen på samma rad
  multipleCountings(mesherObj:Nuvarandeberakningar){
    let multipleCountings;
    let pathString = '';

    if(mesherObj.subnr > 0){
      // console.log(mesherObj.dator)
      multipleCountings = this.mesher.filter(d => d.dator == mesherObj.dator);
      // console.log(multipleCountings)
        multipleCountings.forEach(function(multipleCounting){
          let i = 0;
          pathString = pathString + (i+1) + ': ' + multipleCounting.path + ' / ';
        })
        // for(let i = 0; multipleCountings.length > 0; i++){
        //   console.log(multipleCountings[i].path)
        //   pathString = pathString + ' ' + i + ': ' + multipleCountings[i].path + '<br>';
        // } 
        
    } else{
      pathString = mesherObj.path.toString();
    }
    return pathString
  }

  // Funktion som lägger ihop använda kärnor från samma dator
  multipleCountingsKarnor(mesherObj:Nuvarandeberakningar){
    let multipleCountings;
    let usedkarnor = mesherObj.usedkarnor;

    if(mesherObj.subnr > 0){
      usedkarnor = 0;
      multipleCountings = this.mesher.filter(d => d.dator == mesherObj.dator);

      multipleCountings.forEach(function(multipleCounting){
        usedkarnor = usedkarnor + multipleCounting.usedkarnor;
      })

    }
    return usedkarnor
  }

  // Funktion som räknar ut lediga kärnor
  freeKarnorCount(mesherObj:Nuvarandeberakningar){
    let ledigakarnor = this.computer[mesherObj.dator-1].karnor
    let multipleCountings;
    let usedkarnor = 0;
   
    // if(mesherObj.subnr > 0){
     
      multipleCountings = this.mesher.filter(d => d.dator == mesherObj.dator);
      multipleCountings.forEach(function(multipleCounting){
        usedkarnor = usedkarnor + multipleCounting.usedkarnor
      })

    ledigakarnor = ledigakarnor - usedkarnor

    // } else if(mesherObj.subnr == 0){
    //   ledigakarnor = ledigakarnor - mesherObj.usedkarnor;
    // }
    return ledigakarnor
  }

  removeBooking(bookingObj:Bokning){
    console.log(bookingObj)
    let bokningsid = bookingObj.id;

    this.mybookings = this.mybookings.filter(obj => obj !== bookingObj);
    this.$forceUpdate();
    

      axios.post('http://1.1.106.199:3000/tabortbokning' ,{id:bokningsid})
      .then(response => {
        this.booking.splice(bokningsid, 1)
        this.$forceUpdate()
        console.log(this.booking);
      });
      alert('Bokning för dator: ' + bookingObj.dator + ' för perioden ' + this.removeTime(bookingObj.datumstart) + ' till ' + this.removeTime(bookingObj.datumslut) + ' är nu borttagen');

  }

  bookingHasBerakning(bookingObj:Bokning){
    let bool = false;
    let countings = this.counting
    // console.log(bookingObj.id)
    // console.log(countings)
    countings.forEach(function(counting){
      if(counting.bokningsid == bookingObj.id){
        // console.log(counting.bokningsid + ' == ' + bookingObj.id)
        bool = true
      }
    })
    return bool
  }

  getBerakningFromBooking(bookingObj:Bokning){
    let bokningsid = bookingObj.id;
    let countings = this.counting;
    let berakning;

    countings.forEach(function(counting){
      if(counting.bokningsid == bokningsid)
      berakning = counting;
    })

    let berakningString =  'Din beräkning är path: /' + berakning.cityfolder + '/' + berakning.projectfolder + ' FDS version: ' + berakning.fds;
    return berakningString;
  }

  continueBookingIfStillCounting(runningCounts:Nuvarandeberakningar[]){
    // Förläng bokning en dag om beräkning fortfarande körs;
    // if currentcounting.usedkarnor > 0 && bokning.datumslut < todaydate?
    // Hitta bokning
    let connectedBooking:Bokning;
    let bookings = this.booking
    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+ 1);
    
    runningCounts.forEach((runningCount)=>{
    // Kollar om beräkning är aktiv
    if(runningCount.usedkarnor > 0){

      bookings.forEach(function(thebooking){
      // Leta upp rätt bokning bokningsid eller path?
        if(runningCount.dator == thebooking.dator){

          connectedBooking = thebooking;
          
          if(new Date(connectedBooking.datumslut) < today){
          connectedBooking.datumstart = today.toString();
          connectedBooking.datumslut = tomorrow.toString();
          console.log(connectedBooking);
          // Uppdatera connectedbooking

          // hitta bokning som överlappar och förbered borttagning
          bookings.forEach((booking)=>{
            if(booking.dator == connectedBooking.dator){              
              if(new Date(booking.datumstart) < new Date(connectedBooking.datumslut) && booking.avbokad == 0){
                // axios avbokning -> 1
                axios.post('http://1.1.106.199:3000/bokningupdate' ,{id:booking.id})
                .then(response => {
                  // this.booking.splice(bokningsid, 1)
                  // this.$forceUpdate()
                  // console.log(this.booking);
                });
              }
            }
          })

        }
        }
        
      })
      
    }
    })
  } 

  // Funktion kollar om bokning har avbokats för cookie('name') och tar bort bokning från databas
  checkAvbokning(bokningsarray:Bokning[]){

    let user = this.getCookie('username');

    let myAvbokningar = bokningsarray.filter(d => d.name == user && d.avbokad == 1);

    if(myAvbokningar.length > 0){
      
      myAvbokningar.forEach((avbokning:Bokning)=>{
        
        // Axios delete
          axios.post('http://1.1.106.199:3000/tabortbokning' ,{id:avbokning.id})
          .then(response => {
            this.booking.splice(avbokning.id, 1)
            this.$forceUpdate()
            console.log(this.booking);
          });
          alert('Din bokning mellan ' + avbokning.datumstart + ' - ' + avbokning.datumslut + ' har avbokats.');
      })
    }
  }

  bokingAlt () {
    // tslint:disable-next-line:no-console
    console.log('Få en ruta lite snyggt med olika alternativ');
  }

  dateClass(ymd: string, date: Date ) {
    const day = date.getDate();
    return day >= 1 && day <= 31 || day === 24 ? 'table-info' : ''; // Lägg till input returnsen här istället för siffrorna
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
    this.$forceUpdate();
  }
}

class Datorer {
  namn: String;
  karnor: number;
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
  datumstart: string;
  datumslut: string;
  name: String;
  id: number;
  avbokad: number;

  constructor() {
    this.dator = 0;
    this.karnor = 0;
    this.datumstart = '';
    this.datumslut = '';
    this.name = '';
    this.id = 0;
    this.avbokad = 0;
  }
} 

class Berakningar {
  nr: Number;
  karnor: Number;
  berakning: String;
  berakningtxt: String;
  cityfolder: String;
  projectfolder: String;
  fds: Number;
  namn: String;
  bokningsid: number;

  constructor() {
      this.nr = 0;
      this.karnor = 0;
      this.berakning = '';
      this.berakningtxt = '';
      this.cityfolder = '';
      this.projectfolder = '';
      this.fds = 0;
      this.namn = '';
      this.bokningsid = 0;
  }
} 

class Nuvarandeberakningar {
  dator: number;
  subnr: Number;
  usedkarnor: number;
  path: String;
  bokningsid: number;

  constructor(){
    this.dator = 0;
    this.subnr = 0;
    this.usedkarnor = 0;
    this.path = '';
    this.bokningsid = 0;
  }
}
</script>

<style scoped lang="scss">

.firstcontent{
  margin-bottom: 10px;
}

.modalbuttons button{
  margin-right: 10px;
  margin-top:10px;
}

.redbutton {
	box-shadow: 0px 10px 14px -7px #d42222;
	background:linear-gradient(to bottom, #f53434 5%, #d60000 100%);
	background-color:#f53434;
	border-radius:5px;
	border:1px solid #e02d2d;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:6px 34px;
	text-decoration:none;
	text-shadow:0px 1px 0px #bf1313;
	&:hover {
	background:linear-gradient(to bottom, #d60000 5%, #f53434 100%);
	background-color:#d60000;
}
 &:active {
	position:relative;
	top:1px;
}
 }
      

.greenbutton{
  box-shadow: 0px 6px 14px -7px #3e7327;
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color:#77b55a;
	border-radius:5px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:7px 37px;
	text-decoration:none;
	text-shadow:0px 1px 0px #5b8a3c;
}

.greenbutton:hover {
	background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
	background-color:#72b352;
}

.greenbutton:active {
	position:relative;
	top:1px;
}

.selects select{
  margin-top:10px;
}

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
#Month {
  background-color:#014B94; 
  border-radius: 40px; 
  padding:20px; 
  margin-right: 0%;
}
.bokningar {
  width: 100%;
  height: 80%;
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
    #Month {
    overflow-y: auto;
    overflow-x: auto;
  }
  .dator-row-3 {
  margin-top: 0px;
  }
  .dator-row-4 {
    margin-top: 0px;
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
