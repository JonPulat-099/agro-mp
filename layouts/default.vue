<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
  computed: {
    is_auth() { return this.$store.state.cabinet.is_auth },
  },
  mounted() {
    if (this.is_auth == false && this.$is_auth) {
      this.$store.dispatch("cabinet/getUserInfo")
    }
  }
}
</script>
