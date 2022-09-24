<template>
  <div class="container basket">
    <v-row class="wrap">
      <v-col cols="10" md="6" lg="8">
        <div class="d-flex justify-space-between align-center">
          <div class="basket__title">{{ $t('titles.basket') }} <span>({{ sizeProduct }})</span></div>
          <div class="basket__all-remove">
            <span>{{ $t('links.all_remove') }}</span>
            <div class="basket__trash" @click="removeAll">
              <img src="~/assets/icons/trash.svg" alt="trash">
            </div>
          </div>
        </div>
        <div class="basket__header">
          <ul class="d-flex align-center pl-0">
            <li>{{ $t('basket.name') }}</li>
            <li>{{ $t('basket.category') }}</li>
            <li>{{ $t('basket.amount') }}</li>
            <li>{{ $t('basket.price') }}</li>
          </ul>
        </div>
        <div class="basket__product pt-5" v-for="(el, idx) in selected" :key="idx">
          <div class="d-flex align-center justify-space-between">
            <div class="basket__product--name d-flex align-center">
              <div class="basket__product--img">
                <img :src="el.img" alt="product">
              </div>
              <div class="ml-2">{{ el.product_name }}</div>
            </div>
            <div class="basket__product--category">
              {{ el.category_name }}
            </div>
            <div class="basket__product--amount d-flex align-center">
              <div>
                <v-btn icon outlined color="#07D271">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span class="mx-2"> 1 {{el.amount}} {{ el.unit }} </span>
                <v-btn icon outlined color="#07D271" @click="upAmount(el)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="basket__product--price d-flex align-center">
              <p class="cost mb-0">
                {{ el.cost.toLocaleString() }} <span> {{ el.currency }} / {{ el.unit }} </span>
              </p>
            </div>
            <div class="basket__trash" @click="removeProduct(idx, el)">
              <img src="~/assets/icons/trash.svg" alt="trash">
            </div>
          </div>
          <v-divider class="mt-5"/>
        </div>


      </v-col>
      <v-col cols="10" md="4" lg="4">
        <div class="basket__total">
          <div class="basket__total--title mb-5">{{ $t('basket.all') }}</div>
          <div class="basket__total--price mb-5 d-flex justify-space-between">
            <div>{{ $t('basket.price') }}</div>
            <p class="pb-0 font-weight-bold">257 000 <span class="font-weight-light">so’m</span></p>
          </div>
          <div class="basket__total--price d-flex justify-space-between">
            <div>{{ $t('basket.sale') }}</div>
            <p class="pb-0 red--text font-weight-bold">-16 000 <span class="font-weight-light">so’m</span></p>
          </div>
          <v-divider class="mb-5"/>
          <div class="basket__total--all mb-5 d-flex justify-space-between">
            <div>{{ $t('basket.total') }}</div>
            <p class="pb-0 green--text font-weight-bold">247,000 <span class="font-weight-light">so’m</span></p>
          </div>
          <nuxt-link :to="localePath(  '/confirm')">
            <Button :text="$t('btns.confirm')" status="success_btn" :click="confirmProduct"/>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "main",
  data: () => ({
  }),
  computed:{
    selected() {
      return this.$store.state.products;
    },
    sizeProduct() {
      return this.$store.state.products.length;
    }
  },
  methods: {
    removeProduct(idx, el) {
      this.$store.commit('deleteProduct', idx)
      this.$toast.success(`Removed ${el.product_name}`, {theme: 'bubble'})
    },
    removeAll() {
      this.$store.commit('deleteAll', 1)
      this.$toast.success('All removed !', {theme: 'bubble'})
    },
    upAmount(val) {
      console.log(val);
      if(val <= 1 ) {
        return val.amount + 1;
      }
    },
    confirmProduct() {
      console.log('confirm')
    }
  }
}
</script>

<style lang="scss" src="assets/basket.scss"></style>
