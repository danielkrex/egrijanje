<script setup>

import { onMounted } from "vue";

onMounted(() => {         

  $(".client-wrap").owlCarousel({
    loop: true,
    items: 5,
    dots: true,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    touchDrag: true,
    mouseDrag: true,
    margin: 30,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
      },
      768: {
        items: 3,
        nav: false,
        dots: false,
      },
      1100: {
        items: 5,
        nav: false,
        dots: true,
      },
    },
  });
   
});

</script>

<template>

<div class="client-section section-padding pt-40">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12">
                <div class="client-wrap owl-carousel">
                    <div class="single-client">
                        <a href="#"><img src="/assets/img/client/1.jpg" alt=""></a>
                    </div>
                    <div class="single-client">
                        <a href="#"><img src="/assets/img/client/2.jpg" alt=""></a>
                    </div>
                    <div class="single-client">
                        <a href="#"><img src="/assets/img/client/3.jpg" alt=""></a>
                    </div>
                    <div class="single-client">
                        <a href="#"><img src="/assets/img/client/4.jpg" alt=""></a>
                    </div>
                    <div class="single-client">
                        <a href="#"><img src="/assets/img/client/5.jpg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>