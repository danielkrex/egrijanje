<script setup>
import { AboutOne, BreadCrumb, CallToAction, ClientSection, HeaderThree, ProcessSection, PromoSection, ServicesThree, TeamThree, VideoThree,  } from '@/components';


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>
    <AboutOne/>
    <ClientSection/>
    <VideoThree/>
    <ServicesThree/>
    <PromoSection/>
    <CallToAction/>
    <TeamThree/>
    
</template>

<style scoped>

.about-section.gray-bg{
    background: inherit;
}

.about-section.pt-200.pb-150 {
    padding-top: 120px;
    padding-bottom: 120px;
}

.cta-section.dark-bg {
    background: #FE574F;
}

.promo-section.pt-0 {
    padding-top: 120px !important;
}


</style>

