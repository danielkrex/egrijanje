<script setup>

import { onMounted, ref, onUpdated } from "vue";
import axios from "axios";

const counts = ref([]);

onMounted(async () => {
  const { data: fetchedCounts } = await axios.get("/data/counts_three.json");
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

<div id="about-3" class="about-section about-three section-padding pt-0">
    <div class="container">
    <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1">
        <div class="about-content-wrap">
            <div class="section-title">              
            <div class="heading-animation">                
                <h6 class="text-secondary">Designed To Grow Your Business</h6>
                <h2>Raising the Standard <br> Protect Your Home
                </h2>
            </div>
            </div>
            <div class="p-animation">
            <p>
                Nulla gravida dignissim magna, lacinia suscipit diam. Ut ut
                viverra velit. Aenean et felis arcu. Aliquam vitae justo erat.
                Integer sed lacus in tellus finibus gravida. 
            </p>
            </div>                
            <div class="row mt-60">
                <div class="col-xl-4 col-lg-4 col-md-4"
                v-for="count in counts.slice(0,4)" :key="count.id"
                >
                    <div class="single-counter-box">
                        <p class="counter-number"><span class="purecounter" data-purecounter-duration="1" :data-purecounter-end="count.number">{{ count.number }}</span></p><span>+</span>                        
                        <h6>{{ count.title }}</h6>
                    </div>
                </div>
            
            </div>
            <router-link :to="{name:'services'}" class="theme-btn mt-40 wow fadeInUp animated" data-wow-delay="200ms">View Services</router-link>
        </div>
        </div>
        <div class="col-xl-6 col-lg-6 text-lg-end order-1 order-lg-2 wow fadeInUp animated" data-wow-delay="400ms">
        <div class="about-bg-wrapper">
            <img src="/assets/img/about/about-3-1.png" alt="" >
            <div class="small-img">
                <img src="/assets/img/about/about-3-2.jpg" alt="">
            </div>
        </div>
        </div>
    </div>
    </div>
</div>

</template>