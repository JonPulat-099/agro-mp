<template>
  <div class="container">
    <div class="profile">
      <div class="profile__body d-flex justify-space-between">
        <profile-menu/>

        <div class="profile__main">
          <div class="profile__main--title d-flex justify-space-between">
            <div>{{ $t('titles.favorites_product') }}</div>
            <div class="remove-all"> {{ $t('titles.all_remove') }}</div>
          </div>

            <v-row class="sale__products look-like pa-0">
              <v-col
                v-for="(p, idx) in best_products"
                :key="idx"
                cols="12"
                lg="4"
                md="6"
                sm="12"
              >
                <products-favorites :card="p" />
              </v-col>
            </v-row>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from "@/components/ProfileMenu";
export default {
  components: ProfileMenu,
  name: 'Favorites',
  layout: 'main',
  data:() => ({
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
  methods:{}
}
</script>

<style lang="scss" src="../../../assets/profile.scss"></style>
