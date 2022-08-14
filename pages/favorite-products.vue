<template>
  <div class="container product__favorite">
    <div class="headers mt-2">Sevimli mahsulotlar <span>(7)</span></div>

    <v-row class="sale__products look-like">
      <v-col
        v-for="(p, idx) in best_products"
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
</template>

<script>
export default {
  layout: 'main',
  data: () => ({
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
  }),
  methods: {}

}
</script>

<style lang="scss" >
.product__favorite {
  margin-bottom: 160px !important;
}
.headers > span {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #232730;
}
</style>
