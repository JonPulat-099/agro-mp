<template>
  <div class="container">
    <slider />
    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers mt-0">{{ $t('titles.best_categories') }}</h1>
      <a href="#" class="show__more">
        {{ $t('links.view_more') }}
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
    <div class="popular-header mb-10">
      <v-flex row wrap xs12 justify-space-between  align-center>
        <h1 class="headers mt-0 mb-0">{{ $t('titles.popular_products') }}</h1>
        <a href="#" class="show__more">
          {{ $t('links.view_more') }}
          <v-icon>mdi-chevron-right</v-icon>
        </a>
      </v-flex>
    </div>

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
      <h1 class="headers">{{ $t('titles.hot_offers') }}</h1>
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

    <div class="popular-header mb-10">
      <v-flex row wrap xs12 justify-space-between align-center>
        <h1 class="headers my-0">{{ $t('titles.new_product') }}</h1>
        <a href="#" class="show__more">
          {{ $t('links.view_more') }}
          <v-icon>mdi-chevron-right</v-icon>
        </a>
      </v-flex>
    </div>


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
      <h1 class="headers">{{ $t('titles.why_us') }}</h1>
    </v-flex>

    <v-row class="blocks why__us--section">
      <v-col v-for="(w, i) in why_us" :key="i" cols="12" lg="4" md="6" sm="12">
        <div class="why__us--item">
          <img :src="w.icon" alt="" />
          <h3 class="my-2">{{ w.title }}</h3>
          <p>{{ w.text }}</p>
        </div>
      </v-col>
    </v-row>

    <div class="sale">
      <h1 class="headers">{{ $t('titles.sale_product') }}</h1>
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
          title: this.$t('why_us.card_1.title'),
          text: this.$t('why_us.card_1.content'),
        },
        {
          icon: '/best_cost.svg',
          title: this.$t('why_us.card_2.title'),
          text: this.$t('why_us.card_2.content'),
        },
        {
          icon: '/all_time.svg',
          title: this.$t('why_us.card_3.title'),
          text: this.$t('why_us.card_3.content'),
        },
        {
          icon: '/fast.svg',
          title: this.$t('why_us.card_4.title'),
          text: this.$t('why_us.card_4.content'),
        },
        {
          icon: '/deliviry.svg',
          title: this.$t('why_us.card_5.title'),
          text: this.$t('why_us.card_5.content'),
        },
        {
          icon: '/pay.svg',
          title: this.$t('why_us.card_6.title'),
          text: this.$t('why_us.card_6.content'),
        },
      ],
    }

  },
  methods: {
  }
}
</script>

<style lang="scss" src="assets/home.scss"></style>
