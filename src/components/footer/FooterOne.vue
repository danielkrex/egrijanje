<script setup>

</script>

<template>

    <footer class="footer-area">
        <div class="container">
            <div class="footer-up">
                <div class="row gy-5">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <router-link class="logo" to="/"><img src="/assets/img/logo-2.png" alt="logo"></router-link>
                        <p>Nudimo napredna rješenja grijanja<br> osmišljena za udobnost, učinkovitost i dugoročnu
                            pouzdanost.
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5>Ured</h5>
                        <p>Glavni ured - <br>
                            Hrvatskih branitelja 43g, 10434 Strmec, Hrvatska
                        </p>
                        <div class="company-email">
                            <a href="mailto:egrijanje@pasivnidom.hr">egrijanje@pasivnidom.hr</a>
                        </div>
                        <div class="company-email">
                            <a href="tel:+385959152692" style="text-decoration: none;">+385 95 915 2692</a>
                        </div>

                    </div>
                    <div class="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                        <h5>Poveznice</h5>
                        <ul>
                            <li>
                                <router-link :to="{ name: 'home' }">Početna</router-link>
                                <router-link :to="{ name: 'product' }">Zašto eGrijanje?</router-link>
                                <router-link :to="{ name: 'opis-proizvoda' }">Opis proizvoda</router-link>
                                <router-link :to="{ name: 'team' }">O nama</router-link>
                                <router-link :to="{ name: 'projekti' }">Projekti</router-link>
                                <router-link :to="{ name: 'contact' }">Kontakt</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <h5>Kontakt</h5>
                        <ul>
                            <li>
                                <div class="social-area">
                                    <a href="https://www.facebook.com/profile.php?id=61562272122815" target="_blank"><i class="lab la-facebook-f"></i>Facebook</a>
                                    <a href="https://www.instagram.com/egrijanje" target="_blank"><i class="lab la-instagram"></i>Instagram</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>

    <!-- Footer Bottom Area -->

    <div class="footer-bottom">
        <div class="container">
            <div class="row justify-content-center align-items-center justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p class="copyright-line">© 2025 Pasivni dom d.o.o. eGrijanje je trgovački naziv tvrtke Pasivni dom d.o.o.
                        Registrirano u Hrvatskoj, Hrvatskih branitelja 43g, 10434 Strmec. <br /> MB: 081581193 OIB: 17590037681</p>
                </div>
            </div>
        </div>
    </div>

</template>