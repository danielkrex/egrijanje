<script setup>

</script>


<template>

<div class="about-section gray-bg section-padding pt-200 pb-150">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
                    <div class="about-img-wrap">
                        <div class="image-one wow fadeInUp" data-wow-delay=".2s">
                            <img src="/assets/img/about/about-1-1.jpg" alt="">
                        </div>                        
                        <div class="image-two wow fadeInUp" data-wow-delay=".4s">
                            <img src="/assets/img/about/about-1-2.jpg" alt="">
                        </div>                        
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 wow fadeInUp animated" data-wow-delay="300ms">
                    <div class="about-content-wrap">
                        <div class="section-title">
                            <h6>About Us</h6>
                            <h2>We make high quality <br> roofing for your homes</h2>                            
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies the dictum facilisis thr sem. Imperdiet massa turpis sit Lorem ipsum dolor sit amet </p>
                        <div class="about-list-item">
                            <ul>
                                <li><i class="fa-solid fa-circle-check"></i>Professional Worker </li>
                                <li><i class="fa-solid fa-circle-check"></i>Trusted Company </li>
                                <li><i class="fa-solid fa-circle-check"></i>Best Quality Materials</li>
                                <li><i class="fa-solid fa-circle-check"></i>Affordable Price</li>
                            </ul>
                        </div>
                        <router-link :to="{name:'about'}" class="theme-btn mt-40">Learn More</router-link>
                    </div>                    
                </div>
            </div>
        </div>
    </div>

</template>