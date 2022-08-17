<template>
  <v-footer padless>
    <div class="container footer">
      <v-layout row wrap>
        <v-flex lg3 xs12>
          <img src="/logo_new.svg" alt="" class="logo"/>
          <p class="slogan">
            {{ $t('footer.main_title') }}
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
          <h3>{{ $t('footer.links.title') }}</h3>
          <ul>
            <li v-for="(l, i) in usefull_links" :key="i">
              <a :href="l.url">{{ l.name }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex lg3 xs12>
          <h3>{{ $t('footer.links.about') }}</h3>
          <ul>
            <li v-for="(l, i) in help_center" :key="i">
              <a :href="l.url">{{ l.name }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex lg3 xs12>
          <h3>{{ this.$t('footer.account.title') }}</h3>
          <ul>
            <li>
              <v-icon color="#2EAF7C">mdi-map-marker-radius-outline</v-icon>
              <b class="mr-1"> {{ this.$t('footer.keys.address') }}: </b>
              15 A. Temur, Tashkent , Uzb
            </li>
            <li>
              <a href="">
                <v-icon color="#2EAF7C">mdi-phone-outline</v-icon>
                <b class="mr-1">{{ this.$t('footer.keys.phone') }}:</b>
                +998 90 123 45 67
              </a>
            </li>
            <li>
              <a href="">
                <v-icon color="#2EAF7C">mdi-email-outline</v-icon>
                <b class="mr-1">{{ this.$t('footer.keys.email') }}:</b>
                Agrow@aloqa.com
              </a>
            </li>
            <li>
              <v-icon color="#2EAF7C">mdi-clock-time-eight-outline</v-icon>
              <b class="mr-1">{{ this.$t('footer.keys.clock') }}:</b>
              24/7
            </li>
          </ul>
        </v-flex>
      </v-layout>
      <hr>
       <p class="mt-8 text-center"> © 2022, {{ this.$t('footer.license') }} </p>
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
          name: this.$t('footer.links.about'),
          url: '#',
        },
        {
          name: this.$t('footer.links.contact'),
          url: '#',
        },
        {
          name: this.$t('footer.links.deal'),
          url: '#',
        },
        {
          name: this.$t('footer.links.new_product'),
          url: '#',
        },
        {
          name: this.$t('footer.links.favorite'),
          url: '#',
        },
        {
          name: this.$t('footer.links.delivery'),
          url: '#',
        },
      ],
      help_center: [
        {
          name: this.$t('footer.help_center.payment'),
          url: '#',
        },
        {
          name: this.$t('footer.help_center.pay_revers'),
          url: '#',
        },
        {
          name: this.$t('footer.help_center.calc'),
          url: '#',
        },
        {
          name: this.$t('footer.help_center.delivery'),
          url: '#',
        },
        {
          name: this.$t('footer.help_center.view_delivery'),
          url: '#',
        },
        {
          name: this.$t('footer.help_center.more_question'),
          url: '#',
        },
        {
          name: this.$t('footer.help_center.secure'),
          url: '#',
        },
      ],
    }
  },
}
</script>

<style lang="scss" src="assets/footer.scss"></style>

