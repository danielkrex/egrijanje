<script setup>

</script>

<template>

<div class="price-section section-padding">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-7 text-center wow fadeInUp animated" data-wow-delay="200ms">
                <div class="section-title">
                    <h6>Our Pricing</h6>
                    <h2>Affordable Pricing Packages to your choice</h2>
                </div>
            </div>
        </div>
        <div class="row mt-30">
            <div class="col-xl-6 col-lg-6 wow fadeInLeft animated" data-wow-delay="200ms">
                <div class="price-tab-wrap gray-bg">
                    <div class="price-tab">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">Monthly</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="yearly-tab" data-bs-toggle="tab" data-bs-target="#yearly" type="button" role="tab" aria-controls="yearly" aria-selected="false" tabindex="-1">Yearly</button>
                            </li>                            
                        </ul>                                
                    </div> 
                    <div class="price-feat-list">
                        <ul>
                            <li><i class="fa-solid fa-circle-check"></i>Newly Roofing Installation</li>                                
                            <li><i class="fa-solid fa-circle-check"></i>Flexible Roofing Repair</li>
                            <li><i class="fa-solid fa-circle-check"></i>Best Quality Materials</li>
                            <li><i class="fa-solid fa-circle-check"></i>Professional Worker Engaged</li>                                
                        </ul>
                    </div>
                </div>                   
            </div>
            <div class="col-xl-6 col-lg-6 wow fadeInRight animated" data-wow-delay="400ms">
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade active show" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                        <div class="single-price-wrap">
                            <div class="price-amount">
                                <h2>$21<span>/month</span></h2>
                            </div>
                            <div class="price-title">
                                <h4>Basic</h4>
                            </div>
                            <div class="price-coupon">
                                <span>Save 20%</span>
                            </div>
                        </div>
                        <div class="single-price-wrap">
                            <div class="price-amount">
                                <h2>$19<span>/month</span></h2>
                            </div>
                            <div class="price-title">
                                <h4>Popular</h4>
                            </div>
                            <div class="price-coupon">
                                <span>Save 20%</span>
                            </div>
                        </div>
                        <div class="single-price-wrap">
                            <div class="price-amount">
                                <h2>$19<span>/month</span></h2>
                            </div>
                            <div class="price-title">
                                <h4>Standard</h4>
                            </div>
                            <div class="price-coupon">
                                <span>Save 20%</span>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                        <div class="single-price-wrap">
                            <div class="price-amount">
                                <h2>$224<span>/yearly</span></h2>
                            </div>
                            <div class="price-title">
                                <h4>Basic</h4>
                            </div>
                            <div class="price-coupon">
                                <span>Save 20%</span>
                            </div>
                        </div>
                        <div class="single-price-wrap">
                            <div class="price-amount">
                                <h2>$179<span>/yearly</span></h2>
                            </div>
                            <div class="price-title">
                                <h4>Popular</h4>
                            </div>
                            <div class="price-coupon">
                                <span>Save 20%</span>
                            </div>
                        </div>
                        <div class="single-price-wrap">
                            <div class="price-amount">
                                <h2>$129<span>/yearly</span></h2>
                            </div>
                            <div class="price-title">
                                <h4>Standard</h4>
                            </div>
                            <div class="price-coupon">
                                <span>Save 20%</span>
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>

        </div>
    </div>
</div>

</template>