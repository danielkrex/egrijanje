<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';

import { onMounted } from "vue";

onMounted(() => {     
    
$("[data-background").each(function () {
$(this).css(
    "background-image",
    "url( " + $(this).attr("data-background") + "  )"
);
});
   
});


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
     <!-- Faq Section  -->

     <div class="faq-section gray-bg section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8 mb-50">
                    <div class="cp-custom-accordion">
                        <div class="accordions" id="accordionExample">
                            <div class="accordion-items">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-buttons" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What services do architects provide?
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-items">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    At what point in my project should I involve an architect?
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-items">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do I find the right architect for my project?
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-items">
                                <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-buttons collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Don't architects add substantial cost to a project?
                                </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                                </div>
                                </div>
                            </div>
                            
                            </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>

    <!-- Mission Section  -->
    <div class="mission-section pt-90 pb-90" data-background="/assets/img/mission-bg.jpg">
        <div class="overlay-5"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10 col-lg-10 col-md-10 text-center">
                    <div class="section-title">
                        <h6 class="text-white">Our Mission</h6>
                        <h2 class="text-white">Custom solutions, <span>unique</span> manufacturing process & quality, crafted by <span>skill</span></h2>                    
                    </div>
                    <div class="author-info">
                        <h5 class="text-white">Piter Bowman</h5>
                        <h6 class="text-white">Business CEO</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

