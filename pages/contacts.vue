<template>
  <div class="container contact">
   <div class="breadcrumbs d-flex align-center">
     <nuxt-link :to="localePath('/')" class="active">Asosiy</nuxt-link>
     <v-icon color="#07D271" class="mx-4" size="18">mdi-chevron-right</v-icon>
     <nuxt-link :to="localePath('/contacts')">Kontaktlar</nuxt-link>
   </div>

    <h1 class="text-capitalize">kontaktlar</h1>
    <div class="contacts">
      <div class="contacts__map">
        <div class="maps my-5">
          <yandex-map
            :coords="mapMarkerCord"
            zoom="15"
            style="height: 400px"
          >
            <ymap-marker
              marker-id="currentMarker"
              :coords="mapMarkerCord"
              :icon="{ color: 'red' }"
            ></ymap-marker>
          </yandex-map>
        </div>
      </div>
      <v-row>
        <v-col>
          <div class="contact__body">
            <h2 class="mb-4">Biz bilan bo’g’laning</h2>
            <div class="contact__address">
              <p class="d-flex align-center">
                <img src="/map-marker.svg" alt="icon">
                <span class="font-weight-bold ml-1 mr-2">Manzil:</span>
                Toshkent viloyati, O‘rtachirchiq tumani, Mexnatobod ko‘chasi, 82-uy
              </p>
            </div>
            <div class="contact__address">
              <p class="d-flex align-center">
                <img src="/phone.svg" alt="icon">
                <span class="font-weight-bold ml-1 mr-2">Telefon raqam:</span>
                +998 55 500 00 04
              </p>
            </div>
            <div class="contact__address">
              <p class="d-flex align-center">
                <img src="/gmail.svg" alt="icon">
                <span class="font-weight-bold ml-1 mr-2">Email:</span>
                info@f-city.uz
              </p>
            </div>
            <div class="contact__address">
              <p class="d-flex align-center">
                <img src="/cloak.svg" alt="icon">
                <span class="font-weight-bold ml-1 mr-2">Ish vaqtlari:</span>
                Dushanba - Juma, 09:00-18:00
              </p>
            </div>
          </div>
        </v-col>
        <v-col>
          <v-row>
            <v-col class="pl-0">
              <v-text-field label="Ismingizni kiriting" dense outlined/>
            </v-col>
            <v-col class="pr-0">
              <v-text-field label="Telefonni kiriting" dense outlined/>
            </v-col>
          </v-row>
          <v-textarea label="Habarni kiriting" dense outlined clearable/>
          <Button text="Habarni jo’natish" status="success_btn" :click="sendContact" class="mt-n10"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  layout: 'main',
  components: {
    yandexMap,
    ymapMarker
  },
  data() {
    return {
      mapMarkerCord: [41.20492, 69.32137],
      items: [
        {
          text: 'Asosiy',
          disabled: false,
          href: '/',
        },
        {
          text: 'Kontaktlar',
          disabled: true,
          href: '/contacts',
        },
      ]
    }
  },
  methods: {
    sendContact() {},

  }
}
</script>

<style lang="scss" scoped>
.contact {
 padding-bottom: 140px;
}
.breadcrumbs {
  margin-bottom: 40px;
  > a {
    text-decoration: none;
    font-size: 16px;
    color: #303733;
  }
  >a.active {
    color: #07D271;

  }
}
</style>
