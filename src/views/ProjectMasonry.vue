<script setup>
import { BreadCrumb, HeaderOne } from '@/components';

import axios from 'axios'
import { onMounted, ref } from 'vue'

const projects = ref([]);

onMounted(async () => {
  const { data: fetchedProjects } = await axios.get("/data/projects.json");
  projects.value = fetchedProjects.projects;
});

</script>



<template>
    <HeaderOne/>
    <!-- Project Masonry -->
     
    <div class="blog-section section-padding">
    <div class="section-title mb-0" style="text-align: center">
          <h2 style="width: 100%">
            Naši projekti</h2>
          <p style="width: 100%; max-width: 700px; margin: 0 auto; margin-top: 30px;">
            Pregled naših izvedenih sustava grijanja u različitim vrstama objekata. Kvaliteta, preciznost i udobnost u svakom prostoru.</p>
        </div>
    <div id="project-masonry" class="section-padding" data-scroll-index="2">
        <div class="container">           
            <div class="row project-filter mt-30">
                <div class="col-lg-4 col-md-6 project-item installation" v-for="project in projects" v-bind:key="project.id">
                    <router-link :to="{name:'projekti-id', params: { id: project.id }}">
                        <div class="project-box">
                            <div class="project-img">
                                <img :src="project.imgs[1].src" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">{{ project.title }}</h4>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
</div>
    
</template>

