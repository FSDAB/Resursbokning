<template>
  <div class="container col-md-12" style="background-color:#E6EFF6;">    
    <div class="row">
      <div class="col login">
        <p>Du är inloggad som, {{ printCookie() }}. </p>
        <button class="redbutton" @click="removeCookie()">Logga ut</button>
      </div>
    </div>
    <div class="row justify-content-between firstcontent" style="padding-top:20px;">
      <div class="col-md-5" id="Dags-fullscreen" style="background-color:#014B94; border-radius: 40px;">
        <div class="row" id="Rubrik" style="margin-left: -15px;">
            <h2 style="color:#ffffff; margin-left:30px; " >Datorer</h2>
        </div>

          <div class="dator-row col-md-12">

            <div class="row">

              <div class="dator col-md-auto" v-for="comp in computer" :key="comp.nr">
                <h4>Dator {{ comp.nr }}</h4>
                <div class="dator-bild" @click="changeCompFromGrid(comp.nr)">
                    <img v-if="isBooked(comp)" src="@/assets/countpctaken.png" :id="'count'+comp.nr"/>
                    <img v-else src="@/assets/countpcfree.png" :id="'count'+comp.nr"/>
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

      <div class="col-md-6" id="Month" >
        <div class="dator-row-1 row" id="Rubrik" >
              <h2 style="color:#ffffff; margin-left:10px;">Bokning</h2> 
        </div>
          <div class="size-grid-standard col-md-12" >
            <form id="sendfile" method='post' action="http://1.1.106.199:3000/upload" enctype="multipart/form-data">
            <label class="control-label" for="fsdcountselector" >
              <h4>Dator</h4>
            </label>
            
              <b-form-select
                v-model="countpc"
                class="form-control"
                id="fsdcountselector"
                @change="countCalendarSelect()"
                name="dator"
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
                      name="datumstart"
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
                      name="datumslut"
                    ></b-form-datepicker>
                    <p></p>
                    <div class="selects">
                    
                      <p>Lägg till beräkning (valfritt)</p>
                      <label for="karnor">Kärnor:</label>
                      <b-form-input v-model="mesherkarnor" placeholder="Skriv in antal kärnor" name="karnor"></b-form-input>      
                      <b-form-select v-model="fdsversion" :options="fdsoptions" name="fdsversion"></b-form-select>
                      <b-form-select v-model="foldercityselected" :options="foldercity" @change="getProjectFolders()" name="cityfolder"></b-form-select>
                      <b-form-select v-if="foldercityselected != null" v-model="folderprojectselected" :options="thecityfolders" @change="getFoldersInsideProject()" name="projectfolder"></b-form-select>
                      <b-form-select v-if="folderprojectselected != null && foldercityselected != null" v-model="thesecondprojectfolderselected" :options="thesecondprojectfolder" name="secondprojectfolder"></b-form-select>
                      <input type="hidden" :value="printCookie()" name="name">
                      <input type="hidden" :value="this.bokningsid" name="bokningsid">
                      <input type='file' name='fileUploaded'>
                      <b-button type='submit' class="greenbutton">Skicka in</b-button>
                    </div>
                    
                  </div>

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
                    <div class="createfolder" style="width:300px">
                      <label for="newprojectfoldername">Ny projektmapp</label> 
                      <b-form-input v-model="newprojectfoldername" placeholder="Skriv in namn för ny mapp"></b-form-input>
                      <b-button class="mappknapp" variant="outline-success" @click="skapaMappTillStad(foldercityselected, newprojectfoldername)">Skapa mapp</b-button>
                      <label for="newprojectinprojectfolder">Nytt projekt i projektmapp</label>
                      <b-form-input v-model="newprojectinprojectfolder" placeholder="Skriv in namn för ny mapp"></b-form-input>
                      <b-button class="mappknapp" variant="outline-success" @click="skapaMappTillProjekt(foldercityselected,folderprojectselected,newprojectinprojectfolder)">Skapa mapp</b-button>
                    </div>
                  </div>
                </div >
              </b-container>    
              </form>                
          </div> 
      </div>
    </div>

    <div class="row-cols-table row" style="background-color:#D69996;   border-radius: 25px;">
        <div class="dator-row-1 row" id="Rubrik">
            <h2 style="color:#ffffff; margin-left:20px;"> Mina Bokningar</h2>
        </div>
      <div class="size-grid-auto col-md-12" style="overflow-y:auto;">
        <div class="table-responsive">
          <table class="bokningar table-striped">
            <thead>
              <tr>
                <th scope="col">Dator</th>
                <th scope="col">Start</th>
                <th scope="col">Slut</th>              
                <th scope="col">Alternativ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="mybooking in mybookings" :key="mybooking.id">
                <th scope="row">Fsdcount {{ mybooking.dator }} </th>
                <td> {{ removeTime(mybooking.datumstart) }} </td>
                <td> {{ removeTime(mybooking.datumslut) }} </td>
                <td><b-button v-b-modal="'modal'+mybooking.id"> Alternativ </b-button></td>
                <b-modal :id="'modal'+mybooking.id">
                  <p>Fyll i beräkningsuppgifter</p>
                  <p v-if="bookingHasBerakning(mybooking)">{{ getBerakningFromBooking(mybooking) }}</p>
                  <form method='post' action="http://1.1.106.199:3000/uploadcount" enctype="multipart/form-data">
                  <div class="selects">
                  <label for="karnor">Kärnor:</label>
                  <b-form-input v-if="!bookingHasBerakning(mybooking)" v-model="mesherkarnormodal" placeholder="Skriv in antal kärnor" name="karnor"></b-form-input>
                  <b-form-select v-if="!bookingHasBerakning(mybooking)" v-model="modalfdsversion" :options="fdsoptions" name="fdsversion"></b-form-select>
                  <b-form-select v-if="!bookingHasBerakning(mybooking)" v-model="modalfoldercityselected" :options="foldercity" @change="getProjectFoldersmodal()" name="cityfolder"></b-form-select>
                  <b-form-select v-if="!bookingHasBerakning(mybooking)" v-model="modalfolderprojectselected" :options="thecityfoldersmodal" @change="getFoldersInsideProjectModal()" name="projectfolder"></b-form-select>
                  <b-form-select v-if="!bookingHasBerakning(mybooking)" v-model="modalthesecondprojectfolderselected" :options="thesecondprojectfoldermodal" name="secondprojectfolder"></b-form-select>
                  </div>
                    <div class="createfolder" style="width:300px" v-if="!bookingHasBerakning(mybooking)">
                      <label for="modalnewprojectfoldername">Ny projektmapp</label> 
                      <b-form-input v-model="modalnewprojectfoldername" placeholder="Skriv in namn för ny mapp"></b-form-input>
                      <b-button class="mappknapp" variant="outline-success" @click="skapaMappTillStad(modalfoldercityselected, modalnewprojectfoldername)">Skapa mapp</b-button>
                      <label for="modalnewprojectinprojectfolder">Nytt projekt i projektmapp</label>
                      <b-form-input v-model="modalnewprojectinprojectfolder" placeholder="Skriv in namn för ny mapp"></b-form-input>
                      <b-button class="mappknapp" variant="outline-success" @click="skapaMappTillProjekt(modalfoldercityselected,modalfolderprojectselected,modalnewprojectinprojectfolder)">Skapa mapp</b-button>
                    </div>
                      <input type="hidden" :value="printCookie()" name="name">
                      <input type="hidden" :value="mybooking.id" name="bokningsid">
                      <input type="hidden" :value="mybooking.dator" name="dator">
                      <input type='file' name='fileUploaded'>
                      <input type='submit' class="greenbutton" value="Skicka in beräkning" v-if="!bookingHasBerakning(mybooking)">
                      </form>
                  <div class="modalbuttons">
                  <button class="redbutton" @click="removeBooking(mybooking)">Ta bort bokning</button>
                  <button class="redbutton" v-if="bookingHasBerakning(mybooking)" @click="removeBerakning(mybooking)">Ta bort beräkning</button>
                  <!-- Hämta beräkningsid -->
                  <button class="greenbutton" v-if="bookingHasBerakning(mybooking)" @click="sendToRunjobs(getBerakningIDFromBooking(mybooking))">Starta Beräkning</button>
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
          <h2 style="color:#ffffff; margin-left:20px;" >Mesher</h2>
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
                  {{ m.path }}
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
  modalthesecondprojectfolderselected:String;
  mesher: Nuvarandeberakningar[];
  thecityfolders:[];
  thesecondprojectfolder:[];
  thecityfoldersmodal:[];
  thesecondprojectfoldermodal:[];
  thesecondprojectfolderselected:String;
  newprojectfoldername:String;
  newprojectinprojectfolder:String;
  modalnewprojectfoldername:String;
  modalnewprojectinprojectfolder: String;
  mesherkarnor: Number;
  mesherkarnormodal: Number;
  bokningsid: Number;

  constructor() {
    super();
    this.computer = [];
    this.booking = [];
    this.counting = [];
    this.currentcountings = [];
    this.state = 'disabled';
    this.countpc = 1;
    this.valuestart = new Date().toLocaleDateString('sv-se');
    this.valueend = this.valuestart;
    this.name = '';
    this.fdsversion = 0;
    this.foldercityselected = '';
    this.folderprojectselected = '';
    this.mybookings = [];
    this.modalfdsversion = 0;
    this.modalfoldercityselected = '';
    this.modalfolderprojectselected = '';
    this.modalthesecondprojectfolderselected = '';
    this.mesher = [];
    this.thecityfolders = [];
    this.thesecondprojectfolder = [];
    this.thecityfoldersmodal = [];
    this.thesecondprojectfoldermodal = [];
    this.thesecondprojectfolderselected = '';
    this.newprojectfoldername = '';
    this.newprojectinprojectfolder = '';
    this.modalnewprojectfoldername = '';
    this.modalnewprojectinprojectfolder = '';
    this.mesherkarnor = 0;
    this.mesherkarnormodal = 0;
    this.bokningsid = -1;
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

      return {
      value: '',
      min:minDate,
      max:maxDate,
      fdsoptions:[
        { value:0, text:'Välj FDS version'},
        { value:5, text:'5.00'},
        { value:65, text:'6.53'},
        { value:66, text:'6.60'}
      ],
      fdsversion:0,
      foldercity:[
        { value: null, text:'Välj stad'},
        { value: 'Malmo', text:'Malmö'},
        { value: 'Goteborg', text: 'Göteborg'},
        { value: 'Helsingborg', text: 'Helsingborg'},
        { value: 'Stockholm', text: 'Stockholm'},
        { value: 'Halmstad', text: 'Halmstad'},
        { value: 'Karlskrona', text: 'Karlskrona'},
      ],
      foldercityselected:null,
      folderprojectselected:null,
      };
  }

  isValidDate(d) {​​
  return d instanceof Date && !isNaN(d);
  }​​

  dateDisabled(ymd:String,date:Date) {
     
      const weekday = date.getDay()
      const day = date.getDate()

      let blockeddates = this.getblockeddates(this.countpc)

      if(blockeddates.length === 0){
        return false
      }
      
      let s = ( blockeddates.find(x => date.toLocaleDateString('sv-se') >= new Date(this.removeTime(x.datumstart)).toLocaleDateString('sv-se') && date.toLocaleDateString('sv-se') <= new Date(this.removeTime(x.datumslut)).toLocaleDateString('sv-se'))) === undefined
  
      return !s
      
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
       });
      axios.get('http://1.1.106.199:3000/bokningar').then((response) => {
        this.booking = response.data as Bokning[];
        this.getmybookings();
       
        this.valuestart = new Date(this.firstavaliable(new Date().toLocaleDateString('sv-se'),this.countpc)).toLocaleDateString('sv-se');
        let valueendtemp = new Date(this.firstavaliable(new Date().toLocaleDateString('sv-se'),this.countpc));
        valueendtemp.setDate(valueendtemp.getDate());
        this.valueend = valueendtemp.toLocaleDateString('sv-se');
    });
      axios.get('http://1.1.106.199:3000/berakningar').then((response) => {
        this.counting = response.data as Berakningar[];
    }); 
      axios.get('http://1.1.106.199:3000/hamtanuvarandeberakningar').then((response) => {
        this.currentcountings = response.data as Nuvarandeberakningar[];

        this.getMesher();
    });

    
  } 

  // Startar beräkning
  sendToRunjobs(berakningid:number){
    axios.post('http://1.1.106.199:3000/writerunjobs',{id:berakningid}).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
    alert('Beräkning startad');
  }

  // Funktion som skapar bokning 
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
    let a:number;

    // Skicka "nybokning" till Databas V
    if(!this.bookDateValidation(new Date(nybokning.datumstart),new Date(nybokning.datumslut),nybokning.dator)){
    axios.post('http://1.1.106.199:3000/bokningar',{dator:nybokning.dator,datumstart: nybokning.datumstart,datumslut:nybokning.datumslut,name:nybokning.name}).then(function(response){
      // console.log(response);
      bokningsid = Number(response);
      a = response.data;     
    }).catch(function(error){
      console.log(error)
    }).then(()=>{
      this.mybookings[this.mybookings.length -1].id = a;
      this.bokningsid = a;
      //  if(this.fdsversion !== 0 && this.folderprojectselected !== null && this.foldercityselected !== null){
         
      //   this.bokaberakning(a,nybokning.dator);
      //   // alert('Beräkning bokad')
      // }
      // alert('Du har bokat dator ' + nybokning.dator + ' från ' + nybokning.datumstart + ' till ' + nybokning.datumslut + '.')
    });
    
    } else{
      alert('Det finns redan en bokning mellan ' + nybokning.datumstart + ' och ' + nybokning.datumslut + '.')
    }
    this.$forceUpdate();
  }

  // Hämta de olika mapparna på onChange på options
  getProjectFolders(){
    axios.get('http://1.1.106.199:3000/hamtasokvag?beginingofpath=' + this.foldercityselected).then((response) => {
        this.thecityfolders = response.data;
       });
  }

  getFoldersInsideProject(){
    axios.get('http://1.1.106.199:3000/hamtasokvagprojekt?beginingofpath=' + this.foldercityselected +'&projectfolder=' + this.folderprojectselected).then((response) => {
        this.thesecondprojectfolder = response.data;
       });
  }

  getProjectFoldersmodal(){
    axios.get('http://1.1.106.199:3000/hamtasokvag?beginingofpath=' + this.modalfoldercityselected).then((response) => {
        this.thecityfoldersmodal = response.data;
       });
  }

  getFoldersInsideProjectModal(){
    axios.get('http://1.1.106.199:3000/hamtasokvagprojekt?beginingofpath=' + this.modalfoldercityselected +'&projectfolder=' + this.modalfolderprojectselected).then((response) => {
        this.thesecondprojectfoldermodal = response.data;
       });
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
        if(Date.parse(desiredStart) < Date.parse(bookedDates[i].datumstart) && Date.parse(desiredEnd) > Date.parse(bookedDates[i].datumslut)){
      
        
        bool = true
        console.log(bool)
      }

    }
    // if(bool == true){
    //   alert('Bokning överlappar ' + this.valuestart + ' - ' + this.valueend)
    //   this.valueend = this.valuestart;
    //   this.$forceUpdate();
    // }
    console.log(bool)
    return bool;
  }

  // Funktioner för action till forms
  getString(){
    return 'http:\\\\1.1.106.199:3000/upload?cityfolder='+this.foldercityselected+'&projectfolder='+this.folderprojectselected+'&insideprojectfolder='+ this.thesecondprojectfolderselected;
  }

  getStringmodal(){
    return 'http:\\\\1.1.106.199:3000/upload?cityfolder='+this.modalfoldercityselected+'&projectfolder='+this.modalfolderprojectselected+'&insideprojectfolder='+ this.modalthesecondprojectfolderselected;
  }

  // Funktion som avänds för bokning
  bokaberakning(id:number,dator:Number){

      // skicka in sträng mapp till stad/projekt
      // val av FDS version
      // dator/nr
      let nyberakning = new Berakningar();
      nyberakning.cityfolder = this.foldercityselected;
      nyberakning.projectfolder = this.folderprojectselected;
      nyberakning.insidecityproject = this.thesecondprojectfolderselected;
      nyberakning.fds = this.fdsversion;
      nyberakning.bokningsid = id;
      nyberakning.namn = this.getCookie('username');
      nyberakning.nr = dator;
      nyberakning.karnor = this.mesherkarnor;
      console.log(nyberakning)
      this.counting.push(nyberakning)
      this.$forceUpdate();
      let runjobs:number;

      // Skicka in beräkningar
    axios.post('http://1.1.106.199:3000/berakningar',{nr: nyberakning.nr,fds: nyberakning.fds,cityfolder: nyberakning.cityfolder, projectfolder: nyberakning.projectfolder,name:nyberakning.namn,bokningsid: nyberakning.bokningsid,karnor:nyberakning.karnor,insideprojectfolder:nyberakning.insidecityproject}).then(function(response): void{
      console.log(response);
      runjobs = response.data
    }).catch(function(error){
      console.log(error)
    }).then(()=>{
      //  this.sendToRunjobs(runjobs);
      })
  }

  // Funktion skapar mapp inuti stadsmap
  skapaMappTillStad(cityF:String,nyMapp:String){
    axios.get('http://1.1.106.199:3000/skapasokvagprojekt?cityfolder=' + cityF + '&skapadir=' + nyMapp).then((response) => {
  
      
       });
    this.getProjectFolders();
    this.getProjectFoldersmodal();
    this.$forceUpdate();
    alert('Du har skapat mappen ' + nyMapp + ' innuti ' + cityF + '-mappen');
  }

  // Funktion som skapar mapp inuti projektmapp
  skapaMappTillProjekt(cityF:String,projectF:String,nyMapp:String){
    axios.get('http://1.1.106.199:3000/skapasokvagprojekttillprojekt?cityfolder=' + cityF + '&projectfolder=' + projectF + '&skapadir=' + nyMapp).then((response) => {

  
    });
    this.getFoldersInsideProject();
    this.getFoldersInsideProjectModal();
    this.$forceUpdate();
    alert('Du har skapat mappen ' + nyMapp + ' innuti ' + projectF + '-mappen');
  }

  // Funktion som används i modal
    bokaberakningalt(id:number,dator:Number){

      // skicka in sträng mapp till stad/projekt
      // val av FDS version
      // dator/nr
      let nyberakning = new Berakningar();
      nyberakning.cityfolder = this.modalfoldercityselected;
      nyberakning.projectfolder = this.modalfolderprojectselected;
      nyberakning.insidecityproject = this.modalthesecondprojectfolderselected;
      nyberakning.fds = this.modalfdsversion;
      nyberakning.bokningsid = id;
      nyberakning.namn = this.getCookie('username');
      nyberakning.nr = dator;
      nyberakning.karnor = this.mesherkarnormodal;
      console.log(nyberakning)
      this.counting.push(nyberakning);
      this.$forceUpdate();

      // Skicka in beräkningar
    axios.post('http://1.1.106.199:3000/berakningar',{nr: nyberakning.nr,fds: nyberakning.fds,cityfolder: nyberakning.cityfolder, projectfolder: nyberakning.projectfolder,name:nyberakning.namn,bokningsid: nyberakning.bokningsid,karnor:nyberakning.karnor,insideprojectfolder:nyberakning.insidecityproject}).then(function(response){
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

  // Funktion så man kan ändra Countdator i datorgrid
  changeCompFromGrid(Compid:number){
    this.countpc = Compid;
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
      // alert("Välkommen " + user);
    } else {
      user = prompt("Skriv in din e-post:", "");
      if (user != "" && user != null) {
        this.setCookie("username", user, 3650);
      }
    }
  }

  removeCookie(){
    this.setCookie("username","",3650);
  }

  printCookie(){
    return this.getCookie("username");
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

  // Funktion som kollar om countdator är bokad för grid 
  isBooked(computer:any){

    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    let booked = false;

    let bookings = this.getblockeddates(computer.nr)

    for(let i = 0; i < bookings.length; i++){
      if(today.toLocaleDateString('sv-se') >= new Date(bookings[i].datumstart).toLocaleDateString('sv-se') && today.toLocaleDateString('sv-se') <= new Date(bookings[i].datumslut).toLocaleDateString('sv-se')){
        booked = true;
      }
    }
    return booked;
  }

  // Funktion till kalender som varnar ifall det ligger en bokning ivägen
  isBookingFree(bookingstart:Date,bookingend:Date,computerID:Number){
    if(bookingstart < new Date(2019,1,1)){
      return true;
    }
    let desiredStart = bookingstart.toString();
    let desiredEnd = bookingend.toString();
    let bookedDates = this.getblockeddates(computerID);

    let bool = false;

    for(let i = 0; i < bookedDates.length; i++){
      
        if(Date.parse(desiredStart) < Date.parse(bookedDates[i].datumstart) && Date.parse(desiredEnd) > Date.parse(bookedDates[i].datumslut)){
        
        
        bool = true
        if(bool){
          console.log(bookedDates[i].id)
        }
      }
 
    }
    if(bool == true){
      alert('Bokning överlappar ' + this.valuestart + ' - ' + this.valueend)
    }
    return bool;
  }

  // Funktion som gör det fösta lediga datumet förvalt
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

    let used = this.currentcountings.filter(d => d.usedkarnor != 0);
    
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
     
      multipleCountings = this.mesher.filter(d => d.dator == mesherObj.dator);
      multipleCountings.forEach(function(multipleCounting){
        usedkarnor = usedkarnor + multipleCounting.usedkarnor
      })

    ledigakarnor = ledigakarnor - usedkarnor


    return ledigakarnor
  }

  // Funktion som tar bort bokning och beräkning
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

      axios.post('http://1.1.106.199:3000/tabortberakning' ,{id:bokningsid})
      .then(response => {
        console.log(response);
      });
      alert('Bokning för dator: ' + bookingObj.dator + ' för perioden ' + this.removeTime(bookingObj.datumstart) + ' till ' + this.removeTime(bookingObj.datumslut) + ' är nu borttagen');

  }

  // Tar bort beräkning
  removeBerakning(bookingObj:Bokning){
    let bokningsid = bookingObj.id;

      axios.post('http://1.1.106.199:3000/tabortberakning' ,{id:bokningsid})
      .then(response => {
        console.log(response);
        // Ta bort berakning från countings
        // let tempcounting = this.counting.filter(d => d.bokningsid == bokningsid)
        // this.counting.splice(bokningsid,1)
        this.$forceUpdate();
      });
      alert('Beräkning borttagen.')
  }

  // Funktion som kollar ifall bokning har beräkning 
  bookingHasBerakning(bookingObj:Bokning){
    let bool = false;
    let countings = this.counting
    
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
    let berakning:Berakningar;
    berakning = new Berakningar;

    countings.forEach(function(counting){
      if(counting.bokningsid == bokningsid){
        berakning = counting;
      }
    })

    let path = berakning.projectfolder;

    if(berakning.insidecityproject != ''){
      path = path + '/' + berakning.insidecityproject;
    }

    let berakningString =  'Din beräkning är path: /' + berakning.cityfolder + '/' + path + ' Med FDS version: ' + berakning.fds;
    return berakningString;
  }

  getBerakningIDFromBooking(bookingObj:Bokning){
    let bokningsid = bookingObj.id;
    let countings = this.counting;
    let berakning;

    countings.forEach(function(counting){
      if(counting.bokningsid == bokningsid){
        berakning = counting;
      }
    })

    return berakning.id;
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
  datumstart: string;
  datumslut: string;
  name: String;
  id: number;
  avbokad: number;

  constructor() {
    this.dator = 0;
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
  insidecityproject: String;
  fds: Number;
  namn: String;
  bokningsid: number;
  id: number;

  constructor() {
      this.nr = 0;
      this.karnor = 0;
      this.berakning = '';
      this.berakningtxt = '';
      this.cityfolder = '';
      this.projectfolder = '';
      this.insidecityproject = '';
      this.fds = 0;
      this.namn = '';
      this.bokningsid = 0;
      this.id = 0;
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

.login{
  margin-top:10px;

}

.login p{
  color:black;
}

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
  margin-top:5px;
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
      color: white;
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

.bokaknapp{
  margin-top:10px;
  margin-bottom:10px;
}

.mappknapp{
  margin-top:10px;
  margin-bottom:10px;
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
