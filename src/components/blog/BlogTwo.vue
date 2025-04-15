<script setup>

import axios from 'axios'
import { onMounted, ref, onUpdated } from 'vue'

const blogs = ref([])

onMounted(async () => {
    const { data: fetchedBlogs } = await axios.get('/data/blog_two.json')
    blogs.value = fetchedBlogs.blogs
})


onUpdated(() => {         

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
                <router-link :to="{name:'blog-details'}" class="single-blog-item wow fadeInUp" data-wow-delay=".2s"
                v-for="blog in blogs.slice(0,4)" :key="blog.id"
                >
                    <div class="blog-img">
                        <img :src="blog.img" alt="">
                    </div>
                    <div class="blog-content">                        
                        <div class="blog-info mt-0 mb-20">
                            <span>{{ blog.dated }}</span>
                            <span>{{ blog.cat }}</span>
                        </div>
                        <div class="blog-title">
                            <h4>{{ blog.title }}</h4>
                        </div>
                        
                        <p class="mt-20">{{ blog.content }}</p>
                    </div>
                </router-link>                
                </div>
            </div>
        </div>
    </div>

</template>