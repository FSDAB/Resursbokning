<template>
  <div id="app">
    <div class="container main">
      <div class="row">
        <div class="col-md-12 pt-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {
    
  }
})
export default class App extends Vue {
  constructor() {
    super();
    Datorer
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: left;
  font-weight: bold;
  a {
    font-weight: normal;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  ul {
    list-style: none;
    border: 1px solid gray;
  }
}
</style>
