<template>
  <div class="container">
    <v-row>
      <v-col>
        <div class="product">
          <div class="product__body d-flex">
            <div class="product__items">
              <div :class="`product__item ${item.id === active_img ? 'active' : ''}`" v-for="(item, idx)  in product"
                   :key="idx" @click="getImg(item)">
                <img :src="item.img" alt="img">
              </div>
            </div>
            <div class="product__main">
              <img :src="selected_img" alt="product image">
            </div>
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="product__info">
          <div class="product__info--id">{{ $t('product_info.product_id') }} <span>{{ product_info.product_id }}</span></div>
          <div class="product__info--market">{{ $t('product_info.market_number') }} <span>{{ product_info.shop_number }}</span></div>
          <div class="product__info--title">{{ product_info.name }}</div>
          <s class="product__info--old-price">{{ product_info.cost > 0 ? product_info.cost.toLocaleString() : ''}} {{ product_info.currency }} / {{product_info.unit}}</s>
          <div class="d-flex justify-space-between align-center">
            <div class="product__info--price">{{ product_info.sale_cost > 0 ? product_info.sale_cost.toLocaleString() : '' }}<span> {{ product_info.currency }} / {{ product_info.unit }}</span></div>
            <div class="product__info--rating d-flex align-center">
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                small
                dense
                half-increments
              ></v-rating>
              <span class="product__info--rating-val ml-2">{{ rating }}</span>
            </div>
            <div>
              <v-icon size="18" color="orange">mdi-eye-outline</v-icon>
              <span>213</span>
            </div>
          </div>
          <div class="product__info--description">
            {{ product_info.description }}
          </div>
          <v-divider class="my-6"/>
          <div class="d-flex justify-space-between">
            <div>
              <aside>
                <v-btn icon dark>
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <span> 1 kg </span>
                <v-btn icon dark>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </aside>
            </div>
            <div class="d-flex align-center">
              <v-btn icon @click="toggleFavourites">
                <v-icon v-if="!is_favorite" color="#F8C018">
                  mdi-heart-outline
                </v-icon>
                <v-icon v-else color="#F8C018">mdi-heart</v-icon>
              </v-btn>
              <div class="sub_text">
                {{ $t('btns.add_to_favorite') }}
              </div>
            </div>
            <div class="d-flex align-center">
              <v-btn icon>
                <v-icon color="#F8C018">mdi-share-variant-outline</v-icon>
              </v-btn>
              <div class="sub_text">
                {{ $t('btns.share') }}
              </div>
            </div>
          </div>

          <div class="d-flex justify-space-between mb-6">
            <Button status="warning_btn" :text="$t('btns.add_to_cart')" :click="addToCard"/>
            <Button status="success_btn" :text="$t('btns.buy_now')" :click="buyNow"/>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-5"/>
    <div class="product-place">
      <div class="product-place__title d-flex ">
        <div :class="!info_tab ?  'active' : ''" @click="info_tab = !info_tab">{{ $t('titles.product_info') }}</div>
        <div :class="info_tab ?  'active ml-7' : 'ml-7'" @click="info_tab = !info_tab">{{ $t('titles.comment') }}</div>
      </div>
      <div v-if="!info_tab">
        <div class="product-place__owner">
          <div>{{ $t('product_info.product_owner') }}</div>
          <span>“Po’latjon” MCHJ</span>
        </div>
        <div class="product-place__size">
          <div>{{ $t('product_info.size') }}</div>
          <span></span>
        </div>
        <div class="product-place__amount">
          <div>{{ $t('product_info.amount') }}</div>
          <span>1 t</span>
        </div>
        <div class="product-place__amount">
          <div>{{ $t('product_info.payment_type') }}</div>
          <span>Naqd pulda, Plastik karta orqali</span>
        </div>
        <div class="product-place__amount">
          <div>{{ $t('product_info.delivery') }}</div>
          <span>Haridorga yetkazib berish</span>
        </div>
        <div class="product-place__amount">
          <div>{{ $t('product_info.address') }}</div>
          <span>Toshkent viloyati, Piskent tumani</span>
        </div>
      </div>

      <div class="product-comment" v-if="info_tab">
        <v-row>
          <v-col>
            <div class="product-comment__count d-flex justify-space-between align-center mt-8">
              <div>10 {{ $t('product_info.count_comment') }}</div>
              <div class="more">{{ $t('product_info.all_comments') }}</div>
            </div>
            <div class="product-comment__comments">
              <div class="product-comment__block mt-8" v-for="(comment,idx) in comments" :key="idx">
                <div class="product-comment__block--username d-flex align-center justify-space-between">
                  <div class="product-comment__block--avatar d-flex align-center">
                    <img src="@/assets/icons/avatar.svg" alt="avatar">
                    <span class="ml-3">{{ comment.username }}</span>
                  </div>
                  <div class="product-comment__block--likes d-flex">
                    <div class="mr-4 d-flex align-center">
                      <img src="@/assets/icons/like.svg" alt="like icon">
                      <span class="ml-2">{{ comment.like }}</span>
                    </div>
                    <div class="d-flex align-center">
                      <img src="@/assets/icons/dislike.svg" alt="dislike icon">
                      <span class="ml-2">{{ comment.dislike }}</span>
                    </div>
                  </div>
                </div>
                <div class="product-comment__block--rating d-flex align-center mt-3">
                  <div>
                    <v-rating
                      v-model="comment.rating"
                      background-color="orange lighten-3"
                      color="orange"
                      small
                      readonly
                      dense
                      half-increments
                    />
                  </div>
                  <div class="text-caption ml-12">
                    {{ comment.date | prettifyDate() }}
                  </div>
                </div>
                <div class="product-comment__block--text mt-5">
                  {{ comment.text }}
                </div>
                <v-divider class="my-8" />
              </div>
            </div>
          </v-col>
          <v-col>
            <div class="add">
              <div class="add__comment d-flex align-center flex-column">
                <div class="add__comment--title">{{ $t('titles.product_rating') }}</div>
                <div class="add__comment--star">
                  <v-rating
                    v-model="comment.rating"
                    background-color="orange"
                    half-increments
                    hover
                    color="orange"
                    large
                  />
                </div>
                <div>
                  <v-textarea
                    style="min-width: 350px;"
                    outlined
                    name=""
                    :label="$t('btns.add_comment')"
                    value=""
                    hide-details
                  />
                </div>
                <Button status="warning_btn" :text="$t('btns.add_comment')"/>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="headers">{{ $t('titles.look_like') }}</div>
      <v-row class="sale__products look-like mb-16">
        <v-col
          v-for="(p, idx) in new_products"
          :key="idx"
          cols="12"
          lg="3"
          md="6"
          sm="12"
        >
          <products-card :card="p"/>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data: () => ({
    comment: {
      rating: 0,
      text: '',
      date: new Date(),
      username: ''
    },
    product_info: [],
    comments: [
      {
        like: 0,
        dislike: 0,
        rating: 3.5,
        date: new Date(),
        username: 'Odilov Mirvohid',
        text: 'Juda mazali olma ekan barchaga tavsiya etaman o’zim 100 kg sotib olgan edim sifatli mahsulot ishlab chiqaruvchilarga raxmat!'

      },
      {
        like: 0,
        dislike: 0,
        rating: 4.5,
        date: new Date(),
        username: 'Hamidullayev Asror',
        text: 'Mahsulotga gap yo’q yetkazib  berish hizmati ham ajoyib'

      },
      {
        like: 0,
        dislike: 0,
        rating: 2,
        date: new Date(),
        username: 'Akmal Erkinov',
        text: 'Mahsulot yaxshi!'

      },
    ],
    info_tab: false,
    rating: 3.5,
    selected_img: '/apple-id.png',
    product: [
      {
        id: 1,
        img: '/apple-id.png'
      },
      {
        id: 2,
        img: '/apple-id2.png'
      },
      {
        id: 3,
        img: '/apple-id3.png'
      },
      {
        id: 4,
        img: '/apple-id.png'
      },
      {
        id: 5,
        img: '/apple-id2.png'
      },
    ],
    active_img: '',
    is_favorite: false,
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

  }),
  filters:  {
    prettifyDate(val) {
      const date = new Date(val)
      return date.toISOString().slice(0, 10)
    }
  },
  created() {
    // this.getOneProduct();
  },
  methods: {
    getOneProduct() {
      const id = this.$route.params.id
      this.$axios.$get(`/products/${id}`).then(res => {
        this.product_info = res.data
      })
    },
    addToCard() {
      console.log('added')
    },
    buyNow() {
      console.log('buy now')
    },
    toggleFavourites() {
      this.is_favorite = !this.is_favorite
    },
    getImg(item) {
      this.selected_img = item.img;
      this.active_img = item.id;
    }
  },
  mounted() {
    this.active_img = this.product[0].id;
  }
}
</script>

<style lang="scss" src="assets/product.scss"></style>
