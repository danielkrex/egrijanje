<script setup>

import { ref, onMounted } from 'vue'

const projects = ref([
      {
        img: "assets/img/egrijanje/egirjanje-vanjska-traka-01.jpg",       
      },
      {
        img: "assets/img/egrijanje/egirjanje-vanjska-traka-02.jpg",
      },
      {
        img: "assets/img/egrijanje/egirjanje-vanjska-traka-03.jpg",
      },
      {
        img: "assets/img/egrijanje/egirjanje-vanjska-traka-04.jpg",
      },
      {
        img: "assets/img/egrijanje/egirjanje-vanjska-traka-05.jpg",
      },
      {
        img: "assets/img/egrijanje/egirjanje-vanjska-traka-06.jpg",
      }    
    ]);

onMounted(() => {         
    
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
                    <h6>GRIJANJE EKSTERIJERA</h6>
                    <h2>Aluminijske trake za vanjske uvijete</h2>
                    <p>Projektirane za maksimalnu izdržljivost, naše 12V aluminijske trake učinkovito sprječavaju nakupljanje snijega i stvaranje leda. Zahvaljujući niskonaponskoj tehnologiji i vrhunskoj otpornosti materijala, osiguravaju pouzdan rad i energetsku učinkovitost godinama.</p>
                  </div>
            </div>
        </div>
        <div class="row mt-30">
            <div class="project-slider owl-carousel">
                <div class="project-bg" v-for="(project, index) in projects" :key="index">
                    <img :src="project.img" alt="" />
                </div>                               
            </div>
        </div>
    </div>
</div>

</template>