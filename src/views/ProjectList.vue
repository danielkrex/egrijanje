<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project List  -->
    <div class="project-list-wrap section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-img">
                        <img src="/assets/img/project/list/1.jpg" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-content">
                        <div class="section-title">
                            <h6>TILE GUARD</h6>
                            <h2>Roof Installation</h2>
                        </div>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                        <router-link :to="{name:'project-details-gallery'}" class="read_more_link">
                            <span class="link_text">Read More</span>
                            <span class="link_icon"><i class="las la-arrow-right"></i></span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row align-items-center mt-60">
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-img">
                        <img src="/assets/img/project/list/2.jpg" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-content">
                        <div class="section-title">
                            <h6>METAL ARMOR</h6>
                            <h2>Roof Inspection</h2>
                        </div>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                        <router-link :to="{name:'project-details-gallery'}" class="read_more_link">
                            <span class="link_text">Read More</span>
                            <span class="link_icon"><i class="las la-arrow-right"></i></span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row align-items-center mt-60">
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-img">
                        <img src="/assets/img/project/list/3.jpg" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-content">
                        <div class="section-title">
                            <h6>SEAL SHIELD</h6>
                            <h2>Roof Renovation</h2>
                        </div>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                        <router-link :to="{name:'project-details-gallery'}" class="read_more_link">
                            <span class="link_text">Read More</span>
                            <span class="link_icon"><i class="las la-arrow-right"></i></span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row align-items-center mt-60">
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-img">
                        <img src="/assets/img/project/list/4.jpg" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="project-list-content">
                        <div class="section-title">
                            <h6>ROOF ARMOR</h6>
                            <h2>Roof Renewal</h2>
                        </div>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>
                        <router-link :to="{name:'project-details-gallery'}" class="read_more_link">
                            <span class="link_text">Read More</span>
                            <span class="link_icon"><i class="las la-arrow-right"></i></span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

