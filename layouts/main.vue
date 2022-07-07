<template>
  <v-app>
    <Navbar />
    <v-main>
      <!-- <v-container> -->
        <Nuxt />
      <!-- </v-container> -->
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {}
  },
}
</script>
