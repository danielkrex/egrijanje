<script setup>
import { BreadCrumb, HeaderThree, VideoThree, VideoOne, CallToActionOne, VanjskaUgradnja } from "@/components";
import axios from "axios";
import { onMounted, ref } from "vue";

const blogs = ref([]);

onMounted(async () => {
  const { data: fetchedBlogs } = await axios.get("/data/steps.json");
  blogs.value = fetchedBlogs.blogs;
});

const parts = ref([
  {
    title: "Napajanje",
    content:
      "Smješten u čeličnom kućištu otpornom na koroziju i mehanička oštećenja, obično se ugrađuje u zid, ostavljajući vidljivim samo bijeli poklopac.",
    image: "egrijanje-proizvod-1.png",
  },
  {
    title: "Grijaće trake",
    content:
      "Izolirane aluminijske trake širine 6, 8, 12 ili 14 cm te debljine 0,2 mm. Kod podne izvedbe, trake postavljamo ispod odnosno na estrih(glazuru) ili na postojeće podne obloge, te kod zidne izvedbe podžbukno ili ispod gipsane ploče/zidne obloge.",
    image: "egrijanje-proizvod-2.png",
  },
  {
    title: "Pametan termostat",
    content:
      "Omogućuje digitalno upravljanje temperaturom za svaku prostoriju zasebno, s mogućnošću daljinskog upravljanja putem mobilne aplikacije.",
    image: "egrijanje-proizvod-3.png",
  },
]);
</script>

