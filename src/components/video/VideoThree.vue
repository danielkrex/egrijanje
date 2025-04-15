<script setup>

import { onMounted } from "vue";

onMounted(() => {         

$(".video-play-btn").magnificPopup({
    type: "iframe",
});
   
});

</script>

<template>

    <div id="video-3" class="container video-section" data-background="/assets/img/video-bg-2.jpg">        
        <div class="video-inner-box">            
            <div class="play-btn">
                <a href="https://www.youtube.com/watch?v=E1-Vtm6UJxg" class="video-play-btn mfp-iframe"><i class="las la-play"></i></a>
            </div>
        </div>    
    </div>

</template>