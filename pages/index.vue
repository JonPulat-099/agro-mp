<template>
  <div class="container">
    <slider />
    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers">Sara kategoriyalar</h1>
      <a href="#" class="show__more">
        Barchasini ko’rsatish
        <v-icon>mdi-chevron-right</v-icon>
      </a>
    </v-flex>

    <v-layout row wrap class="best__categories">
      <v-flex
        v-for="(c, i) in best_categories"
        :key="i"
        md3
        xs12
        class="best__categories--items"
      >
        <article :style="`background: ${c.bg_color}`">
          <aside>
            <p>{{ c.name }}</p>
            <span> {{ c.count }} </span>
          </aside>
          <aside>
            <img :src="c.img" alt="" />
          </aside>
        </article>
      </v-flex>
    </v-layout>

    <v-flex row wrap xs12 justify-space-between align-center>
      <h1 class="headers">Ommabop mahsulotlar</h1>
      <a href="#" class="show__more">
        Barchasini ko’rsatish
        <v-icon>mdi-chevron-right</v-icon>
      </a>
    </v-flex>

    <v-layout row wrap>
      <products-card />
    </v-layout>
  </div>
</template>

<script>
import Slider from '../components/Slider.vue'
export default {
  components: { Slider },
  layout: 'main',
  name: 'IndexPage',
  data() {
    return {
      best_categories: [
        {
          name: 'Vegetables',
          img: '/category/vegetables.png',
          count: '(124) xil',
          bg_color: '#96D458',
        },
        {
          name: 'Fruits',
          img: '/category/fruits.png',
          count: '(124) xil',
          bg_color: '#FFF1AB',
        },
        {
          name: 'Meats',
          img: '/category/meats.png',
          count: '(124) xil',
          bg_color: '#FF92A6',
        },
        {
          name: 'Breads',
          img: '/category/breads.png',
          count: '(124) xil',
          bg_color: '#FED6A5',
        },
      ],
    }
  },
}
</script>

<style lang="scss" src="@/assets/home.scss"></style>
