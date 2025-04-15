<script setup>

import axios from 'axios'
import { onBeforeMount, ref, onUpdated } from 'vue'

const slider = ref([]);

onBeforeMount(async () => {
  const { data: fetchedSlider } = await axios.get("/data/slider.json");
  slider.value = fetchedSlider.slider;
});


onUpdated(() => {         
   
   $("[data-background").each(function () {
       $(this).css(
         "background-image",
         "url( " + $(this).attr("data-background") + "  )"
       );
     });

     $(".homepage-slides").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: "fadeIn",
        smartSpeed: 2000,
        slideSpeed: 600,
        navText: [
        "<i class='las la-arrow-left'></i>",
        "<i class='las la-arrow-right'></i>",
        ],
        responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
        },
        1100: {
            items: 1,
        },
        },
    });
      
   });

</script>

<template>
    <div id="home-1" class="homepage-slides owl-carousel">
        <div class="single-slide-item d-flex align-items-center" :data-background="slide.bg_img"
        v-for="slide in slider.slice(0,2)" :key="slide.id"
        >
            <div class="overlay-2"></div>
            <div class="hero-area-content">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-8 wow fadeInUp animated" data-wow-delay=".2s">
                            <div class="section-title">
                                <h6 class="text-white">{{ slide.sub_title }}</h6>
                                <h1 class="text-white">{{ slide.title }}</h1>
                            </div>
                            <p class="text-white">{{ slide.content }}</p>
                            <router-link :to="{name:'about'}" class="theme-btn mt-40">{{ slide.btn_text }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>