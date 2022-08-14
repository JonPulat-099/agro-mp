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
<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
