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
                      <li><a class="has-arrow" href="#">Homes</a>
                          <ul class="sub-menu">
                            <li><router-link class="active" :to="{name:'home'}">Home - One</router-link></li>                                        
                            <li><router-link :to="{name:'home2'}">Home - Two</router-link></li>                                                                                
                            <li><router-link :to="{name:'home3'}">Home - Three</router-link></li>                                                                                                                        
                          </ul>
                      </li>
                      <li><a class="has-arrow" href="#">Pages</a>
                          <ul class="sub-menu">
                            <li><router-link :to="{name:'about'}">About Us</router-link></li>
                            <li><router-link :to="{name:'services'}">Our Services</router-link></li>
                            <li><router-link :to="{name:'team'}">Our Team</router-link></li>
                            <li><router-link :to="{name:'price'}">Pricing</router-link></li>
                            <li><router-link :to="{name:'faq'}">Faq</router-link></li>
                          </ul>
                      </li>
                      <li><a class="has-arrow" href="#">Services</a>
                        <ul class="sub-menu">
                            <li><router-link :to="{name:'services'}">Services</router-link></li>
                            <li><router-link :to="{name:'service-details'}">Service Details</router-link></li>                                        
                        </ul>
                    </li>
                      <li><a class="has-arrow" href="#">Projects</a>
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
                      <li><a class="has-arrow" href="#">Blog</a>
                          <ul class="sub-menu">
                            <li><router-link :to="{name:'blog'}">Blogs</router-link></li>                                                
                            <li><router-link :to="{name:'blog-details'}">Blog Details</router-link></li>                                                                                        
                          </ul>
                      </li>
                      <li><router-link :to="{name:'contact'}">Contact</router-link></li>                                                

                  </ul>
              </nav>
              <div class="action-bar">
                  <a href="mailto:info@carpent.com"><i class="las la-envelope"></i>info@carpent.com</a>
                  <a href="tel:123-456-7890"><i class="fal fa-phone"></i>123-456-7890</a>
                  <router-link :to="{name:'contact'}" class="theme-btn">Contact Us</router-link>
              </div>
          </div>
      </div>                            
  </div>
</template>
