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
                placeholder="Qidiruv"
              ></v-text-field>
            </div>
          </div>
          <div class="sort-type">
            <v-select
              label="Saralash"
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
            <products-card :card="p" />
          </v-col>
        </v-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'main',
  data: () => ({
    sort: ["Ommabop", "Yangi", "Narx o'sishi bo'yicha", "Narx kamayishi bo'yicha"],
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
    ],
  }),
}
</script>

<style lang="scss">

</style>
