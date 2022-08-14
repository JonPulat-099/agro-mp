<template>
  <div>
    <div class="profile__item d-flex flex-column">
      <nuxt-link to="/profile"><v-icon>mdi-account</v-icon>Profil ma’lumotlarim</nuxt-link>
      <nuxt-link to="/profile/orders"><v-icon>mdi-file-document</v-icon>Mening buyurtmalarim</nuxt-link>
      <nuxt-link to="/profile/favorites"><v-icon>mdi-heart-half-full</v-icon>Sevimli mahsulotlar</nuxt-link>
      <nuxt-link to="/"><v-icon>mdi-email</v-icon>Xabarlar</nuxt-link>
      <nuxt-link to="/"><v-icon>mdi-logout</v-icon>Chiqish</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
  data: () => ({})
}
</script>

<style lang="scss" src="assets/profile.scss">

</style>
