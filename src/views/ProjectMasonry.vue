<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project Masonry -->
    <div id="project-masonry" class="section-padding" data-scroll-index="2">
        <div class="container">           
            <div class="row">
                <ul id="menu-filter" class="project-menu mb-0">
                    <li class="list-inline-item">
                        <a class="active" data-filter="*">All Project</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="" data-filter=".installation">Installation</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="" data-filter=".repair">Repair</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="" data-filter=".inspection">Inspection</a>
                    </li>
                    <li class="list-inline-item">
                        <a class="" data-filter=".renovation">Renovation</a>
                    </li>
                </ul>
            </div>
            <div class="row project-filter mt-30">
                <div class="col-lg-4 col-md-6 project-item installation">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/1.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Installation</h4>
                                <p class="mb-3">installation</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item repair">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/2.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Repair</h4>
                                <p class="mb-3">renovation</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item inspection">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/3.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Inspection</h4>
                                <p class="mb-3">inspection</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item grid-of-images installation inspection">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/4.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Inspection</h4>
                                <p class="mb-3">inspection</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item repair inspection">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/5.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Repair</h4>
                                <p class="mb-3">repair</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item renovation installation">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/6.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Renovation</h4>
                                <p class="mb-3">renovation</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item renovation">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/7.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Placement</h4>
                                <p class="mb-3">Renovation</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item repair">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/8.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Roof Repair</h4>
                                <p class="mb-3">Repair</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-4 col-md-6 project-item renovation">
                    <router-link :to="{name:'project-details-right'}">
                        <div class="project-box">
                            <div class="project-img">
                                <img src="/assets/img/project/masonry/9.jpg" class="img-fluid mx-auto d-block" alt="" >
                            </div>
                            <div class="project-detail">
                                <h4 class="mb-0">Green Roof </h4>
                                <p class="mb-3">Renovation</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>

