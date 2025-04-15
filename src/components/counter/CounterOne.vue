<script setup>

import { onMounted, ref, onUpdated } from "vue";
import axios from "axios";

const counts = ref([]);

onMounted(async () => {
  const { data: fetchedCounts } = await axios.get("/data/counts.json");
  counts.value = fetchedCounts.counts;
});

onUpdated(() => {         

    new PureCounter();
    new PureCounter({
      filesizing: true,
      selector: ".filesizecount",
      pulse: 2,
    });
   
});

</script>

<template>

    <div id="counter-1" class="counter-section dark-bg section-padding pt-50 pb-0">
        <div class="container">
            <div class="row gx-0">
                <div class="col-lg-4 col-md-4 col-sm-6"
                v-for="count in counts.slice(0,4)" :key="count.id"
                >
                    <div class="single-counter-box">
                        <p class="counter-number"><span class="purecounter" data-purecounter-duration="1" :data-purecounter-end="count.number">{{ count.number }}</span></p><span>+</span>
                        <h6>{{ count.title }}</h6>                        
                    </div>
                </div>                
                
            </div>        
        </div>    
    </div>

</template>