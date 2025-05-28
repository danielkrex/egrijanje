<script setup>

import { onMounted } from "vue";

onMounted(() => {         

$(".video-play-btn").magnificPopup({
    type: "iframe",
});
   
});

</script>

<template>

    <div id="video-3" class="container video-section" data-background="/assets/img/egrijanje/egrijanje-video-bkg.png">       
        <div class="video-inner-box">            
            <div class="play-btn">
                <a href="https://youtu.be/2mmxKPrDHSg?si=YKDaWY-NMZBWaagv" class="video-play-btn mfp-iframe"><i class="las la-play"></i></a>
            </div>
        </div>    
    </div>

</template>