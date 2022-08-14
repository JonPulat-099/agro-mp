<template>
  <div class="container">
    <div class="profile">
      <div class="profile__body d-flex justify-space-between">
        <profile-menu/>

        <div class="profile__main">
          <div class="profile__main--title">Mening buyurtmalarim</div>
          <div class="profile__main--subtitle">Buyurtma №100</div>
          <div class="profile__main--item">
            <div class="profile__main--header">
              <ul>
                <li>Umumiy narxi</li>
                <li>Mahsulotlar soni</li>
                <li>Buyurtma sanasi</li>
                <li>Buyurtma sanasi</li>
                <li>Manzil</li>
              </ul>
              <v-divider class="mt-4 mb-5"/>
              <div class="profile__main--value">
                <ul>
                  <li>360 000 so’m</li>
                  <li>3</li>
                  <li>12.04.2022, 6:30pm</li>
                  <li><v-btn color="amber" class="elevation-0" x-small dark rounded>Active</v-btn></li>
                  <li><img src="/profile/map.png" alt="map"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from "@/components/ProfileMenu";
export default {
  components: ProfileMenu,
  name: 'ProfileOrder',
  layout: 'main',
  data:() => ({}),
  methods: {

  }
}
</script>

<style lang="scss" src="assets/profile.scss"></style>
