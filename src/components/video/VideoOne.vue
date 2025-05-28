<script setup>

import { onMounted } from "vue";

onMounted(() => {         

// $(".video-play-btn").magnificPopup({
//     type: "iframe",
// });
   
});

</script>

<template>

<div class="video-section">
        <div class="overlay"></div>
        <div class="video-inner-box">            
            <div class="play-btn">
                <a href="https://youtu.be/2mmxKPrDHSg?si=YKDaWY-NMZBWaagv" target="_blank" class="video-play-btn mfp-iframe"><i class="fa-solid fa-play"></i></a>
            </div>
        </div>
    </div>

</template>

<style>
    .video-section{
        background-image: url("/assets/img/egrijanje/egrijanje-video-bkg.png") !important;
    }
</style>

