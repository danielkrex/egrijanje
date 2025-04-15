<script setup>
import { onMounted } from "vue";

onMounted(() => {
  function handlePreloader() {
    if ($("#loader").length) {
      $("#loader").delay(200).fadeOut(500);
    }
  }

  $(window).on("load", function () {
    handlePreloader();
  });
});

</script>

<template>
    <div id="loader"></div>
</template>