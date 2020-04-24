<template>
  <div class=" body col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Beräkningsdator</th>
            <th scope="col">Tillgängliga kärnor</th>
            <th scope="col">Använda Kärnor</th>
            <th scope="col">Lediga Kärnor	</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">FSDCOUNT  3	</th>
            <td>6</td>
            <td>4</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">FSDCOUNT  4</th>
            <td>6</td>
            <td>12</td>
            <td>-6</td>
          </tr>
          <tr>
            <th scope="row">FSDCOUNT  5</th>
            <td>12</td>
            <td>10</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Mesher extends Vue {
  
})
</script>