<script setup>

import { onMounted } from "vue";

onMounted(() => {         

    $("#bar1").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });
   
});

</script>

<template>

<div class="promo-section section-padding pt-0">
    <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="client-content-wrap">
                    <div class="section-title">
                        <h6>Custom Order</h6>
                        <h2>We Are Committed to Best Service</h2>
                    </div>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor incididunt ut labore et dolore sed do magna aliqua.</p>
                    <div class="contact-info-wrap">
                        <div class="contact-icon">
                            <i class="las la-envelope"></i>
                        </div>
                        <div class="contact-text">
                            <p>info@roofix.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="progress-bar-area">
                    <div class="single-bar-item">
                        <h5>Felt Roofing</h5>
                        <div class="bar-parcentage">90%</div>							
                    </div>
                    <div id="bar1" class="barfiller">						
                        <span class="fill" data-percentage="90"></span>
                    </div>

                    <div class="single-bar-item">
                        <h5>Roof Restoration</h5>
                        <div class="bar-parcentage">70%</div>							
                    </div>
                    <div id="bar2" class="barfiller">								
                        <span class="fill" data-percentage="70"></span>
                    </div>

                    <div class="single-bar-item">
                        <h5>Chimney Repair</h5>
                        <div class="bar-parcentage">80%</div>							
                    </div>
                    <div id="bar3" class="barfiller">								
                        <span class="fill" data-percentage="80"></span>
                    </div>
                    
                </div>
            </div>
        </div>        
    </div>
</div>

</template>