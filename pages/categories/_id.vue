<template>
  <div class="container">
    <div class="sort">
      <Filters />
      <div class="result__body">
        <div class="navbar__top d-flex mb-4">
          <div class="filter left">
            <div class="search">
              <v-text-field
                prepend-icon="mdi-magnify"
                hide-details
                :placeholder="$t('labels.search')"
              />
            </div>
          </div>
          <div class="sort-type">
            <v-select
              :label="$t('labels.sort')"
              hide-details
              :items="sort"
              append-icon="mdi-chevron-down"
              background-color="#F7FCFC"
              dense
              class="mt-0 pt-0"
            />
          </div>
        </div>

        <v-row class="blocks ml-2">
          <v-col
            v-for="(p, i) in best_products"
            :key="i"
            cols="12"
            lg="4"
            md="6"
            sm="12"
          >
            <products-card :card="p" :id="i"/>
          </v-col>
        </v-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'main',
  name: 'CategoryPage',
  data: () => ({
    sort: ["Ommabop", "Yangi", "Narx o'sishi bo'yicha", "Narx kamayishi bo'yicha"],
    best_products: [
      {
        is_favorite: false,
        img: '/apple.png',
        category_name: 'Sabzavotlar',
        rating: 4.5,
        title: 'Qizil olma',
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
        title: 'Mol go`shti',
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
        title: 'Qizil olma',
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
        title: 'Banan',
        cost: '17 000',
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
        title: 'Qizil olma',
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
        title: 'Mol go`shti',
        cost: '68 000',
        currency: "so'm",
        unit: 'kg',
        order: 1,
        count: 1,
      },
    ],
  }),
  created() {
    // this.getAllProducts();
  },
  methods: {
    getAllProducts() {
      this.$axios.$get('/products-all/').then(res => {
        this.best_products = res.data.products
      })
    }
  }
}
</script>

<style lang="scss">

</style>
