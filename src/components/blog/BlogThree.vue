<script setup>

import { onMounted } from "vue";

onMounted(() => {         

$(".blog-carousel").owlCarousel({
    items: 3,
    dots: true,
    nav: false,
    loop: true,
    autoplay: false,
    margin: 40,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      1200: {
        items: 3,
        nav: false,
        dots: true,
      },

      990: {
        items: 3,
        nav: false,
        dots: true,
      },

      767: {
        items: 2,
        nav: false,
        dots: true,
      },

      575: {
        items: 2,
        nav: false,
        dots: true,
      },

      0: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  });
   
});

</script>

<template>

<div class="blog-section gray-bg section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 text-center">
                    <div class="section-title">
                        <h6>From Our Blog</h6>
                        <h2>Articles About Roofing</h2>
                    </div>
                </div>
            </div>
            <div class="row mt-30">
                <div class="blog-carousel owl-carousel">
                    <router-link :to="{name:'blog-details'}" class="single-blog-item wow fadeInUp" data-wow-delay=".2s">
                        <div class="blog-img">
                            <img src="/assets/img/blog/3-1.jpg" alt="">
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>Installation</span>
                            </div>
                            <div class="blog-title">
                                <h4>What Are All The Different Roof Tiles?</h4>
                            </div>
                            <div class="blog-info">
                                <span>November 30 2024</span>
                                <span>1 comment</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{name:'blog-details'}" class="single-blog-item wow fadeInUp" data-wow-delay=".4s">                        
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>Repairing</span>
                            </div>
                            <div class="blog-title">
                                <h4>How to start a metal fabrication business</h4>
                            </div>
                            <div class="blog-info">
                                <span>April 15 2024</span>
                                <span>1 comment</span>
                            </div>
                        </div>
                        <div class="blog-img">
                            <img src="/assets/img/blog/3-2.jpg" alt="">
                        </div>
                    </router-link>
                    <router-link :to="{name:'blog-details'}" class="single-blog-item wow fadeInUp" data-wow-delay=".6s">
                        <div class="blog-img">
                            <img src="/assets/img/blog/3-3.jpg" alt="">
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>Renovation</span>
                            </div>
                            <div class="blog-title">
                                <h4>A Complete Guide To The Slate Roofs</h4>
                            </div>
                            <div class="blog-info">
                                <span>April 8 2024</span>
                                <span>1 comment</span>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{name:'blog-details'}" class="single-blog-item wow fadeInUp" data-wow-delay=".8s">                        
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>Factory</span>
                            </div>
                            <div class="blog-title">
                                <h4>The Benefits of Buying Roofing Online</h4>
                            </div>
                            <div class="blog-info">
                                <span>April 2 2024</span>
                                <span>1 comment</span>
                            </div>
                        </div>
                        <div class="blog-img">
                            <img src="/assets/img/blog/3-4.jpg" alt="">
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>