<template>
  <HeaderThree />
  <BreadCrumb />
  <div class="container">
    <div class="row">
      <div class="blog-section section-padding">
        <div class="section-title mb-0" style="text-align: center">
          <h2 style="width: 100%">Što čini naš sustav?</h2>
          <p style="width: 100%; max-width: 700px; margin: 0 auto; margin-top: 30px;">Naš 12V sustav električnog podnog grijanja donosi udobnost i sigurnost u vaš dom ili poslovni prostor – jednostavno za ugradnju, idealno za adaptacije i novogradnje. Naš sustav grijanja sastoji se od više komponenti koje zajednički osiguravaju efikasno i sigurno grijanje prostora.</p>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 mt-4" v-for="blog in parts" :key="blog.id">
        <div class="single-blog-item wow fadeInUp" data-wow-delay=".2s">
          <div class="blog-img">
            <img :src="'/assets/img/egrijanje/' + blog.image" alt="" />
          </div>
          <div class="blog-content">
            <div class="text-center">
              <h2 class="main-headline">{{ blog.title }}</h2>
            </div>
            <!-- <div class="blog-title">
                                <h4>{{ blog.title }}</h4>
                            </div> -->
            <div class="blog-info">
              <span>{{ blog.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container">
    <div class="row">
      <div class="blog-section section-padding">

        <div class="section-title mb-50" style="text-align: center">
          <h3 style="width: 100%; font-weight: 600;">Tehničke specifikacije</h3>
          <p style="width: 100%; max-width: 700px; margin: 0 auto; margin-top: 30px;">Naš 12V sustav električnog podnog grijanja donosi udobnost i sigurnost u vaš dom ili poslovni prostor – jednostavno za ugradnju, idealno za adaptacije i novogradnje. Naš sustav grijanja sastoji se od više komponenti koje zajednički osiguravaju efikasno i sigurno grijanje prostora.</p>
        </div>
        <table border="1" cellpadding="8" cellspacing="0"
          style="border-collapse: collapse; width: 100%; max-width: 800px; margin: 0 auto;">
          <thead>
            <tr style="background-color: #FE574F; color: white;">
              <th>Parametar</th>
              <th>Vrijednost</th>
            </tr>
          </thead>
          <tbody style="background-color: #ffffff;">
            <tr>
              <td>Ulazni napon</td>
              <td>220–230 V (50–60 Hz)</td>
            </tr>
            <tr>
              <td>Napon grijaćih traka</td>
              <td>3–48 V</td>
            </tr>
            <tr>
              <td>Maksimalna struja</td>
              <td>12 A</td>
            </tr>
            <tr>
              <td>Pokrivenost poda</td>
              <td>do 80% površine</td>
            </tr>
            <tr>
              <td>Specifična snaga</td>
              <td>Prema izračunu / želji korisnika</td>
            </tr>
            <tr>
              <td>Temperatura poda</td>
              <td>23–32°C (ovisno o prostoriji)</td>
            </tr>
            <tr>
              <td>Regulacija</td>
              <td>Lokalna i daljinska</td>
            </tr>
            <tr>
              <td>Zaštita</td>
              <td>Soft-start, F1 + F2, mehanička, kemijska</td>
            </tr>
            <tr>
              <td>Jamstvo</td>
              <td>Trake: 20 god. | Elektronika: 7 god.</td>
            </tr>
            <tr>
              <td>Kompatibilnost</td>
              <td>Sve podne obloge, zidna i podna izvedba</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div> -->

  <div class="container">
    <div class="row">
      <div class="blog-section section-padding" style="padding-top: 0;">
        <div class="section-title mb-50 mt-100" style="text-align: center">
          <h3 style="width: 100%; font-weight: 600;">Preporučena snaga grijanja po prostoru</h3>
          <p style="width: 100%; max-width: 700px; margin: 0 auto; margin-top: 30px;">Snaga sklopa za napajanje određuje se prema toplinskim gubicima prostora. Dimenzije grijaćih traka ovise o željenoj specifičnoj emisiji topline (W/m²) grijanja i veličini prostorije. Preporučene vrijednosti su:</p>
        </div>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 800px; margin: 0 auto;">
          <thead>
            <tr style="background-color: #FE574F; color: white;">
              <th>Prostor</th>
              <th>Snaga (W/m²)</th>
              <th>Temperatura poda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dnevne i spavaće sobe</td>
              <td>30–80</td>
              <td>23°–28°C</td>
            </tr>
            <tr>
              <td>Kupaonice</td>
              <td>80–120</td>
              <td>28°–32°C</td>
            </tr>
            <tr>
              <td>Vanjske površine (terase, prilazi)</td>
              <td>80–150</td>
              <td>ovisno o klimi</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>

  <CallToActionOne/>

  <div class="blog-section bg-light section-padding">
    <div class="container">
      <div class="row">
        <div class="section-title mb-50" style="text-align: center">
          <h3 style="width: 100%; font-weight: 600;">Postupak ugradnje</h3>
          <p style="width: 100%; max-width: 700px; margin: 0 auto; margin-top: 30px;"></p>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 mt-4" v-for="blog in blogs.slice(0, 11)" :key="blog.id">
          <div class="single-blog-item wow fadeInUp" data-wow-delay=".2s">
            <div class="blog-img blog">
              <img :src="blog.img" alt="" />
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span>{{ `${blog.id}. ` }} {{ blog.cat }}</span>
              </div>
              <div class="blog-info">
                <span>{{ blog.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <VanjskaUgradnja />
  <div class="blog-section bg-light">
    <div class="container">
      <div class="row">
        <div class="section-title mb-50 mt-100" style="text-align: center">
          <h3 style="width: 100%; font-weight: 600;">Kako ugraditi 12V podno grijanje – korak po korak</h3>
          <p style="width: 100%; max-width: 700px; margin: 0 auto; margin-top: 30px;">
            Pogledajte jednostavan video vodič kroz cijeli postupak ugradnje našeg 12V električnog podnog grijanja – od pripreme podloge do spajanja na napajanje i testiranja sustava.
          </p>
        </div>
      </div>
    </div>
  </div>
  <VideoOne></VideoOne>
</template>

<style scoped>
.single-blog-item {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-content {
  flex: 1;
}

.blog-img {
  background-color: #dee7f0;
}

.main-headline {
  font-size: 26px;
  font-weight: 600;
  line-height: 1;
  padding: 20px 0;
  overflow: hidden;
  color: #181818;
}
</style>
