<template>
    <div class="row-cols-table row">
      <div class="size-grid-auto col-md-12" style="overflow-y:auto;">
        <h2>Mesher</h2>
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
            <tr>
              <th scope="row">FSDCOUNT 3</th>
              <td>6</td>
              <td>4</td>
              <td>2</td>
              <td>
                <p>
                  /Goteborg/Jonatan/2318085LisebergJP1/Scenario1_1_7/Scenario1_1_7.fds
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">FSDCOUNT 4</th>
              <td>6</td>
              <td>12</td>
              <td>-6</td>
              <td>
                <p>
                  /Stockholm/2919-001_Martinservera/MoS_Kylt_Scenario_2b_2MW/MoS_Kylt_Scenario_2b_2MW.fds
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">FSDCOUNT 5</th>
              <td>12</td>
              <td>10</td>
              <td>2</td>
              <td>
                <p>
                  /Goteborg/Jonatan/2318085LisebergJP1/Scenario1_1_6/Scenario1_1_6.fds
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Mesher extends Vue {
 
}
</script>