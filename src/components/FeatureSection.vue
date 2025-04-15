<script setup>

import { onMounted, ref } from 'vue'

import axios from "axios";

const features = ref([]);

onMounted(async () => {
  const { data: fetchedFeatures } = await axios.get("/data/features.json");
  features.value = fetchedFeatures.features;
});

</script>

<template>

    <div class="feature-section section-padding pt-0">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4"
                v-for="feature in features.slice(0,3)" :key="feature.id"
                >                    
                    <div class="single-feature-wrap">
                        <div class="feature-icon">
                            <img :src="feature.icon" alt="">
                        </div>
                        <h5>{{ feature.title }}</h5>
                        <p>{{ feature.content }}</p>                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>

</template>