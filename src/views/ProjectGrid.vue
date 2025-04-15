<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';

import axios from 'axios'
import { onMounted, ref } from 'vue'

const projects = ref([]);

onMounted(async () => {
  const { data: fetchedProjects } = await axios.get("/data/project-grid.json");
  projects.value = fetchedProjects.projects;
});

</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project Grid  -->
    <div id="project-2" class="project-grid project-section section-padding">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6"
                v-for="project in projects.slice(0,12)" :key="project.id"
                >
                    <router-link :to="{name:'project-details-gallery'}" class="single-project-item">
                        <div class="project-bg">
                            <img :src="project.img" alt="">
                        </div>
                        <div class="project-info">
                            <h5>{{ project.title }}</h5>
                            <p>{{ project.cat }}</p>
                        </div>
                    </router-link>
                </div>                
            </div>
        </div>
    </div>
    
</template>

