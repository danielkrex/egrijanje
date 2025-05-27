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
        items: 2,
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
        v-for="slide in slider.slice(0,3)" :key="slide.id"
        >
            <div class="overlay-2"></div>
            <div class="hero-area-content">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-8 wow fadeInUp animated" data-wow-delay=".2s">
                            <div class="section-title e-whiteText">
                                <h1 class="text-white">{{ slide.title }}</h1>
                                <div class="logo-part">
                                    <img src="/assets/img/logo.png" alt="logo">
                                </div>
                            </div>
                            <p class="text-white" v-if="slide.content">{{ slide.content }}</p>
                            <router-link v-if="slide.btn_text" :to="{name:'about'}" class="theme-btn mt-40">{{ slide.btn_text }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<style scoped>
@media (min-width: 1200px) {
.e-whiteText {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    mix-blend-mode: soft-light;

    .text-white {
        padding: 20px;
        color: #000 !important;
    }

    .logo-part {
        width: 100%;
        height: 64px;
        overflow: hidden;
        background-color: #fff;
        padding: 20px;
        margin-top: 20px;
        position: relative;
        border-radius: 5px;
        img {
            position: absolute;
            top: 0;
            left: 20px;
            width: 168px;
            height: 64px;
        }
    }
}
}

@media (max-width: 1200px) {
    .logo-part {
        display: none;
    }
}

</style>


