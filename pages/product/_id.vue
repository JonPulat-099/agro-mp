<template>
  <div class="container">
    <v-row>
      <v-col>
        <div class="product">
          <div class="product__body d-flex">
            <div class="product__items">
              <div :class="`product__item ${item.id == active_img ? 'active' : ''}`" v-for="(item, idx)  in product" :key="idx" @click="getImg(item)">
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
          <div class="product__info--id">Mahsulot ID raqami: <span>324256</span></div>
          <div class="product__info--market">Do’kon raqami: <span>B-124</span></div>
          <div class="product__info--title">Qizil Olma</div>
          <s class="product__info--old-price">18 000 so’m / kg</s>
          <div class="d-flex justify-space-between align-center">
            <div class="product__info--price">15 000<span> so’m / kg</span></div>
            <div class="product__info--rating d-flex align-center">
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                small
                dense
                half-increments
              ></v-rating>
              <span class="product__info--rating-val ml-2">{{rating}}</span>
            </div>
            <div>
              <v-icon size="18" color="orange">mdi-eye-outline</v-icon>
              <span>213</span>
            </div>
          </div>
          <div class="product__info--description">
            Respublikamizning Jizzax viloyat Zomin tumanida yetishtirilgan sara Qizil shirin olma. Faqatgina ta’biy ravishda yetishtirilgan saqlash uchun moslangan olma.
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
                Sevimlilar qatoriga qo’shish
              </div>
            </div>
            <div class="d-flex align-center">
              <v-btn icon>
                <v-icon color="#F8C018">mdi-share-variant-outline</v-icon>
              </v-btn>
              <div class="sub_text">
                Ulashish
              </div>
            </div>
          </div>

          <div class="d-flex justify-space-between mb-6">
            <Button status="warning_btn" :text="'Savatga qo’shish'"/>
            <Button status="success_btn" :text="'Hoziroq sotib olish'"/>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-5"/>

  </div>
</template>

<script>
export default {
  layout: "main",
  data: () => ({
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
  }),
  methods: {
      toggleFavourites() {
        this.is_favorite = !this.is_favorite
    },
    getImg(item) {
      this.selected_img = item.img;
      this.active_img = item.id;
    }
  },
  mounted(){
   this.active_img = this.product[0].id;
  }
}
</script>

<style lang="scss" src="@/assets/product.scss">
</style>
