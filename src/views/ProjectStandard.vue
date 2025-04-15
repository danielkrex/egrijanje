<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';

import axios from 'axios'
import { onMounted, ref } from 'vue'

const projects = ref([]);

onMounted(async () => {
  const { data: fetchedProjects } = await axios.get("/data/project-standard.json");
  projects.value = fetchedProjects.projects;
});

</script>

<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project Standard  -->
    <div id="project-standard" class="project-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6"
                v-for="project in projects.slice(0,6)" :key="project.id"
                >
                    <router-link :to="{name:'project-details-left'}" class="single-project-wrapper">
                        <div class="project-img">
                            <img :src="project.img" alt="">
                        </div>
                        <div class="project-title">
                            <h3>{{ project.title }}</h3>
                            <h6>{{ project.cat }}</h6>
                        </div>
                    </router-link>
                </div>                                                        
            </div>
        </div>
    </div>
    
</template>

