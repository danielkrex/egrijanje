<script setup>
import { BreadCrumb, HeaderThree, } from '@/components';

import { onMounted, ref } from "vue";

const name = ref('');
const email = ref('');
const message = ref('');

const sendMessage = () => {
    console.log(name.value, email.value, message.value);
    const mailtoLink = `mailto:info@egrijanje.hr?subject=${encodeURIComponent(name.value + ' - upit s web stranice')}&body=${encodeURIComponent('Email: ' + email.value + '\n\nPoruka: ' + message.value)}`;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.setAttribute('href', mailtoLink);
    link.classList.add('mail-link');

    // Append the link to the document body
    document.body.appendChild(link);
    link.click();
}

onMounted(() => {

    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

});


</script>



<template>
    <HeaderThree />
    <BreadCrumb />
    <!-- Google Map Start-->
    <div class="contact-page google-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.322168007962!2d15.794120428595662!3d45.80547679818506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765cfed0a89969b%3A0x730902889ef14d59!2seGRIJANJE%20-%20PASIVNI%20DOM%20D.O.O.!5e0!3m2!1sen!2shr!4v1746623566958!5m2!1sen!2shr"
            width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


    <!-- Contact Info -->

    <div class="contact-info-wrapper section-padding pb-90">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div class="single-contact-info">
                        <div class="contact-icon">
                            <img src="/assets/img/contact/1.png" alt="">
                        </div>
                        <p>Ul. Hrvatskih branitelja 43g, 10434, Strmec</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div class="single-contact-info">
                        <div class="contact-icon">
                            <img src="/assets/img/contact/2.png" alt="">
                        </div>
                        <p> <a href="mailto:info@e-grijanje.hr">info@e-grijanje.hr</a></p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-12">
                    <div class="single-contact-info">
                        <div class="contact-icon">
                            <img src="/assets/img/contact/3.png" alt="">
                        </div>
                        <p> <a href="tel:+385959152692">+38595 915 2692</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Section  -->

    <div class="contact-section">
        <div class="contact-bg" data-background="/assets/img/egrijanje/contact-01.png">
        </div>
        <div class="contact-form-wrap gray-bg">
            <div class="section-title">
                <h6>Kontaktirajte nas</h6>
                <h2>Ne ustručavajte se, <br>
                    kontaktirajte nas!</h2>
            </div>
            <div class="contact-form">
                <form @submit.prevent="sendMessage">
                    <input type="text" placeholder="Ime i prezime" v-model="name">
                    <input type="email" placeholder="Email" v-model="email">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Poruka"
                        v-model="message"></textarea>
                    <input type="submit" value="Pošalji">
                </form>
            </div>
        </div>
    </div>

</template>


<style scoped>
p {
    a {
        font-size: inherit;
        color: inherit;
    }
}
</style>
