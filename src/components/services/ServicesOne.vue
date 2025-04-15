<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'

const services = ref([]);

onMounted(async () => {
  const { data: fetchedServices } = await axios.get("/data/services.json");
  services.value = fetchedServices.services;
});

</script>

<template>

<div class="service-section section-padding pb-20">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-8 col-lg-8 wow fadeInUp animated" data-wow-delay="200ms">
                <div class="section-title mb-0">
                    <h6>Services</h6>
                    <h2>We can handle all types <br> of roofing services</h2>
                </div>
            </div>                
        </div>
        <div class="row mt-100">
            <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated" data-wow-delay="200ms"
            v-for="service in services.slice(0,6)" :key="service.id"
            >
                <div class="single-service-wrap">
                    <div class="service-icon">
                        <img :src="service.icon" alt="">
                    </div>
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

</template>