<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';

import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const project = ref({
    id: 0,
    imgs: [],
    title: '',
    opis: '',
    text: ''
});
const route = useRoute();
onMounted(async () => {
    const { data: fetchedProject } = await axios.get("/data/projects.json");
    console.log(fetchedProject);
    project.value = fetchedProject.projects.find(p => p.id === parseInt(route.params.id));
});

</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>

    <!-- Back Button -->
    <div class="container mt-30">
        <div class="row">
            <div class="col-12">
                <router-link :to="{name:'projekti'}" class="btn">
                    <i class="fas fa-arrow-left me-2"></i>Natrag na projekte
                </router-link>
            </div>
        </div>
    </div>

    <!-- Project Details  -->    <div class="project-details-wrap section-padding">
        <div class="container">
            <div class="row gx-5">
                <div class="col-xl-5 col-lg-5">
                    <div class="project-details-info">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.opis }}</p>
                        <div class="row single-details-item gy-3 mt-30">
                            <div class="col-4">
                                <h5>Opis</h5>
                            </div>
                            <div class="col-6">
                                <span>{{ project.text }}</span>
                            </div>                           
                            
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7">
                    <div class="project-details-inner">
                        <div class="project-feature-img" v-for="img in project.imgs" v-bind:key="img.id">
                            <img :src="'/' + img.src" :alt="project.title + ' ' + img.id">
                        </div>                      
                    </div>
                </div>                
            </div>
        </div>
    </div>
    
</template>

