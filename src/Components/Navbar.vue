<template>
  <div class=" body col-md-12">
        <div class="img col-md-12">
         <!-- <img src="..." class="rounded mx-auto d-block" alt="..."> -->
         Bild palceholder
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
.img {
  background-color: green;
  margin-top: 10px;
  margin-bottom: 20px;
  p {
    color: black;
  }
}
.links {
  width: 100%;
  padding: 0%;
  border: 2px solid red;
  a{
    color: blue;
  }
}

@media only screen and (max-width: 1000px) {

}

</style>