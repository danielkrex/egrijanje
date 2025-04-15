<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project Details  -->
    <div class="project-details-wrap section-padding">
        <div class="container">
            <div class="row gx-5">
                <div class="col-xl-5 col-lg-5">
                    <div class="project-details-info">
                        <h3>Roof Repair Project</h3>
                        <p>Dicta sunt explicabo enim ipsam</p>
                        <div class="row single-details-item gy-3 mt-30">
                            <div class="col-4">
                                <h5>Client</h5>
                            </div>
                            <div class="col-6">
                                <span>Good invest</span>
                            </div>
                            <div class="col-4">
                                <h5>Year</h5>
                            </div>
                            <div class="col-6">
                                <span>February, 2024</span>
                            </div>
                            <div class="col-4">
                                <h5>Author</h5>
                            </div>
                            <div class="col-6">
                                <span>Jim Rayan</span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7">
                    <div class="project-details-inner">
                        <div class="project-feature-img">
                            <img src="/assets/img/project/project-feature-img-2.jpg" alt="">
                        </div>
                        <div class="project-feature-img mt-30">
                            <img src="/assets/img/project/project-feature-img-3.jpg" alt="">
                        </div>
                        <div class="project-feature-img mt-30">
                            <img src="/assets/img/project/project-feature-img-4.jpg" alt="">
                        </div>
                        
                    </div>
                </div>                
            </div>
            <div class="row mt-100">
                <div class="nav-links">
                    <div class="nav-previous">
                        <router-link :to="{name:'project-details-gallery'}"><span class="meta-nav"><i class="las la-arrow-left"></i>Prev Project</span></router-link>
                    </div>
                    <div class="nav-next">
                        <router-link :to="{name:'project-details-right'}"><span class="meta-nav">Next Project<i class="las la-arrow-right"></i></span> </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

