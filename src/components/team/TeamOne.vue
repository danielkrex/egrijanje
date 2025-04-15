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

<div class="team-section dark-bg section-padding">
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
                            <h6 class="text-white">Our Team</h6>                            
                            <h2 class="text-white">Meet Our talent & <br> Professional Roofers</h2>
                        </div>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <router-link :to="{name:'team'}" class="theme-btn mt-30">See More</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>