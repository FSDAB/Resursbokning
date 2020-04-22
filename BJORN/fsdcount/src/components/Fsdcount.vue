<template>
  <div class="fsdcount">
     {{ msg !== undefined && msg[3] !== undefined ? msg[3].namn : '' }}
     <b-button @click="sune()"> Test </b-button>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Prop, Vue } from 'vue-property-decorator';

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

export default class Fsdcount extends Vue {
  msg: Datorer[];
  constructor() {
    super();
    this.msg = [];
  }

  created() {
    axios.get('http://1.1.106.199:3000/datorer')
    .then(response => {
      this.msg = response.data as Datorer[];
      this.$forceUpdate();
    });
  }

  sune () {
        // // tslint:disable-next-line:no-console
        // console.log('C: ');
        this.created();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
