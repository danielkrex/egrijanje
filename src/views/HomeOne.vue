<script setup>
import {HeaderOne, HeaderTop, HeroOne, ServicesFour, ProductDescriptionSection, OrderNowSection, VideoOne, ProjectProizvodnja } from '@/components';
</script>

<template>
    <HeaderTop/>
    <HeaderOne/>
    <HeroOne/>
    <ServicesFour/>
    <ProductDescriptionSection/>
    <ProjectProizvodnja />
    <div class="blog-section section-padding">
        <div class="section-title mb-0" style="text-align: center">
          <h2 style="width: 100%">Zanima vas postupak ugradnje?</h2>
          <p style="width: 100%; max-width: 700px; margin: 0 auto; margin-top: 30px;">Pogledajte jednostavan video vodič kroz cijeli postupak ugradnje našeg 12V električnog podnog grijanja – od pripreme podloge do spajanja na napajanje i testiranja sustava.</p>
        </div>
      </div>
    <VideoOne/>
    <div style="background-color: #f5f5f5; padding: 50px 0;"></div>
    <OrderNowSection/>
</template>

