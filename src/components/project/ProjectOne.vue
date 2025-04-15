<script setup>

</script>

<template>

<div class="project-section project-three section-padding pt-0">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-6 text-center wow fadeInUp animated" data-wow-delay="200ms">
                <div class="section-title mb-0">
                    <h6>Recent Project</h6>
                    <h2>We Provide you the Highest Quality Work</h2>
                </div>
            </div>
            
        </div>
        <div class="row gy-4 mt-40">
            <div class="col-xl-6 col-lg-6 col-md-6">
                <router-link :to="{name:'project-details-right'}" class="single-project-wrapper">
                    <div class="project-bg">
                        <img src="/assets/img/project/1-1.jpg" alt="">
                        <div class="project-details">
                            <h4>Roof Installation</h4>
                            <p>Storm Shield</p>
                        </div>
                    </div>                        
                </router-link>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
                <router-link :to="{name:'project-details-right'}" class="single-project-wrapper">
                    <div class="project-bg">
                        <img src="/assets/img/project/1-2.jpg" alt="">
                        <div class="project-details">
                            <h4>Roof Repair</h4>
                            <p>Roof Preparation Project</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
                <router-link :to="{name:'project-details-right'}" class="single-project-wrapper">
                    <div class="project-bg">
                        <img src="/assets/img/project/1-3.jpg" alt="">
                        <div class="project-details">
                            <h4>Roof Replacement</h4>
                            <p>Leak Detection</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
                <router-link :to="{name:'project-details-right'}" class="single-project-wrapper">
                    <div class="project-bg">
                        <img src="/assets/img/project/1-4.jpg" alt="">
                        <div class="project-details">
                            <h4>Roof Inspection</h4>
                            <p>Total Roof Restoration</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 d-none d-lg-block">
                <router-link :to="{name:'project-details-right'}" class="single-project-wrapper">
                    <div class="project-bg">
                        <img src="/assets/img/project/1-5.jpg" alt="">
                        <div class="project-details">
                            <h4>Roof Installation</h4>
                            <p>Felt Roofing </p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</div>

</template>