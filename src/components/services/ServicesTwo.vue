<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'

const services = ref([]);

onMounted(async () => {
  const { data: fetchedServices } = await axios.get("/data/services_two.json");
  services.value = fetchedServices.services;
});

</script>

<template>

<div class="service-section gray-bg service-two section-padding">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 wow fadeInUp animated" data-wow-delay="200ms">
                <div class="section-title pb-0">
                    <h6> Our Services</h6>
                    <h2>Outstanding Service Makes the Difference</h2>
                </div>                    
            </div>  
            <div class="col-xl-6 col-lg-6 col-md-4 text-lg-end d-none d-lg-inline-block">
                <router-link :to="{name:'services'}" class="bordered-btn">More Services</router-link>
            </div>              
        </div>
        <div class="row mt-40">
            <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="200ms"
            v-for="service in services.slice(0,3)" :key="service.id"
            >
                <div class="single-service-wrap">
                    <div class="service-img">
                        <img :src="service.img" alt="">
                        <div class="service-icon">
                            <img :src="service.icon" alt="">
                        </div>
                    </div>
                    <div class="service-content">
                        <h4>{{ service.title }}</h4>
                        <p>{{ service.content }}</p>
                        <router-link :to="{name:'service-details'}" class="read_more_link">
                            <span class="link_text">Read More</span>
                            <span class="link_icon"><i class="las la-arrow-right"></i></span>
                        </router-link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>

</template>