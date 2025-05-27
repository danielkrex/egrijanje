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
                            <a href="mailto:info@trafo.hr">info@trafo.hr</a>
                        </div>
                        <div class="company-email">
                            <a href="tel:+385915555555" style="text-decoration: none;">+385 91 555 55 55</a>
                        </div>

                    </div>
                    <div class="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                        <h5>Poveznice</h5>
                        <ul>
                            <li>
                                <router-link :to="{ name: 'about' }">O nama</router-link>
                                <router-link :to="{ name: 'services' }">Usluge</router-link>
                                <router-link :to="{ name: 'project-standard' }">Projekti</router-link>
                                <router-link :to="{ name: 'price' }">Cijena</router-link>
                                <router-link :to="{ name: 'faq' }"> FAQ</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <h5>Kontakt</h5>
                        <ul>
                            <li>
                                <div class="social-area">
                                    <a href="#"><i class="lab la-facebook-f"></i>Facebook</a>
                                    <a href="#"><i class="lab la-instagram"></i>Instagram</a>
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
                    <p class="copyright-line">© 2025 trafo d.o.o. eGrijanje je trgovački naziv tvrtke trafo d.o.o.
                        Registrirano u Hrvatskoj, Hrvatskih branitelja 43g, 10434 Strmec. <br /> MB: 00739677 OIB:
                        23237620572.</p>
                </div>
            </div>
        </div>
    </div>

</template>