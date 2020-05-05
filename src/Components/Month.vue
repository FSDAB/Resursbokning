 <template>
 <div class="size-grid-standard col-md-12" id="Month">
        <div class="dator-row-1 row" id="Rubrik">
          <a href="@/Components/Month.vue" style="color:black">
           <h2>Månadsöversikt</h2>
          </a>
          {{countpc}}
        </div>
        <label class="control-label" for="fsdcountselector"
          ><h4>Count Dator {{ fsdcountselector }}</h4></label
        >
        <b-form-select
          v-model="countpc"
          :options="options"
          class="form-control"
          id="fsdcountselector"
          @change="updateCalender"
        >
        </b-form-select>
        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

        <b-row>
        <div class="calendar">
            <b-col md="auto">
              <b-calendar
                v-model="value"
                @context="onContext"
                locale="en-US"
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
