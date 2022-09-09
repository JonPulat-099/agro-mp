<template>
  <div class="container product__favorite mb-16">
    <div class="headers mt-2">{{ $t('profile_menu.favorite') }} <span>({{ favorite_product.length }})</span></div>

    <v-row class="sale__products look-like">
      <v-col
        v-for="(p, idx) in favorite_product"
        :key="idx"
        cols="12"
        lg="3"
        md="6"
        sm="12"
      >
        <products-card :card="p" :id="idx"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'main',
  name: 'FavoritePage',
  data: () => ({
    // favorite_product: []
  }),
  computed:{
    favorite_product() {
      return this.$store.state.favorite
    },

  },
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
