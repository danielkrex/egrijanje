<script setup>

import { onMounted } from "vue";

onMounted(() => {         

$(".odometer").appear(function (e) {
var odo = $(".odometer");
odo.each(function () {
    var countNumber = $(this).attr("data-count");
    $(this).html(countNumber);
});
});
   
});


</script>

<template>

<div class="faq-section section-padding pt-80">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
                <div class="section-title">
                    <h6>FAQ</h6>                        
                    <h2>Roofing Excellence <br> Above and Beyond</h2>
                </div>
                <div class="cp-custom-accordion">
                    <div class="accordions" id="accordionExample">
                        <div class="accordion-items">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span></span>How can I apply for a job?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-items">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span></span>Which specialties are requested today?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-items">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span></span>Do you produce products worldwide?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 text-lg-end">
                <div class="counter-wrap">
                    <div class="counter-img">
                        <img src="/assets/img/counter-bg.jpg" alt="">
                    </div>
                    <div class="counter-content">
                        <div class="single-counter-item dark-bg">
                            <h6>Happy Clients</h6>                                
                            <h1><span class="odometer" data-count="124">000</span>+</h1>
                            <p>Adipiscing elit, do eiusm.</p>
                        </div>
                        <div class="single-counter-item theme-bg">
                            <h6>Year of Experience</h6>                                
                            <h1><span class="odometer" data-count="16">00</span>+</h1>
                            <p>Sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>