<template>
  <div>
    <div class="profile__item d-flex flex-column">
      <nuxt-link :to="localePath('/profile')"><v-icon>mdi-account</v-icon>{{ $t('profile_menu.info') }}</nuxt-link>
      <nuxt-link :to="localePath('/profile/orders')"><v-icon>mdi-file-document</v-icon>{{ $t('profile_menu.my_orders') }}</nuxt-link>
      <nuxt-link :to="localePath('/profile/favorites')"><v-icon>mdi-heart-half-full</v-icon>{{ $t('profile_menu.favorite') }}</nuxt-link>
      <nuxt-link :to="localePath('/')"><v-icon>mdi-email</v-icon>{{ $t('profile_menu.message') }}</nuxt-link>
      <nuxt-link :to="localePath('/')"><v-icon>mdi-logout</v-icon>{{ $t('profile_menu.logout') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileMenu',
}
</script>

<style lang="scss" src="assets/profile.scss">

</style>
