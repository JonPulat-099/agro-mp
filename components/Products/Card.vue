<template>
  <v-card class="product__card">
    <v-card-title elevation="0">
      <span v-if="card.is_new" class="new"> Yangi </span>
      <v-btn icon @click="toggleFavourites(card, id)">
        <v-icon color="#F8C018">
          {{ !card.is_favorite ? 'mdi-heart-outline' : 'mdi-heart' }}
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <img :src="card.img" alt="card image" />
      <article class="product__info">
        <div class="category">
          <p>{{ card.category_name }}</p>
          <span v-if="card.is_new && card.rating == null">
            <v-icon color="#F8C018">mdi-star</v-icon>
            {{ card.rating }}
          </span>
        </div>
        <nuxt-link :to="localePath(`/product/${card.category_name}`)" class="product-name">
          <p class="product__name">{{ card.title }}</p>
        </nuxt-link>
        <p class="cost">
          {{ card.cost.toLocaleString() }} <span> {{ card.currency }} / {{ card.unit }} </span>
        </p>
      </article>
    </v-card-text>
    <v-card-actions>
      <aside>
        <v-btn icon>
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <span> 1 {{ card.unit }} </span>
        <v-btn icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </aside>
      <aside>
        <v-btn icon @click="addBasket(card)">
          <img src="/icons/bag.svg" alt="" />
        </v-btn>
      </aside>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['card', 'id'],
  data() {
    return {}
  },

  methods: {
    toggleFavourites(item, id) {
      const check = item.is_favorite;
      if(!check) {
      this.card.is_favorite = true
        this.$store.commit('setFavorite', item);
        this.$toast.success(`" ${item.title} " added to Favorite !`, {theme: 'bubble'})
      }
      else  {
        this.$store.commit('deleteFavorite', id);
        this.$toast.success(`${item.title} removed from Favorite !`, {theme: 'bubble'})
      }
    },
    addBasket(item) {
      this.$store.commit('setProduct', item);
      this.$toast.success('Product added !', {theme: 'bubble'})
    },
  },
}
</script>

<style lang="scss">
.product-name {
  text-decoration: none;
  transition: color linear .2s;
  color: red !important;

  &:hover {
    background-color: #000;
    color: #00cd6b !important;
  }
}
.product__card {
  border-radius: 10px !important;
  border: 1px solid $secondary_line !important;
  box-shadow: none !important;

  .v-card__title {
    .new {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      border-radius: 8px;

      color: $white;
      padding: 5px 14px;
      background: $base_color;
    }

    button {
      margin-left: auto;
      float: right;
      display: block;
    }
  }

  .v-card__text {
    img {
      width: 100%;
      height: 164px;
      object-fit: contain;
    }
  }
  .v-card__actions {
    display: flex;
    justify-content: space-between !important;
    margin: 0 0 20px;

    aside {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:first-child {
        border-radius: 12px;
        border: 1px solid $base_color;
        overflow: hidden;
        .v-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: $base_color;
          color: $white;
        }
        span {
          display: inline-block;
          margin: 0 5px;
        }
      }

      &:last-child {
        .v-btn {
          width: 59px;
          height: 42px;
          border-radius: 10px;
          background: $yellow_btn;

          img {
            filter: brightness(0) invert(1);
          }
        }
      }
    }
  }

  .product__info {
    .category {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      p {
        margin: 0;
      }

      span {
        line-height: 24px;
      }
    }

    .product__name {
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      color: $black;
      margin: 10px 0;
      transition: color .2s linear 0s;
      &:hover {
        color: #00cd6b;
      }
    }

    .cost {
      font-weight: 600;
      font-size: 22px;
      line-height: 110%;
      color: $black;

      span {
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
}
</style>
