<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();

onMounted(() => {
  // Metis Menu
  $("#mobile-menu").metisMenu();

  $("#hamburger").on("click", function () {
    $(".mobile-nav").addClass("show");
    $(".overlay").addClass("active");
  });

  $(".close-nav").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });

  $(".overlay").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });
});
</script>

<template>
  <!-- Mobile Menu -->
  <div class="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
      <div class="mobile-nav-wrap">
          <div id="hamburger">
              <i class="las la-bars"></i>
          </div>
          <!-- mobile menu - responsive menu  -->
          <div class="mobile-nav">
              <button type="button" class="close-nav">
                  <i class="las la-times-circle"></i>
              </button>
              <nav class="sidebar-nav">
                  <ul class="metismenu" id="mobile-menu">
                    <li><router-link :to="{name:'home'}">Početna</router-link></li>     
                    <li><router-link :to="{name:'product'}">Zašto eGrijanje?</router-link></li>     
                    <li><router-link :to="{name:'opis-proizvoda'}">Opis proizvoda</router-link></li>     
                    <li><router-link :to="{name:'team'}">O nama</router-link></li>     
                    <li><router-link :to="{name:'contact'}">Kontakt</router-link></li>     

                  </ul>
              </nav>
              <div class="action-bar">
                  <a href="mailto:info@e-grijanje.hr"><i class="las la-envelope"></i>info@e-grijanje.hr</a>
                  <a href="tel:+385959152692"><i class="fal fa-phone"></i>+385 95 915 2692</a>
                  <router-link :to="{name:'contact'}" class="theme-btn">Zatraži ponudu</router-link>
              </div>
          </div>
      </div>                            
  </div>
</template>
