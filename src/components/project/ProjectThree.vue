<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'

const projects = ref([]);

onMounted(async () => {
  const { data: fetchedProjects } = await axios.get("/data/projects_three.json");
  projects.value = fetchedProjects.projects;
});

</script>

<template>

<div class="project-section project-three section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-8 wow fadeInUp animated" data-wow-delay="200ms">
                    <div class="section-title mb-0">
                        <h6>Recent Project</h6>
                        <h2>We Provide you the Highest Quality Work</h2>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-4 text-lg-end d-none d-lg-inline-block">
                    <router-link :to="{name:'project-metro'}" class="bordered-btn">All Project</router-link>
                </div>
            </div>
            <div class="row gy-4 mt-40">
                <div class="col-xl-4 col-lg-4 col-md-6"
                v-for="project in projects.slice(0,6)" :key="project.id"
                >
                    <router-link :to="{name:'project-details-gallery'}" class="single-project-wrapper">
                        <div class="project-bg">
                            <img :src="project.img" alt="">
                            <div class="project-details">
                                <h4>{{ project.title }}</h4>
                                <p>{{ project.cat }}</p>
                            </div>
                        </div>                        
                    </router-link>
                </div>
                           
            </div>
        </div>
    </div>
    
</template>