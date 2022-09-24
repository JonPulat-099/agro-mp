<template>
  <div class="container">
    <div class="breadcrumbs d-flex align-center">
      <nuxt-link :to="localePath('/')" class="active">Asosiy</nuxt-link>
      <v-icon color="#07D271" class="mx-4" size="18">mdi-chevron-right</v-icon>
      <nuxt-link :to="localePath('/news')" class="active">Yangiliklar</nuxt-link>
      <v-icon color="#07D271" class="mx-4" size="18">mdi-chevron-right</v-icon>
      <nuxt-link to="">Batafsil</nuxt-link>
    </div>
    <div class="more">
      <div class="more__title">Yangi Qo'yliq Bozori FODCITY ijara huquqi sotuvi boshlandi</div>
      <div class="more__img">
        <img src="@/assets/images/more1.png" alt="news image">
      </div>
      <div class="more__date">27-08-2021</div>
      <div class="more__subtitle">
        60 gektar maydonda barpo etilgan O‘zbekistondagi ilk qishloq xo‘jaligi majmuasi “Fud City” o‘z biznesini yo‘lga
        qo‘ymoqchi bo‘lganlar uchun yaxshi imkoniyatdir.
      </div>
      <div class="more__plane--image">
        <img src="@/assets/images/more2.png" alt="news image">
      </div>
      <div class="more__plane--content">
        <p>
          FOOD CITY-da tadbirkorlar o'z oziq-ovqat mahsulotlarini xavfsiz tark etishlari va tarqatishlari mumkin bo'lgan
          muzlatgich va muzlatish omborlari mavjud. Bundan tashqari, savdo markazi, mehmonxona, shuningdek, 4 qavatli
          biznes markazi mavjud. Bozorga tashrif buyuruvchilarga qulaylik yaratish maqsadida avtoturargohlar, avtovokzal
          binosi, bank, ayollar va erkaklar uchun savdo va maishiy xizmat ko‘rsatish shoxobchalari, dam olish
          maskanlari, namozxonalar barpo etildi.
        </p>
        <p>
          Bunday agromajmualar Fransiya, Germaniya, Avstraliya, Italiya, Rossiya kabi dunyoning eng rivojlangan
          mamlakatlarida allaqachon mavjud bo‘lgani O‘zbekistondagi xaridor va tadbirkorlar uchun yanada keng
          imkoniyatlar va qulayliklar yaratmoqda. Tovarlarni ulgurji narxlarda sotib olish, shuningdek ularni
          to'g'ridan-to'g'ri etkazib berish CROSS-DOK tizimida amalga oshirilishi mumkin.
          Yangi qurilgan “Yangi Qo‘yliq Bozori FOODSCITY” o‘z ijarachilarni kutmoqda.
          Manzil “Yangi Qo‘yliq Bozori” OZIQ SHAXARI: Toshkent viloyati, O‘rta Chirchiq tumani.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: "main",
  data() {
    return {}
  }
}
</script>

<style lang="scss" src="assets/news.scss" scoped>

</style>
