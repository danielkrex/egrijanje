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
      currentPath = "Naše usluge";
      break;           
      case "team": 
      currentPath = "Naš tim profesionalaca";
      break;           
      case "price":
      currentPath = "Cijena";
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
      case "projekti":
      currentPath = "Projekti";
      break;
      case "projekti-id":
      currentPath = "Projekti";
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
      case "postupak-ugradnje":
      currentPath = "Postupak ugradnje";
      break;           
      case "blog-details":
      currentPath = "Blog Details";
      break;           
      case "contact":
      currentPath = "Kontakt";
      break;           
      case "product":
      currentPath = "Zašto odabrati eGrijanje 12V?";
      break;
      case "zasto-egrijanje":
      currentPath = "Zašto odabrati eGrijanje 12V?";
      break;
      case "opis-proizvoda":
      currentPath = "Opis proizvoda";
      break;
      case "onama":
      currentPath = "O nama";
      break;           
      default:
      currentPath = route.name;
      break;
  }

  return currentPath;
});
</script>

<template>

<div class="breadcrumb-area bread-bg bread-bg-product" :class="{'bread-bg-product-2': route.name === 'contact'}">  
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

<style scoped>

.bread-bg-product {
    background-image: url('/assets/img/egrijanje/egrijanje-work-2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.bread-bg-product-2 {
    background-image: url('/assets/img/egrijanje/egrijanje-work-3.png');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>
