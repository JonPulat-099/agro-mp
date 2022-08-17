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
    _is_auth() { return this.$auth.loggedIn }
  },
  mounted() {
    console.log(this.is_auth == false && this._is_auth);
    if (this.is_auth == false && this.$is_auth) {
      this.$store.dispatch("cabinet/getUserInfo")
    }
  }
}
</script>
