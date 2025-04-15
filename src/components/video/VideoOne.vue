<script setup>

import { onMounted } from "vue";

onMounted(() => {         

$(".video-play-btn").magnificPopup({
    type: "iframe",
});
   
});

</script>

<template>

<div class="video-section">
        <div class="overlay"></div>
        <div class="video-inner-box">            
            <div class="play-btn">
                <a href="https://www.youtube.com/watch?v=hvSq38FChGU" class="video-play-btn mfp-iframe"><i class="fa-solid fa-play"></i></a>
            </div>
        </div>
    </div>

</template>