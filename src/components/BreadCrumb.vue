<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const currentPageTitle = computed(() => {
  let currentPath = "";
  switch (route.name) {
      case "about":
      currentPath = "About Us";
      break;           
      case "services":
      currentPath = "Our Services";
      break;           
      case "team":
      currentPath = "Our Team";
      break;           
      case "price":
      currentPath = "Pricing Plan";
      break;           
      case "faq":
      currentPath = "FAQ";
      break;           
      case "service-details":
      currentPath = "Service Details";
      break;           
      case "project-standard":
      currentPath = "Project - Standard";
      break;           
      case "project-metro":
      currentPath = "Project - Metro";
      break;           
      case "project-grid":
      currentPath = "Project - Grid";
      break;           
      case "project-masonry":
      currentPath = "Project - Masonry";
      break;           
      case "project-list":
      currentPath = "Project - List";
      break;           
      case "project-slider":
      currentPath = "Project - Slider";
      break;           
      case "project-details-left":
      currentPath = "Project Details";
      break;           
      case "project-details-right":
      currentPath = "Project Details";
      break;           
      case "project-details-gallery":
      currentPath = "Project Details";
      break;           
      case "blog":
      currentPath = "Blogs";
      break;           
      case "blog-details":
      currentPath = "Blog Details";
      break;           
      case "contact":
      currentPath = "Contact";
      break;           
      default:
      currentPath = route.name;
      break;
  }

  return currentPath;
});
</script>

<template>

<div class="breadcrumb-area bread-bg">  
    <div class="overlay-5"></div>  
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
                <div class="breadcrumb-title">
                    <h1>{{ currentPageTitle }}</h1>
                </div>
                <div class="breadcrumb-icon">
                    <i class="las la-angle-down"></i>                    
                </div>
            </div>
        </div>
    </div>
</div>

</template>
