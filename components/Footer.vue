<template>
  <v-footer padless>
    <div class="container footer">
      <v-layout row wrap>
        <v-flex lg3 xs12>
          <img src="/logo.svg" alt="" class="logo"/>
          <p class="slogan">
            Biz AGROW hamyonbop va sifatli mahsulotlar O’zbekiston bo’yicha
            mahsulotlarni sotadigan onlany do’kon hisoblanadi.
          </p>
          <ul class="social">
            <li>
              <a href="#"> <img src="/icons/facebook.svg" alt=""></a>
            </li>
            <li>
              <a href="#"> <img src="/icons/linkedin.svg" alt=""></a>
            </li>
            <li>
              <a href="#"> <img src="/icons/instagram.svg" alt=""> </a>
            </li>
            <li>
              <a href="#"> <img src="/icons/telegram.svg" alt=""> </a>
            </li>
          </ul>
        </v-flex>
        <v-flex lg3 xs12>
          <h3>Foydali linklar</h3>
          <ul>
            <li v-for="(l, i) in usefull_links" :key="i">
              <a :href="l.url">{{ l.name }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex lg3 xs12>
          <h3>Yodam markazi</h3>
          <ul>
            <li v-for="(l, i) in help_center" :key="i">
              <a :href="l.url">{{ l.name }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex lg3 xs12>
          <h3>Akkaunt</h3>
          <ul>
            <li>
              <v-icon color="#2EAF7C">mdi-map-marker-radius-outline</v-icon>
              <b> Manzil: </b>
              15 Amir Temur k, Tashkent , Uzb
            </li>
            <li>
              <a href="">
                <v-icon color="#2EAF7C">mdi-phone-outline</v-icon>
                <b>Telefon raqam:</b>
                +998 90 123 45 67
              </a>
            </li>
            <li>
              <a href="">
                <v-icon color="#2EAF7C">mdi-email-outline</v-icon>
                <b>Email:</b>
                Agrow@aloqa.com
              </a>
            </li>
            <li>
              <v-icon color="#2EAF7C">mdi-clock-time-eight-outline</v-icon>
              <b>Ish vaqtlari:</b>
              24/7, Dushanba - Yakshanba
            </li>
          </ul>
        </v-flex>
      </v-layout>
      <hr>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      usefull_links: [
        {
          name: 'Biz haqimizda',
          url: '#',
        },
        {
          name: 'Kontaktlar',
          url: '#',
        },
        {
          name: 'Kelishuvlar',
          url: '#',
        },
        {
          name: 'Yangi mahsulotlar',
          url: '#',
        },
        {
          name: 'Sevimli mahsulotlar',
          url: '#',
        },
        {
          name: 'Yetkazib berish tafsilotlari',
          url: '#',
        },
      ],
      help_center: [
        {
          name: 'To’lovlar',
          url: '#',
        },
        {
          name: "To'lovni qaytarish",
          url: '#',
        },
        {
          name: 'Hisob-kitob ',
          url: '#',
        },
        {
          name: 'Yetkazib berish',
          url: '#',
        },
        {
          name: 'Buyurtmani kuzatish',
          url: '#',
        },
        {
          name: 'Tez beriladigan savollar',
          url: '#',
        },
        {
          name: 'Maxfiylik siyosati',
          url: '#',
        },
      ],
    }
  },
}
</script>

<style lang="scss" src="@/assets/footer.scss"></style>

