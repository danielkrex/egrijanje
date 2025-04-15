<script setup>

import axios from 'axios'
import { onBeforeMount, ref, onUpdated } from 'vue'

const testimonials = ref([]);

onBeforeMount(async () => {
  const { data: fetchedTestimonials } = await axios.get("/data/testimonials.json");
  testimonials.value = fetchedTestimonials.testimonials;
});

onUpdated(() => {         

$(".testimonial-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
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

<div id="testimonial-1" class="testimonial-area gray-bg section-padding pb-100">    
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center ">
                <div class="section-title">
                    <h6>Testimonial</h6>
                    <h2>Happy Client Says <br>About Us</h2>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="testimonial-carousel owl-carousel">

                    <div class="single-testimonial-item"
                    v-for="t in testimonials.slice(0,3)" :key="t.id"
                    >
                        <div class="testimonial-icon">
                            <i class="las la-quote-left"></i>
                        </div>
                        <p>"{{ t.content }}"</p>
                        <div class="author-wrap">
                            <div class="author-thumb">
                                <img :src="t.reviewer_img" alt="">
                            </div>
                            <div class="author-desc">
                                <h5>{{t.reviewer_name}}</h5><span>{{ t.reviewer_designation }}</span>
                            </div>
                        </div>                                                        
                    </div>
                </div>
            </div>
        </div>
    </div>    
</div>

</template>