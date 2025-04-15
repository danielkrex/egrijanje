<script setup>

import { onMounted } from "vue";

onMounted(() => {
    if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }
});

</script>

<template>

        <div class="search-popup">
        <span class="search-back-drop"></span>

        <div class="search-inner">
            <div class="container">
                <div class="logo">
                    <a class="navbar-brand" to="/"><img src="/assets/img/logo-white.png" alt=""></a>
                </div>
                <button class="close-search"><span class="la la-times"></span></button>
                <form method="post">
                    <div class="form-group">
                        <input type="search" name="search-field" value="" placeholder="Type your keyword" required="">
                        <button type="submit"><i class="fal fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>