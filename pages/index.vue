<template>
  <div class="container">
    <slider />
    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers">Sara kategoriyalar</h1>
      <a href="#" class="show__more">
        Barchasini ko’rsatish
        <v-icon>mdi-chevron-right</v-icon>
      </a>
    </v-flex>

    <v-layout row wrap class="best__categories">
      <v-flex
        v-for="(c, i) in best_categories"
        :key="i"
        md3
        xs12
        class="best__categories--items"
      >
        <article :style="`background: ${c.bg_color}`">
          <aside>
            <p>{{ c.name }}</p>
            <span> {{ c.count }} </span>
          </aside>
          <aside>
            <img :src="c.img" alt="" />
          </aside>
        </article>
      </v-flex>
    </v-layout>

    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers">Ommabop mahsulotlar</h1>
      <a href="#" class="show__more">
        Barchasini ko’rsatish
        <v-icon>mdi-chevron-right</v-icon>
      </a>
    </v-flex>

    <v-row class="blocks">
      <v-col
        v-for="(p, i) in best_products"
        :key="i"
        cols="12"
        lg="3"
        md="6"
        sm="12"
      >
        <products-card :card="p" />
      </v-col>
    </v-row>

    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers">Qaynoq takliflar</h1>
    </v-flex>
    <v-row class="blocks">
      <v-col v-for="(o, idx) in hotOffers" :key="idx">
        <hot-offers
          :bg-color="o.bgColor"
          :img="o.img"
          :title="o.title"
          :old-price="o.oldPrice"
          :old-currency="o.oldCurrency"
          :old-unit="o.oldUnit"
          :new-price="o.oldPrice"
          :new-currency="o.newCurrency"
          :new-unit="o.newUnit"
        />
      </v-col>
    </v-row>

    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers">Yangi mahsulotlar</h1>
      <a href="#" class="show__more">
        Barchasini ko’rsatish
        <v-icon>mdi-chevron-right</v-icon>
      </a>
    </v-flex>

    <v-row class="blocks">
      <v-col
        v-for="(p, i) in new_products"
        :key="i"
        cols="12"
        lg="3"
        md="6"
        sm="12"
      >
        <products-card :card="p" />
      </v-col>
    </v-row>

    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers">Nima uchun aynan biz?</h1>
    </v-flex>

    <v-row class="blocks why__us--section">
      <v-col v-for="(w, i) in why_us" :key="i" cols="12" lg="4" md="6" sm="12">
        <div class="why__us--item">
          <img :src="w.icon" alt="" />
          <h3>{{ w.title }}</h3>
          <p>{{ w.text }}</p>
        </div>
      </v-col>
    </v-row>

    <div class="sale">
      <div class="sale__title">Chegirmali mahsulotar</div>
      <v-row class="sale__products">
        <v-col
          v-for="(p, idx) in new_products"
          :key="idx"
          cols="12"
          lg="3"
          md="6"
          sm="12"
        >
          <products-card :card="p" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import HotOffers from '../components/HotOffers.vue'
