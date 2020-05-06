<template>
<div class="container col-md-12">
  <div class="size-grid-standard col-md-6" id="Dags-fullscreen" >
    <div class="dator-row row">
      <div class="dator-row-1 row">
        <div class="dator col-md-3">
          <h4>Dator 1</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count1"/>
            <b-popover target="count1" triggers="hover" placement="top">
              <template v-slot:title>Count 1 Specs</template>
                Namn:<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
                Antal kärnor:<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].karnor : '' }} </p>
                Processor<p> {{ computer !== undefined && computer[0] !== undefined ? computer[0].desc : '' }} </p>      
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 2</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count2" />
            <b-popover target="count2" triggers="hover" placement="top">
              <template v-slot:title>Count 2 Specs</template>
                Namn:<p> {{ computer !== undefined && computer[1] !== undefined ? computer[1].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
                Antal kärnor:<p> {{ computer !== undefined && computer[1] !== undefined ? computer[1].karnor : '' }} </p>
                Processor<p> {{ computer !== undefined && computer[1] !== undefined ? computer[1].desc : '' }} </p>                 
              </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 3</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count3" />
            <b-popover target="count3" triggers="hover" placement="top">
              <template v-slot:title>Count 3 Specs</template>
                Namn:<p> {{ computer !== undefined && computer[2] !== undefined ? computer[2].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
                Antal kärnor:<p> {{ computer !== undefined && computer[2] !== undefined ? computer[2].karnor : '' }} </p>
                Processor<p> {{ computer !== undefined && computer[2] !== undefined ? computer[2].desc : '' }} </p> 
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 4</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count4" />
            <b-popover target="count4" triggers="hover" placement="top">
              <template v-slot:title>Count 4 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[3] !== undefined ? computer[3].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
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
            <img src="@/assets/countpcfree.png" id="count5" />
            <b-popover target="count5" triggers="hover" placement="top">
            <template v-slot:title>Count 5 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[4] !== undefined ? computer[4].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[4] !== undefined ? computer[4].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[4] !== undefined ? computer[4].desc : '' }} </p>  
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 6</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count6" />
            <b-popover target="count6" triggers="hover" placement="top">
            <template v-slot:title>Count 6 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[5] !== undefined ? computer[5].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[5] !== undefined ? computer[5].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[5] !== undefined ? computer[5].desc : '' }} </p>  
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 7</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count7" />
            <b-popover target="count7" triggers="hover" placement="top">
              <template v-slot:title>Count 7 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[6] !== undefined ? computer[6].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[6] !== undefined ? computer[6].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[6] !== undefined ? computer[6].desc : '' }} </p>          
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 8</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count8" />
            <b-popover target="count8" triggers="hover" placement="top">
            <template v-slot:title>Count 8 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[7] !== undefined ? computer[7].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
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
            <img src="@/assets/countpcfree.png" id="count9" />
            <b-popover target="count9" triggers="hover" placement="top">
            <template v-slot:title>Count 9 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[8] !== undefined ? computer[8].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[8] !== undefined ? computer[8].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[8] !== undefined ? computer[8].desc : '' }} </p>
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 10</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count10" />
            <b-popover target="count10" triggers="hover" placement="top">
            <template v-slot:title>Count 10 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[9] !== undefined ? computer[9].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[9] !== undefined ? computer[9].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[9] !== undefined ? computer[9].desc : '' }} </p>
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 11</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count11" />
            <b-popover target="count11" triggers="hover" placement="top">
              <template v-slot:title>Count 11 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[10] !== undefined ? computer[10].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[10] !== undefined ? computer[10].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[10] !== undefined ? computer[10].desc : '' }} </p>              
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 12</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count12" />
            <b-popover target="count12" triggers="hover" placement="top">
              <template v-slot:title>Count 12 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[11] !== undefined ? computer[11].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[11] !== undefined ? computer[11].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[11] !== undefined ? computer[11].desc : '' }} </p>  
            </b-popover>
          </div>
        </div>

      </div>

      <div class="dator-row-4 row">

        <div class="dator col-md-3">
          <h4>Dator 13</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count13" />
            <b-popover target="count13" triggers="hover" placement="top">
            <template v-slot:title>Count 13 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[12] !== undefined ? computer[12].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[12] !== undefined ? computer[12].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[12] !== undefined ? computer[12].desc : '' }} </p>                  
            </b-popover>
          </div>
        </div>
        
        <div class="dator col-md-3">
          <h4>Dator 14</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count14" />
            <b-popover target="count14" triggers="hover" placement="top">
            <template v-slot:title>Count 14 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[13] !== undefined ? computer[13].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[13] !== undefined ? computer[13].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[13] !== undefined ? computer[13].desc : '' }} </p>                  
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 15</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count15" />
            <b-popover target="count15" triggers="hover" placement="top">
            <template v-slot:title>Count 15 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[14] !== undefined ? computer[14].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[14] !== undefined ? computer[14].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[14] !== undefined ? computer[14].desc : '' }} </p>                  
            </b-popover>
          </div>
        </div>

        <div class="dator col-md-3">
          <h4>Dator 16</h4>
          <div class="dator-bild">
            <img src="@/assets/countpcfree.png" id="count16" />
            <b-popover target="count16" triggers="hover" placement="top">
            <template v-slot:title>Count 16 Specs</template>
              Namn:<p> {{ computer !== undefined && computer[15] !== undefined ? computer[15].namn : 'Klicka på knappen för ladda in specsen, fixa så det laddas auto matiskt' }} </p>
              Antal kärnor:<p> {{ computer !== undefined && computer[15] !== undefined ? computer[15].karnor : '' }} </p>
              Processor<p> {{ computer !== undefined && computer[15] !== undefined ? computer[15].desc : '' }} </p>                  
            </b-popover>
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
  margin-top: 100px;
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
