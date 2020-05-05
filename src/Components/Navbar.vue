<template>
  <div class="sidebar-body col-md-12">
        <div class="img col-md-12" >
          <a href="@/views/App.vue">
           <img src="@/assets/fsd_logo.png">
          </a>
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
  padding: 0px;
}
.img {
  margin-top: 70px;
  margin-bottom: 20px;
}
.links {
  width: 100%;
  padding: 0%;
  a{
    color: #1E45A1;
  }
}


</style>