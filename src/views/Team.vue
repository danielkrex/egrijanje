<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';

import { onMounted } from "vue";

onMounted(() => {         

$(".odometer").appear(function (e) {
var odo = $(".odometer");
odo.each(function () {
    var countNumber = $(this).attr("data-count");
    $(this).html(countNumber);
});
});
   
});


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>

    <!-- Fun Fact Section  -->
    <div id="team-page" class="funfact-section section-padding">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="section-title">
                    <h6>Fact in Numbers</h6>
                    <h2>We develop & create global production</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div class="counter-content">
                    <div class="single-counter-item">
                        <h6>Years</h6>                                
                        <h1><span class="odometer" data-count="12">00</span>+</h1>
                        <p>Adipiscing elit, do eiusm.</p>
                    </div>
                    <div class="single-counter-item">
                        <h6>People</h6>                                
                        <h1><span class="odometer" data-count="100">000</span>+</h1>
                        <p>Sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="team-img-wrap">
                    <img src="/assets/img/team-img.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Team Section  -->

<div class="team-section gray-bg section-padding pb-90">
    <div class="container">        
        <div class="row gx-5">
            <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                <div class="single-team-member">
                    <div class="team-bg">
                        <img src="/assets/img/team/team-1.jpg" alt="">
                    </div>
                    <div class="team-hover-info">
                        <div class="team-title">
                            <h5>John Lewis</h5>
                            <span>Operator</span>
                        </div>                                    
                    </div>
                    <div class="social-icon">
                        <a href="#"><i class="lab la-facebook-f"></i></a>
                        <a href="#"><i class="lab la-instagram"></i></a>
                        <a href="#"><i class="lab la-linkedin-in"></i></a>
                        <a href="#"><i class="la la-skype"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".4s">
                <div class="single-team-member">
                    <div class="team-bg">
                        <img src="/assets/img/team/team-2.jpg" alt="">
                    </div>
                    <div class="team-hover-info">
                        <div class="team-title">
                            <h5>John Lewis</h5>
                            <span>Operator</span>
                        </div>                                    
                    </div>
                    <div class="social-icon">
                        <a href="#"><i class="lab la-facebook-f"></i></a>
                        <a href="#"><i class="lab la-instagram"></i></a>
                        <a href="#"><i class="lab la-linkedin-in"></i></a>
                        <a href="#"><i class="la la-skype"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                <div class="single-team-member">
                    <div class="team-bg">
                        <img src="/assets/img/team/team-3.jpg" alt="">
                    </div>
                    <div class="team-hover-info">
                        <div class="team-title">
                            <h5>John Lewis</h5>
                            <span>Operator</span>
                        </div>                                    
                    </div>
                    <div class="social-icon">
                        <a href="#"><i class="lab la-facebook-f"></i></a>
                        <a href="#"><i class="lab la-instagram"></i></a>
                        <a href="#"><i class="lab la-linkedin-in"></i></a>
                        <a href="#"><i class="la la-skype"></i></a>
                    </div>
                </div>
            </div>                
            <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                <div class="single-team-member">
                    <div class="team-bg">
                        <img src="/assets/img/team/team-4.jpg" alt="">
                    </div>
                    <div class="team-hover-info">
                        <div class="team-title">
                            <h5>John Lewis</h5>
                            <span>Operator</span>
                        </div>                                    
                    </div>
                    <div class="social-icon">
                        <a href="#"><i class="lab la-facebook-f"></i></a>
                        <a href="#"><i class="lab la-instagram"></i></a>
                        <a href="#"><i class="lab la-linkedin-in"></i></a>
                        <a href="#"><i class="la la-skype"></i></a>
                    </div>
                </div>
            </div>                
            <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                <div class="single-team-member">
                    <div class="team-bg">
                        <img src="/assets/img/team/team-5.jpg" alt="">
                    </div>
                    <div class="team-hover-info">
                        <div class="team-title">
                            <h5>John Lewis</h5>
                            <span>Operator</span>
                        </div>                                    
                    </div>
                    <div class="social-icon">
                        <a href="#"><i class="lab la-facebook-f"></i></a>
                        <a href="#"><i class="lab la-instagram"></i></a>
                        <a href="#"><i class="lab la-linkedin-in"></i></a>
                        <a href="#"><i class="la la-skype"></i></a>
                    </div>
                </div>
            </div>                
            <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                <div class="single-team-member">
                    <div class="team-bg">
                        <img src="/assets/img/team/team-6.jpg" alt="">
                    </div>
                    <div class="team-hover-info">
                        <div class="team-title">
                            <h5>John Lewis</h5>
                            <span>Operator</span>
                        </div>                                    
                    </div>
                    <div class="social-icon">
                        <a href="#"><i class="lab la-facebook-f"></i></a>
                        <a href="#"><i class="lab la-instagram"></i></a>
                        <a href="#"><i class="lab la-linkedin-in"></i></a>
                        <a href="#"><i class="la la-skype"></i></a>
                    </div>
                </div>
            </div>                
        </div>
    </div>
</div>
    
</template>

