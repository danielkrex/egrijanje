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
    
    <div class="header-area absolute-header">
        <div id="header-sticky">
            <div class="navigation">
                <div class="container-fluid">
                    <div class="header-inner-box">

                        <!-- Logo -->
                        <div class="logo">
                            <router-link class="navbar-brand" to="/home-3"><img src="/assets/img/logo-2.png" alt=""></router-link>
                        </div>

                        <!-- Main Menu  -->
                        <div class="main-menu d-none d-lg-block">
                            <ul>
                                <li class="active"><a class="navlink" href="#">Home</a>
                                    <ul class="sub-menu">
                                        <li><router-link class="active" :to="{name:'home'}">Home - One</router-link></li>                                        
                                        <li><router-link :to="{name:'home2'}">Home - Two</router-link></li>                                                                                
                                        <li><router-link :to="{name:'home3'}">Home - Three</router-link></li>                                                                                                                        
                                    </ul>
                                </li>
                                <li><a class="navlink" href="#">Pages</a>
                                    <ul class="sub-menu">
                                        <li><router-link :to="{name:'about'}">About Us</router-link></li>
                                        <li><router-link :to="{name:'services'}">Our Services</router-link></li>
                                        <li><router-link :to="{name:'team'}">Our Team</router-link></li>
                                        <li><router-link :to="{name:'price'}">Pricing</router-link></li>
                                        <li><router-link :to="{name:'faq'}">Faq</router-link></li>                                        
                                    </ul>
                                </li> 
                                <li><a class="navlink" href="#">Services</a>
                                    <ul class="sub-menu">
                                        <li><router-link :to="{name:'services'}">Services</router-link></li>
                                        <li><router-link :to="{name:'service-details'}">Service Details</router-link></li>                                        
                                    </ul>
                                </li>                               
                                <li><a class="navlink" href="#">Projects</a>
                                    <ul class="sub-menu">
                                        <li><router-link :to="{name:'project-standard'}">Standard</router-link></li>
                                        <li><router-link :to="{name:'project-metro'}">Metro Fullwidth</router-link></li>
                                        <li><router-link :to="{name:'project-grid'}">Grid</router-link></li>
                                        <li><router-link :to="{name:'project-list'}">List</router-link></li>
                                        <li><router-link :to="{name:'project-masonry'}">Masonry</router-link></li>
                                        <li><router-link :to="{name:'project-slider'}">Slider</router-link></li>
                                        
                                                    
                                        <li class="nav-item">
                                            <a href="#">Single Project <i class="las la-arrow-right"></i>
                                                <span class="sub-nav-toggler"></span>
                                            </a>
                                            <ul class="sub-menu-two">
                                                <li><router-link :to="{name:'project-details-left'}">Left Sidebar</router-link></li>
                                                <li><router-link :to="{name:'project-details-right'}">Right Sidebar</router-link></li>
                                                <li><router-link :to="{name:'project-details-gallery'}">Gallery</router-link></li>                                                
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="navlink" href="#">Blog</a>
                                    <ul class="sub-menu">
                                        <li><router-link :to="{name:'blog'}">Blogs</router-link></li>                                                
                                        <li><router-link :to="{name:'blog-details'}">Blog Details</router-link></li>                                                                                        
                                    </ul>
                                </li>
                                                                
                                <li><router-link :to="{name:'contact'}">Contact</router-link></li>                                                
                            </ul>
                        </div>

                        <div class="header-right">

                            <!-- Search Button  -->
                            <div class="search-trigger">
                                <i class="fal fa-search"></i>
                            </div>
                            <div class="contact-number d-none">
                                <div class="icon"><i class="las la-phone-volume"></i></div>
                                <div class="title"><h4>1 800 458 56 97</h4></div>
                            </div>
                            <!-- Header Button -->
                            <router-link :to="{name:'contact'}" class="theme-btn d-none d-lg-inline-block">Get a Quote</router-link>

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