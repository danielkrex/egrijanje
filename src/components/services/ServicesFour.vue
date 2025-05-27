<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'

const services = ref([]);

onMounted(async () => {
  const { data: fetchedServices } = await axios.get("/data/services_four.json");
  services.value = fetchedServices.services;
});

</script>

<template>

<div class="service-section section-padding pb-20 bg-light">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 wow fadeInUp animated" data-wow-delay="200ms">
                <div class="section-title mb-0" style="text-align: center;">
                    <!-- <h6>egrijanje</h6> -->
                    <h2 style="width: 100%;">"Udobnost bez kompromisa <br/>za okoliš"</h2>
                    <p style="margin-top: 30px;">Električno 12V grijanje je 100% učinkovito na mjestu potrošnje,<br/> što znači da plaćate samo ono što koristite. Nema gubitaka, što je bolje za vaš dom i okoliš.</p>
                </div>
            </div>                
        </div>
        <div class="row mt-100">
            <div class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp animated" data-wow-delay="200ms"
            v-for="service in services.slice(0,6)" :key="service.id"
            >
                <div class="single-service-wrap service-four">
                    <div class="service-icon">
                        <img :src="service.icon" alt="">
                    </div>
                    <h4>{{ service.title }}</h4>
                    <p>{{ service.content }}</p>
                </div>
            </div>            
        </div>
    </div>
</div>

</template>

<style scoped>
.single-service-wrap.service-four {
    min-height: 350px;
    border-radius: 10px;

}

</style>
