<script setup></script>

<template>
  <div class="cta-section dark-bg">
    <div class="dark-overlay pt-80 pb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-8 col-lg-8 col-md-8">
            <div class="cta-title">
              <div class="section-title">
                <h2 class="text-white">Pogledajte naše projekte u praksi</h2>
                <p class="text-white">
                  Uvjerite se kako naš sustav izgleda u stvarnim objektima – od
                  obiteljskih kuća do poslovnih prostora. Inspirirajte se
                  rješenjima prilagođenima svakom prostoru.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 text-lg-end">
            <div class="cta-btn">
              <router-link :to="{ name: 'projekti' }" class="white-btn"
                >Otvori projekte</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-section {
  background-image: url("assets/img/egrijanje/egrijanje-projects-cta.png");
  background-size: cover;
  background-position: center;
}

.dark-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
