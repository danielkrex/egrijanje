<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MobileMenu from "./MobileMenu.vue";
import SearchPopup from "../common/SearchPopup.vue";

const route = useRoute();

onMounted(() => {
  // Sticky Header Js

  let windowOn = $(window)

  windowOn.on('scroll', function () {
    let scroll = windowOn.scrollTop()
    if (scroll < 50) {
      $('#header-sticky').removeClass('header-sticky')
    } else {
      $('#header-sticky').addClass('header-sticky')
    }
  })

  // Active & Remove Class

  $('.sub-menu ul li').on('click', function () {
    $('.sub-menu').removeAttribute('style')
    $(this).addClass('active')
  });

  $('a.nav-link').on('mouseover', function () {
    $('a.nav-link').removeClass('active')
    $(this).addClass('active')
  });  

  $(".menu-trigger").on("click", function () {
    $(".extra-info,.offcanvas-overly").addClass("active");
    return false;
  });

  $(".main-menu ul > li > ul li a").on("mouseover", function () {
    $(".main-menu ul > li > ul li a").removeClass("active");
    $(this).addClass("active");
  });

})

</script>

<template>
    <!-- Header Area  -->
    <div class="header-area">
        <div id="header-sticky">
            <div class="navigation">
                <div class="container-fluid">
                    <div class="header-inner-box">

                        <!-- Logo -->
                        <div class="logo">
                            <router-link class="navbar-brand" to="/"><img src="/assets/img/logo.png" alt=""></router-link>
                        </div>

                        <!-- Main Menu  -->
                        <div class="main-menu d-none d-lg-block">
                            <ul>
                                <li :class="route.name === 'home' ? 'active' : ''">
                                    <router-link class="navlink" :to="{ name: 'home' }">Početna</router-link>
                                </li>
                                <li :class="route.name === 'zasto-egrijanje' ? 'active' : ''">
                                    <router-link class="navlink" :to="{ name: 'zasto-egrijanje' }">Zašto eGrijanje?</router-link>
                                </li>
                                <li :class="route.name === 'opis-proizvoda' ? 'active' : ''">
                                    <router-link class="navlink" :to="{ name: 'opis-proizvoda' }">Opis proizvoda</router-link>
                                </li>
                                <li :class="route.name === 'onama' ? 'active' : ''">
                                    <router-link class="navlink" :to="{ name: 'onama' }">O nama</router-link>
                                </li>

                                <li :class="route.name === 'contact' ? 'active' : ''">
                                    <router-link class="navlink" :to="{ name: 'contact' }">Kontakt</router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="header-right">

                            <!-- Search Button  -->
                            <!-- <div class="search-trigger">
                                <i class="fal fa-search"></i>
                            </div> -->
                            <div class="contact-number d-none">
                                <div class="icon"><i class="las la-phone-volume"></i></div>
                                <div class="title"><h4>1 800 458 56 97</h4></div>
                            </div>
                            <!-- Header Button -->
                            <router-link :to="{name:'contact'}" class="theme-btn d-none d-lg-inline-block">Zatraži ponudu</router-link>

                        </div>
                        <!-- Mobile Menu -->
                        <MobileMenu/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <SearchPopup />
    
</template>