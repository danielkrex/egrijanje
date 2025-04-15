<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <!-- Project Details  -->
    <div class="project-details-wrap section-padding">
        <div class="container">
            <div class="row align-items-end mb-60">
                <div class="col-xl-9 col-lg-9">
                    <div class="project-desc">
                        <h3>Roofing Inspection</h3>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo.</p>                        
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3">
                    <div class="row single-details-item gy-3 mt-30">
                        <div class="col-4">
                            <h5>Client</h5>
                        </div>
                        <div class="col-6">
                            <span>New Plant</span>
                        </div>
                        <div class="col-4">
                            <h5>Year</h5>
                        </div>
                        <div class="col-6">
                            <span>January, 2024</span>
                        </div>
                        <div class="col-4">
                            <h5>Author</h5>
                        </div>
                        <div class="col-6">
                            <span>Anna Lewis</span>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            <div class="row gx-5">                
                <div class="col-xl-12 col-lg-12">
                    <div class="project-details-inner">
                        <div class="project-feature-img">
                            <img src="/assets/img/project/project-feature-img-5.jpg" alt="">
                        </div>
                        <div class="project-details-content">
                            <h3>Altogether Better</h3>
                            <p>Aenean interdum purus vitae purus laoreet, eu egestas augue dictum. Nunc tincidunt felis ullamcorper dolor euismod porttitor at tincidunt arcu. Ut molestie cursus sapien, a auctor quam viverra ac. Sed non blandit mi. Proin pharetra dui in molestie sollicitudin. Vivamus ornare lorem in tempus facilisis. Quisque tristique erat interdum augue sodales fringilla.</p>                            
                        </div>
                        <div class="project-image-gallery">
                            <div class="row">
                                <div class="col-6">
                                    <img src="/assets/img/project/gallery-img-1.jpg" alt="">
                                </div>
                                <div class="col-6">
                                    <img src="/assets/img/project/gallery-img-2.jpg" alt="">
                                </div>
                                <div class="col-12 mt-30">
                                    <img src="/assets/img/project/gallery-img-3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <p class="mt-30"> Phasellus euismod, dolor at efficitur condimentum, neque nulla viverra lectus, varius bibendum quam sapien dignissim mi. Maecenas rhoncus leo turpis, sit amet aliquet lectus viverra sed. Aliquam sodales commodo imperdiet. Morbi tincidunt ante interdum urna commodo tempor vitae id orci. Suspendisse id orci ut erat convallis iaculis luctus vel diam. Donec felis eros, consectetur sed ornare quis, ultrices a libero. Vestibulum consectetur purus id libero euismod maximus.</p>
                    </div>
                </div>                
            </div>
            <div class="row mt-100">
                <div class="nav-links">
                    <div class="nav-previous">
                        <router-link :to="{name:'project-details-right'}"><span class="meta-nav"><i class="las la-arrow-left"></i>Prev Project</span></router-link>
                    </div>
                    <div class="nav-next">
                        <router-link :to="{name:'project-details-left'}"><span class="meta-nav">Next Project<i class="las la-arrow-right"></i></span> </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

