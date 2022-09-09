<template>
  <div class="container">
    <div class="breadcrumbs d-flex align-center">
      <nuxt-link :to="localePath('/')" class="active">Asosiy</nuxt-link>
      <v-icon color="#07D271" class="mx-4" size="18">mdi-chevron-right</v-icon>
      <nuxt-link :to="localePath('/news')">Yangiliklar</nuxt-link>
    </div>
    <div class="news">
      <div class="news__title">Yangliklar</div>
      <v-row>
        <v-col
          v-for="(item, idx) in news"
          :key="idx"
          cols="12"
          md="4"
        >
          <LazyNews
            :date="item.date"
            :image="item.image"
            :title="item.title"
            :subtitle="item.subtitle"
            :id="item.id"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      news: [
        {
          id: 1,
          image: '/news1.png',
          date: new Date().toLocaleString(),
          title: 'Savdo ofisining afzalliklari',
          subtitle: 'Aziz do\'stlar! Agar “Yangi Qo‘yliq Dehqon Bozor”ga tashrif buyursangiz, bizning savdo ofisimiz mutaxassislari ...',
        },
        {
          id: 2,
          image: '/news1.png',
          date: new Date().toLocaleString(),
          title: 'Savdo ofisining afzalliklari',
          subtitle: 'Aziz do\'stlar! Agar “Yangi Qo‘yliq Dehqon Bozor”ga tashrif buyursangiz, bizning savdo ofisimiz mutaxassislari ...',
        },
        {
          id: 3,
          image: '/news1.png',
          date: new Date().toLocaleString(),
          title: 'Savdo ofisining afzalliklari',
          subtitle: 'Aziz do\'stlar! Agar “Yangi Qo‘yliq Dehqon Bozor”ga tashrif buyursangiz, bizning savdo ofisimiz mutaxassislari ...',
        },
        {
          id: 4,
          image: '/news1.png',
          date: new Date().toLocaleString(),
          title: 'Savdo ofisining afzalliklari',
          subtitle: 'Aziz do\'stlar! Agar “Yangi Qo‘yliq Dehqon Bozor”ga tashrif buyursangiz, bizning savdo ofisimiz mutaxassislari ...',
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" src="assets/news.scss" scoped>

</style>