import Slider from '../components/Slider.vue'
export default {
  components: { Slider, HotOffers },
  layout: 'main',
  name: 'IndexPage',
  data() {
    return {
      hotOffers: [
        {
          img: '/offer-1.png',
          title: 'Tabiy o’rik sharbati',
          bgColor: '#FFC369',
          oldPrice: 15000,
          oldCurrency: 'so`m',
          oldUnit: 'L',
          newPrice: 10000,
          newCurrency: 'so`m',
          newUnit: 'kg',
        },
        {
          img: '/offer-1.png',
          title: 'Tabiy o’rik sharbati',
          bgColor: '#FED6A5',
          oldPrice: 15000,
          oldCurrency: 'so`m',
          oldUnit: 'L',
          newPrice: 10000,
          newCurrency: 'so`m',
          newUnit: 'kg',
        },
        {
          img: '/offer-1.png',
          title: 'Tabiy o’rik sharbati',
          bgColor: '#FFC369',
          oldPrice: 15000,
          oldCurrency: 'so`m',
          oldUnit: 'L',
          newPrice: 10000,
          newCurrency: 'so`m',
          newUnit: 'kg',
        },
      ],
      best_categories: [
        {
          name: 'Vegetables',
          img: '/category/vegetables.png',
          count: '(124) xil',
          bg_color: '#96D458',
        },
        {
          name: 'Fruits',
          img: '/category/fruits.png',
          count: '(124) xil',
          bg_color: '#FFF1AB',
        },
        {
          name: 'Meats',
          img: '/category/meats.png',
          count: '(124) xil',
          bg_color: '#FF92A6',
        },
        {
          name: 'Breads',
          img: '/category/breads.png',
          count: '(124) xil',
          bg_color: '#FED6A5',
        },
      ],

      best_products: [
        {
          is_favorite: false,
          img: '/apple.png',
          category_name: 'Sabzavotlar',
          rating: 4.5,
          product_name: 'Qizil olma',
          cost: '20 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
        {
          is_favorite: false,
          img: '/tomato.png',
          category_name: 'Go`sht mahsulotlari',
          rating: 4,
          product_name: 'Mol go`shti',
          cost: '68 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
        {
          is_favorite: false,
          img: '/meat.png',
          category_name: 'Mevalar',
          rating: 4.5,
          product_name: 'Qizil olma',
          cost: '15 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
        {
          is_favorite: false,
          img: '/banana.png',
          category_name: 'Mevalar',
          rating: 5,
          product_name: 'Banan',
          cost: '17 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
      ],

      new_products: [
        {
          is_favorite: null,
          is_new: true,
          img: '/apelsin.png',
          category_name: 'Mevalar',
          rating: 0,
          product_name: 'Apelsin',
          cost: '35 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
        {
          is_favorite: null,
          is_new: true,
          img: '/corn.png',
          category_name: 'Sabzavotlar',
          rating: 0,
          product_name: 'Makkajo’hori',
          cost: '68 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
        {
          is_favorite: null,
          is_new: true,
          img: '/cucumber.png',
          category_name: 'Sabzavotlar',
          rating: 0,
          product_name: 'Bodring',
          cost: '15 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
        {
          is_favorite: null,
          is_new: true,
          img: '/milk.png',
          category_name: 'Sut mahsulotlari',
          rating: 5,
          product_name: 'Lactel suti',
          cost: '6 000',
          currency: "so'm",
          unit: 'kg',
          order: 1,
          count: 1,
        },
      ],

      why_us: [
        {
          icon: '/natural.svg',
          title: 'Faqatgina tabiy mahsulotlar',
          text: 'Bizning onlayd do’kon faqatgina tabiy bo’lgan mahsulotlardan foydalanamiz. Biz mijozlar uchun qayg’uramiz. ',
        },
        {
          icon: '/best_cost.svg',
          title: 'Hamyonbop narxlar',
          text: 'Bizning do’konimzidagi mahsulotlarning sifati yaxshi bo’libgina qolmasdan hamyonbop narxlarda sotiladi.',
        },
        {
          icon: '/all_time.svg',
          title: '24/7 ish vaqti',
          text: 'Bizning onlayn do’kon 24/7 vaqtlarda ishlaydi. Istalgan vaqtda buyurtma berishingiz mumkin.',
        },
        {
          icon: '/fast.svg',
          title: 'Tezkor va sifatli yetkazib berish',
          text: 'Biz barcha mahsulotlarni tez hamda sifatli yetkazib beramiz. ',
        },
        {
          icon: '/deliviry.svg',
          title: 'O’zbekiston bo’ylab yetkazib berish',
          text: 'Biz barcha mahsulotlarni O’zbekiston bo’ylab uyingizgacha yetkazib beramiz.',
        },
        {
          icon: '/pay.svg',
          title: 'Ko’p funksiyali to’lov tizimi',
          text: 'Bizda barcha turdagi to’lov tizimlar mavjud. Naqd ko’rinishida yoki bo’lmasam Click , Payme hamda boshqa turdagi tizimlar ham ishlaydi',
        },
      ],
    }

  },
  methods: {
  }
}
</script>

<style lang="scss" src="@/assets/home.scss"></style>
