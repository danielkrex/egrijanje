<script setup>

import { onMounted } from "vue";

onMounted(() => {         

    $("#bar1").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#FE574F",
    duration: 5000,
  });
   
});

</script>

<template>

<div class="promo-section section-padding order-now-section">
    <div class="picture-bkg-overlay"></div>
    <div class="container">
        <div class="row align-items-end">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="client-content-wrap text-center">
                    <div class="section-title text-center">
                        <h6>Kontaktirajte nas</h6>
                        <h2>Zatražite ponudu za električno podno grijanje</h2>
                    </div>
                    <p>Ispunite kratki obrazac i brzo ćete dobiti ponudu zajedno s detaljima o pravom proizvodu za vaš dom ili projekt.</p>
                    
                    <router-link :to="{name:'contact'}" class="theme-btn d-none d-lg-inline-block">Zatraži ponudu</router-link>
                    <h4 class="mb-3 pt-50">Trebate još brži odgovor?</h4>
                    <p>Nazovite nas na <a class="tel-link" href="tel:+385959152692">+385 95 915 2692</a> i rado ćemo vam pomoći.</p>
                </div>
            </div>
        </div>        
    </div>
</div>

</template>

<style scoped>

.order-now-section {
    position: relative;
}

.picture-bkg-overlay {
    background-image: url('/assets/img/egrijanje/egrijanje-work-1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.picture-bkg-overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.65);
    z-index: -1;
}

.tel-link {
    color: #FE574F;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
}

</style>
