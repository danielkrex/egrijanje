<script setup>

</script>

<template>

   <footer class="footer-area">
        <div class="container">
            <div class="footer-up">
                <div class="row gy-5">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <router-link class="logo" to="/"><img src="/assets/img/logo-2.png" alt="logo"></router-link>                        
                        <p>We provide the best legal services <br> to deliver superior performance.
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-6">
                        <h5>Office</h5>
                        <p>Corporate Office- <br>
                            175 24th Street, OT- 35
                            London, UK 265
                        </p>
                        <div class="company-email">
                            <a href="#">info@roofix.com</a>
                        </div>
                        <div class="phone-number">
                            <p>+18-4675826</p>
                        </div>

                    </div>
                    <div class="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                        <h5>Links</h5>
                        <ul>
                            <li>
                                <router-link :to="{name:'about'}">About</router-link>
                                <router-link :to="{name:'services'}">Services</router-link>
                                <router-link :to="{name:'project-standard'}">Projects</router-link>
                                <router-link :to="{name:'price'}">Pricing</router-link>
                                <router-link :to="{name:'faq'}"> FAQ</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <h5>Get in Touch</h5>
                        <ul>
                            <li>
                                <div class="social-area">
                                    <a href="#"><i class="lab la-facebook-f"></i>Facebook</a>
                                    <a href="#"><i class="lab la-instagram"></i>Instagram</a>
                                    <a href="#"><i class="lab la-linkedin-in"></i>linkedin</a>
                                    <a href="#"><i class="la la-skype"></i>Skype</a>
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
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <p class="copyright-line">© 2024 Roofix. All rights reserved.</p>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 text-md-end">
                    <p class="privacy">Privacy Policy | Terms &amp; Conditions</p>
                </div>
            </div>
        </div>
    </div>

</template>