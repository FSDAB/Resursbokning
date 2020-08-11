<template>
<div class="container col-md-12" style=" height:auto; border: 5px solid green; ">
          <div class="dator-row col-md-12">

            <div class="row" style="border: 5px solid green ">

              <div class="dator col-md-auto" >
                <h4>Dator 1</h4>
                <div class="dator-bild">
                  <b-link :to="{ name: 'count1' }">
                    <img src="@/assets/countpcfree.png" id="count1"/>
                  </b-link>
                  <b-popover target="count1" triggers="hover" placement="top">
                    <template v-slot:title>Count 1 Specs</template>
                      Namn:<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].namn : 'Ett fel har inträffat ladda om sidan' }} </p>
                      Antal kärnor:<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].karnor : '' }} </p>
                      Processor<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].desc : '' }} </p>      
                  </b-popover>
                </div>
              </div>

              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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
              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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

               <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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
              
              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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

              <div class="dator col-md-auto">
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
        </div>
</template>

<script lang="ts">
import axios from 'axios';
import App from 'App.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import SideNav from '@/Components/SideNav.vue';

@Component({
  components: {    
    SideNav,
  }
})

export default class Dags extends Vue {
  computer: Datorer[];
  constructor() {
    super();
    this.computer = [];
  }
   data() {
    return {
    };
   }
  created() {
    this.getDatorer();
  }
  getDatorer () {
  axios.get('http://1.1.106.199:3000/datorer').then((response) => {
    this.computer = response.data.datorer as Datorer[];
    // tslint:disable-next-line:no-console
    console.log(this.computer[1]);
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

#Dags-fullscreen {
  overflow: hidden;
  margin-left:20px ;
}

.container {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  background-color:#014B94;
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

.dator {
  height: 145px;
  img {
    width: 100px;
    height: 100px;
  } 
}
@media only screen and (max-width: 1200px) {
  .container {
    margin: 0%;
  }

  .dator {
    h3 {
      font: 15px;
      margin-top: 10px;
    }

  }
}
@media only screen and (max-width: 2500px) {
  #Dags-fullscreen {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
