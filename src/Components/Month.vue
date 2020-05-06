 <template>
 <div class="size-grid-standard col-md-5" id="Month">
    <label class="control-label" for="fsdcountselector" style="margin-left:40px;">
      <h4>Count Dator </h4>
    </label>
      <b-form-select
        v-model="countpc"
        class="form-control"
        id="fsdcountselector"
        @change="updateCalender()"
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
        <b-row>
          <div class="calendar">
            <b-col md="auto">
              <b-calendar
                v-model="value"
                locale="sv-Sv"
              ></b-calendar>
            </b-col>
          </div>
      </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Month extends Vue {
  
}
</script>>
<style lang="sass">

</style>
