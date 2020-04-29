<template>
  <div class="sidebar-body col-md-12">
        <div class="img col-md-12">
          <h1>FSD</h1>
          <h3>Resursbokning</h3>
        </div>
    <div class="links col-md-12">
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {
    
  }
})

export default class Navbar extends Vue {

}
</script>

<style scoped lang="scss">

.sidebar-body{
  height: 100%;
    width: 100%;

}
.img {
  margin-top: 50px;
  margin-bottom: 20px;

   h1 {
    color: blue;
  }

  h3 {
    color: blue;
  }
}
.links {
  width: 100%;
  padding: 0%;
  a{
    color: lightgray;
  }
}

@media only screen and (max-width: 1000px) {

}

</style>