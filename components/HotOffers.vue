<template>
  <div>
    <div class="offers">
      <v-card
        class="
          offers__body
          d-flex
          justify-space-between
          py-5
          px-4
          rounded-lg
          elevation-0
        "
        :color="bgColor"
      >
        <div class="offers__item d-flex flex-column">
          <div class="offers__item-title">{{ title }}</div>
          <s class="mt-auto">
            {{ oldPrice }} {{ oldCurrency }} / {{ oldUnit }}
          </s>
          <div class="offers__item-price">
            <span>{{ newPrice }}</span>
            {{ newCurrency }} / {{ newUnit }}
          </div>
        </div>
        <div class="offers__item">
          <img :src="img" alt="offer image" />
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotOffers',
  props: {
    img: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
    title: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    oldCurrency: {
      type: String,
      default: 'so`m',
    },
    oldUnit: {
      type: String,
      default: 'kg',
    },
    newPrice: {
      type: Number,
      required: true,
    },
    newCurrency: {
      type: String,
      default: 'so`m',
    },
    newUnit: {
      type: String,
      default: 'kg',
    },
  },
  data: () => ({}),
}
</script>

<style lang="scss">
.offers {
  // margin-top: 40px;
  // margin-bottom: 200px;
  &__item {
    s {
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
      color: #232730;
    }
  }
  &__item-title {
    max-width: 143px;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    color: #232730;
  }
  &__item-price {
    span {
      font-weight: 700;
      font-size: 22px;
      line-height: 110%;
      color: #232730;
      margin-right: 10px;
    }
  }
}
</style>
