<script setup>

import { onMounted, ref, onUpdated } from 'vue'

import axios from "axios";

const projects = ref([]);

onMounted(async () => {
  const { data: fetchedProjects } = await axios.get("/data/projects.json");
  projects.value = fetchedProjects.projects;
});

onUpdated(() => {         
    
  $(".project-slider").owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    slideSpeed: 300,
    margin: 30,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },

      575: {
        items: 1,
        nav: false,
      },

      767: {
        items: 2,
        nav: false,
      },

      990: {
        items: 3,
        loop: true,
      },
      1200: {
        items: 3,
        loop: true,
      },
    },
  });
   
});

</script>

<template>

<div class="project-section gray-bg section-padding">
    <div class="container">
        <div class="row">
            <div class="col-xl-7 col-lg-7 wow fadeInUp animated" data-wow-delay="200ms">
                <div class="section-title">
                    <h6>Our Latest Work</h6>
                    <h2>Impact of Roofing on Property Value</h2>
                </div>
            </div>
        </div>
        <div class="row mt-30">
            <div class="project-slider owl-carousel">

                <router-link :to="{name:'project-details-left'}" class="single-project-wrapper"
                v-for="project in projects.slice(0,4)" :key="project.id"
                >
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