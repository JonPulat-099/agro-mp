<template>
  <div class="container">
    <div class="profile">
      <div class="profile__body d-flex justify-space-between">
        <profile-menu/>

        <div class="profile__main">
          <div class="profile__main--title">
            <div>Mening buyurtmalarim</div>
          </div>
          <div class="profile__main--subtitle">
            <div>Buyurtma №102</div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from "@/components/ProfileMenu";
export default {
  components: {ProfileMenu},
  name: 'Favorite',
  layout: 'main',
  data:() => ({
  }),
  methods:{}
}
</script>

<style lang="scss" src="../../../assets/profile.scss"></style>
