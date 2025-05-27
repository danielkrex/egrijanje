<script setup>

import { onMounted, ref} from "vue";
import axios from "axios";

const team = ref([]);

onMounted(async () => {
  const { data: fetchedTeam } = await axios.get("/data/team.json");
  team.value = fetchedTeam.team;
});

</script>

<template>

<div class="team-section section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 order-2 order-lg-1">
                    <div class="team-members-wrap">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s"
                            v-for="t in team.slice(0,4)" :key="t.id"
                            >
                                <div class="single-team-member">
                                    <div class="team-bg">
                                        <img :src="t.img" alt="">
                                    </div>
                                    <div class="team-hover-info">
                                        <div class="team-title">
                                            <h5>{{ t.name }}</h5>
                                            <span>{{ t.designation }}</span>
                                        </div>                                    
                                    </div>
                                    <div class="social-icon">
                                        <a href="#"><i class="lab la-facebook-f"></i></a>
                                        <a href="#"><i class="lab la-instagram"></i></a>
                                        <a href="#"><i class="lab la-linkedin-in"></i></a>
                                        <a href="#"><i class="la la-skype"></i></a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 order-1 order-lg-2">
                    <div class="team-content-wrap">
                        <div class="section-title">
                            <h6>Naš tim</h6>                            
                            <h2>Saznajte više o našem timu</h2>
                        </div>
                        <p>Naš tim čine iskusni stručnjaci posvećeni kvaliteti, inovacijama i vrhunskoj usluzi.
                            Zajedno radimo kako bismo svakom klijentu pružili pouzdano i učinkovito rješenje grijanja, prilagođeno njegovim potrebama.</p>
                        <!-- <router-link :to="{name:'team'}" class="theme-btn mt-30">More Team</router-link>                         -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>