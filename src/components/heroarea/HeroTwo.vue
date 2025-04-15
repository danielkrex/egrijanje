<script setup>

import { onMounted } from "vue";

onMounted(() => {     
    
$("[data-background").each(function () {
$(this).css(
    "background-image",
    "url( " + $(this).attr("data-background") + "  )"
);
});

$(".video-play-btn").magnificPopup({
    type: "iframe",
});
   
});

</script>

<template>

<div class="hero-area hero-two theme-bg bg-cover d-flex align-items-center" data-background="/assets/img/hero-bg.jpg">
        <div class="overlay-1"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-7 col-lg-7 col-md-8">
                    <div class="hero-area-content">
                        <div class="section-title">
                            <h6 class="text-white fadeInDown animated" data-wow-delay="200ms">Welcome to Roofix</h6>
                            <h1 class="text-white wow fadeInDown animated" data-wow-delay="300ms">Crafting Excellence Roofing Through Innovation</h1>
                        </div>                            
                        <p class="text-white mt-30 wow fadeInDown animated" data-wow-delay="400ms">We have been operating for over a decade, providing top-notch services to our clients and building a strong track record</p>
                        <div class="hero-btn mt-40 wow fadeInUp animated" data-wow-delay="500ms">
                            <router-link :to="{name:'services'}" class="theme-btn mr-35">Our Services</router-link>                            
                            <div class="video-wrap d-inline-flex align-items-center">
                                <a href="https://www.youtube.com/watch?v=hvSq38FChGU" class="video-play-btn mfp-iframe"><i class="fa-solid fa-play"></i></a>
                                <span class="text-white">See How It Works</span>
                            </div>
                        </div>
                    </div>
                </div>                   
            </div>
        </div>
    </div>

</template>