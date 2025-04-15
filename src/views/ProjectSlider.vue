<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';

import { onMounted } from "vue";

onMounted(() => {         

    $(".project-slider-2").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: true,
    loop: false,
    autoplay: true,
    responsiveClass: true,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      575: {
        items: 1,
        nav: false,
        dots: false,
      },

      767: {
        items: 2,
        dots: true,
      },

      990: {
        items: 3,
        dots: false,
      },
      1200: {
        items: 2,
        dots: false,
      },
    },
  });
   
});


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project Slider -->
    <div id="project-standard" class="project-section section-padding">
    <div class="container">
        <div class="row">
            <div class="project-slider-2 owl-carousel">
                <router-link :to="{name:'project-details-left'}" class="single-project-wrapper mb-0">
                    <div class="project-img">
                        <img src="/assets/img/project/slider/1.jpg" alt="">
                    </div>
                    <div class="project-title">
                        <h3>Roof Installtion</h3>
                        <h6>Construction</h6>
                    </div>
                </router-link>
                        
                <router-link :to="{name:'project-details-left'}" class="single-project-wrapper mb-0">
                    <div class="project-img">
                        <img src="/assets/img/project/slider/2.jpg" alt="">
                    </div>
                    <div class="project-title">
                        <h3>Roof Repair</h3>
                        <h6>Factory</h6>
                    </div>
                </router-link>
                        
                <router-link :to="{name:'project-details-left'}" class="single-project-wrapper mb-0">
                    <div class="project-img">
                        <img src="/assets/img/project/slider/3.jpg" alt="">
                    </div>
                    <div class="project-title">
                        <h3>Roof Inspection</h3>
                        <h6>Construction</h6>
                    </div>
                </router-link>
                        
                <router-link :to="{name:'project-details-left'}" class="single-project-wrapper mb-0">
                    <div class="project-img">
                        <img src="/assets/img/project/slider/4.jpg" alt="">
                    </div>
                    <div class="project-title">
                        <h3>Roof Innovation</h3>
                        <h6>Industry</h6>
                    </div>
                </router-link>
                
                <router-link :to="{name:'project-details-left'}" class="single-project-wrapper mb-0">
                    <div class="project-img">
                        <img src="/assets/img/project/slider/5.jpg" alt="">
                    </div>
                    <div class="project-title">
                        <h3>Roof Repair</h3>
                        <h6>Industry</h6>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>
    
</template>

