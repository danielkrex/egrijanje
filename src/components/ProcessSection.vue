<script setup>

</script>

<template>

<div class="process-section section-padding pt-0">
        <div class="container">
            <div class="row">
                <div class="row justify-content-center">
                    <div class="col-xl-8 text-center">
                        <div class="section-title">
                            <h6>What We Offer</h6>
                            <h2>Working Process in 3 Steps</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-5 justify-content-center">
                <nav>
                    <div class="nav project-list justify-content-center" role="tablist">                        
                        <button class="nav-link active" id="discovery-tab" data-bs-toggle="tab" data-bs-target="#discovery" type="button" role="tab" aria-controls="discovery" aria-selected="false">Planning</button>
                        <button class="nav-link" id="design-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="design" aria-selected="false">Collection</button>
                        <button class="nav-link" id="implementation-tab" data-bs-toggle="tab" data-bs-target="#implementation" type="button" role="tab" aria-controls="implementation" aria-selected="false">Implementation</button>                        
                        
                    </div>
                </nav>
                <div class="tab-content mt-60" id="nav-tabContent">                   
                    <div class="tab-pane fade show active" id="discovery" aria-labelledby="discovery-tab" tabindex="0">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="process-content-wrap">
                                    <div class="section-title">
                                        <h6>Step 1</h6>
                                        <h2>Meeting clients & planning concept</h2>
                                    </div>
                                    <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
                                    <router-link :to="{name:'service-details'}" class="theme-btn mt-30">Read More</router-link>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="process-bg-wrap">
                                    <img src="/assets/img/process/1-1.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>                                            
                    <div class="tab-pane fade show" id="design" aria-labelledby="design-tab" tabindex="0">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="process-content-wrap">
                                    <div class="section-title">
                                        <h6>Step 2</h6>
                                        <h2>Testing material <br> with equipment</h2>
                                    </div>
                                    <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
                                    <router-link :to="{name:'service-details'}" class="theme-btn mt-30">Read More</router-link>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="process-bg-wrap">
                                    <img src="/assets/img/process/1-2.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>                                            
                    <div class="tab-pane fade show" id="implementation" aria-labelledby="implementation" tabindex="0">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="process-content-wrap">
                                    <div class="section-title">
                                        <h6>Step 3</h6>
                                        <h2>Installation Roofing Service Smoothly</h2>
                                    </div>
                                    <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
                                    <router-link :to="{name:'service-details'}" class="theme-btn mt-30">Read More</router-link>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="process-bg-wrap">
                                    <img src="/assets/img/process/1-3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>                                            
                                                                
                </div>
            </div>
        </div>
    </div>

</template>