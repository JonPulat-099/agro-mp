<template>
  <div class="container">
    <div class="breadcrumbs d-flex align-center">
      <nuxt-link :to="localePath('/')" class="active">Asosiy</nuxt-link>
      <v-icon color="#07D271" class="mx-4" size="18">mdi-chevron-right</v-icon>
      <nuxt-link :to="localePath('/contacts')">Kompaniya haqida</nuxt-link>
    </div>
    <div class="about">
      <h1 class="about__title">Kompaniya haqida</h1>
      <v-row>
        <v-col class="pl-0">
          <div class="about__content">
            FOODCITY – O‘zbekistondagi birinchi qishloq xo‘jaligi klasteri va eng zamonaviy savdo maydonchasi.
            O‘zbekistonda birinchi marta tovarlarni omborda saqlash bosqichini istisno qiluvchi Cross-Docking logistika
            operatsion tizimi qo‘llanildi, ya’ni. Siz mahsulotni dastlabki tushirish joyidan sotib olasiz, shu bilan
            birga ko'plab omborxonalar va sotuvchilardan qochib, to'g'ridan-to'g'ri ishlab chiqaruvchidan yangi
            mahsulotni olasiz va bizda turli xil mahsulotlarga ega 5 ta Kross-Dock mavjud.
          </div>
          <div class="about__table">
            <v-row>
              <v-col class="px-0 about__table--item">
                <span>24/7</span>
                <p>Ish vaqti</p>
              </v-col>
              <v-divider vertical/>
              <v-col class="about__table--item">
                <span>2 500 dona</span>
                <p>Do’kon va rastalar</p>
              </v-col>
            </v-row>
            <v-divider/>
            <v-row>
              <v-col class="px-0 about__table--item">
                <span>2 500</span>
                <p>Avtoturargohlar</p>
              </v-col>
              <v-divider vertical/>
              <v-col class="about__table--item">
                <span>60 gektar</span>
                <p>Umumiy maydon</p>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col>
          <img src="@/assets/images/about.png" alt="image">
        </v-col>
      </v-row>
      <div class="about__title second-title">Rivojlanish rejasi</div>

      <v-row>
        <v-col class="pl-0">
          <div class="d-flex align-center">
            <div class="circle mr-5"></div>
            <div class="line"></div>
          </div>
          <div class="stepper__title">2018 yil</div>
          <div class="stepper__subtitle">Qurilishni boshlash</div>
        </v-col>
        <v-col class="pl-0">
          <div class="d-flex align-center">
            <div class="circle mr-5"></div>
            <div class="line"></div>
          </div>
          <div class="stepper__title">2021 yil</div>
          <div class="stepper__subtitle">Savdo markazini ishga tushirish</div>
        </v-col>
        <v-col class="pl-0">
          <div class="d-flex align-center">
            <div class="circle mr-5"></div>
            <div class="line"></div>
          </div>
          <div class="stepper__title">2022 yil</div>
          <div class="stepper__subtitle">Ikkinchi bozorni ishga tushirish</div>
        </v-col>
        <v-col class="pl-0">
          <div class="d-flex align-center">
            <div class="circle mr-5"></div>
          </div>
          <div class="stepper__title">2023 yil</div>
          <div class="stepper__subtitle">Mahsulotlarni qayta ishlashni yo’lga qo’yish</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
  data() {
    return {
      stepper: 1
    }
  }
}
</script>

<style lang="scss" src="assets/about.scss" scoped>

</style>
