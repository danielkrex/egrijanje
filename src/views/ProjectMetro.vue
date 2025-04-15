<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project Metro  -->
    <div id="project-3" class="project-section section-padding">
        <div class="row gx-0">
            <div class="col-xl-6 col-lg-6 col-md-6">
                <router-link :to="{name:'project-details-right'}" class="single-project-wrap big">
                    <img src="/assets/img/project/metro/1.jpg" alt="">
                    <div class="details">
                        <div class="info">
                            <h5>Roof Install</h5>
                            <h6>Tile Guard</h6>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="row gx-0">
                    <div class="col-lg-6">
                        <router-link :to="{name:'project-details-right'}" class="single-project-wrap small">
                            <img src="/assets/img/project/metro/2.jpg" alt="">
                            <div class="details">
                                <div class="info">
                                    <h5>Roof Repair</h5>
                                    <h6>Rain Guard</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-6">
                        <router-link :to="{name:'project-details-right'}" class="single-project-wrap small">
                            <img src="/assets/img/project/metro/3.jpg" alt="">
                            <div class="details">
                                <div class="info">
                                    <h5>Roof Inspection</h5>
                                    <h6>Strom Shield</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-lg-12 d-none d-lg-block">
                        <router-link :to="{name:'project-details-right'}" class="single-project-wrap wide">
                            <img src="/assets/img/project/metro/4.jpg" alt="">
                            <div class="details">
                                <div class="info">
                                    <h5>Roof Renovation</h5>
                                    <h6>Metal Armor</h6>
                                </div>
                            </div>
                        </router-link>
                    </div>                    
                </div>
            </div>            
        </div>
    </div>
    
</template>

