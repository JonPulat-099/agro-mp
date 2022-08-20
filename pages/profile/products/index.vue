<template>
  <div class="container">
    <div class="profile">
      <div class="profile__body d-flex justify-space-between">
        <profile-menu/>

        <div class="profile__main" v-if="my_products.length">
          <div class="profile__main--title d-flex justify-space-between">
            <div>{{ $t('titles.my_products') }}</div>
          </div>
          <div class="d-flex justify-center flex-column align-center">
            <p class="no-product">{{ $t('titles.no_product') }}</p>
            <img src="/no-product.svg" alt="no-product">
            <Button :text="$t('btns.add_product')" status="warning_btn"  :click="addProduct"/>
          </div>
        </div>
        <div class="profile__main" v-else>
          <div class="profile__main--title d-flex justify-space-between">
            <div>{{ $t('titles.my_products') }}</div>
            <div class="d-flex justify-end mb-5">
              <v-btn dark color="#07d271" :to="localePath('/profile/products/add')" depressed class="text-capitalize">
                {{ $t('btns.add_product') }}
              </v-btn>
            </div>
          </div>

          <v-row class="sale__products look-like pa-0">
            <v-col
              v-for="(p, idx) in my_products"
              :key="idx"
              cols="12"
              lg="4"
              md="6"
              sm="12"
            >
              <products-favorites :card="p"/>
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
  components: {ProfileMenu},
  name: 'ProductsPage',
  layout: 'main',
  data: () => ({
    my_products: [
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
  methods: {
    addProduct(){
      this.$router.push((`/${this.$i18n.locale}/profile/products/add`))
    }
  }
}
</script>

<style lang="scss" src="../../../assets/profile.scss"></style>
