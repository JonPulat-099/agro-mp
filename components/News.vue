<template>
  <div class="news__card">
    <div class="news__card--img">
      <img :src="image" alt="news image">
    </div>
    <div class="news__card--content">
      <div class="news__card--date">{{ date }}</div>
      <div class="news__card--title">{{ title }}</div>
      <div class="news__card--subtitle">
        {{ subtitle }}
      </div>
      <div class="news__card--btn" @click="redirect(id)">Batafsil</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    date: {
      type: String,
      default: new Date().toLocaleString()
    },
    image: {
      type: String
    },
    title: {
      type: String,
      default: 'Food city'
    },
    subtitle: {
      type: String,
      default: 'Food city'
    },
    id: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {

    }
  },
  methods: {
    redirect(id) {
      this.$router.push(`/news/${id}`)
    }
  }
}
</script>

<style lang="scss" src="assets/news.scss" scoped>

</style>
