<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'

const services = ref([]);

onMounted(async () => {
  const { data: fetchedServices } = await axios.get("/data/services_three.json");
  services.value = fetchedServices.services;
});

</script>

<template>
    
    <div id="service-3" class="service-section dark-bg section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="section-title">
                        <h6 class="text-white">What We Offer</h6>
                        <h2 class="text-white">High Quality Roofing Services Offered</h2>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <p class="text-white">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <p class="text-white">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </div>
            <div class="row gy-4 mt-60">
                <div class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s"
                v-for="service in services.slice(0,4)" :key="service.id"
                >
                    <div class="single-service-item">
                        <div class="service-icon">
                            <img :src="service.icon" alt="">
                        </div>
                        <div class="service-title">
                            <h4>{{ service.title }}</h4>
                        </div>
                        <router-link :to="{name:'service-details'}" class="read_more_link">
                            <span class="link_text">Read More</span>
                            <span class="link_icon"><i class="las la-arrow-right"></i></span>
                        </router-link>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>