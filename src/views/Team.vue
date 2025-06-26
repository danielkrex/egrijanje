<script setup>
import { BreadCrumb, HeaderThree, CallToProjects, ProjectProizvodnja } from '@/components';

import { onMounted } from "vue";

onMounted(() => {

    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

});


</script>



<template>
    <HeaderThree />
    <BreadCrumb />

    <!-- Fun Fact Section  -->
    <div id="team-page" class="funfact-section section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="section-title">
                        <h6>Naš tim</h6>
                        <h2>Saznajte više o našem timu</h2>
                    </div>
                    <p>Naš tim čine iskusni stručnjaci posvećeni kvaliteti, inovacijama i vrhunskoj usluzi.
                        Zajedno radimo kako bismo svakom klijentu pružili pouzdano i učinkovito rješenje grijanja,
                        prilagođeno njegovim potrebama.</p>
                    <div class="counter-content">
                        <div class="single-counter-item">
                            <h6>Godina</h6>
                            <h1><span class="odometer" data-count="5">5</span>+</h1>
                            <p>Adipiscing elit, do eiusm.</p>
                        </div>
                        <div class="single-counter-item">
                            <h6>Ljudi</h6>
                            <h1><span class="odometer" data-count="11">11</span>+</h1>
                            <p>Sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="team-img-wrap">
                        <img src="/assets/img/egrijanje/team/team-00.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <CallToProjects/>

    <!-- Team Section  -->

    <div class="team-section gray-bg section-padding pb-90">
        <div class="container">
            <div class="row gx-5">
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-01.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Viktor Kedmenec</h5>
                                <span>Vlasnik</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-02a.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Ante</h5>
                                <span>Vlasnik, Dalmacija</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".4s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-02.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Marko</h5>
                                <span>Monter, Zagreb</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-03.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Luka</h5>
                                <span>Monter, Zagreb</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-04.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Dubravko</h5>
                                <span>Proizvodnja i Montaza, Zagreb</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-05a.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Mateo</h5>
                                <span>Monter, Dalmacija</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-05.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Mate Perinović</h5>
                                <span>dipl. ing. strojarstva, Rijeka</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-06.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Jadranko Marković</h5>
                                <span>Zastupnik za Istru</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-07.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Tin</h5>
                                <span>Monter Osijek</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-08.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Teo</h5>
                                <span>Monter Osijek</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-09.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Bojan</h5>
                                <span>Monter Slavonija - Daruvar</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".6s">
                    <div class="single-team-member">
                        <div class="team-bg">
                            <img src="/assets/img/egrijanje/team/team-10.png" alt="">
                        </div>
                        <div class="team-hover-info">
                            <div class="team-title">
                                <h5>Matija</h5>
                                <span>Monter Slavonija - Daruvar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ProjectProizvodnja/>

</template>
