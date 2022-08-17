<template>
  <div class="container">
    <div class="profile">
      <div class="profile__body d-flex justify-space-between">
        <profile-menu/>

        <div class="profile__main">
          <div class="profile__main--title d-flex justify-space-between">
            <div>{{ $t("titles.profile_info") }}</div>
            <div><v-btn color="amber" elevation="0" dark small><v-icon size="18" class="mr-2">mdi-pencil</v-icon> {{$t("btns.change")}} </v-btn></div>
          </div>
          <div class="profile__main--avatar text-center">
            <img src="/profile/avatar.svg" alt="avatar">
          </div>
          <div>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              :label="$t('labels.select_img')"
              rounded
              outlined
              dense
              class="mt-5"
              color="#07d271"
            />
          </div>

          <v-row class="mt-6">
            <v-col>
              <v-text-field
                :label="$t('labels.add_name')"
                outlined
                color="#07D271"
              />
            </v-col>
            <v-col>
              <v-text-field :label="$t('labels.add_surname')" outlined color="#07D271"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                :label="$t('labels.add_phone')"
                outlined
                color="#07D271"
                v-mask="'+### (##) ### ## ##'"
                v-model="user_info.phone"
              />
            </v-col>
            <v-col>
              <v-text-field
                :label="$t('labels.add_login')"
                outlined
                color="#07D271"
                v-model="user_info.login"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                :type="password ? 'text': 'password'"
                :label="$t('labels.add_password')"
                outlined
                color="#07D271"
                :append-icon="password ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="password = !password"
                v-model="user_info.password"
              />
            </v-col>
            <v-col>
              <v-text-field :label="$t('labels.add_email')" outlined color="#07D271"/>
            </v-col>
          </v-row>
          <v-divider class="mb-9"/>

          <div class="profile__place">
            <div class="profile__place--title d-flex justify-space-between">
<<<<<<< HEAD
              <div>Boshqa ma’lumotlar</div>
              <v-btn color="amber" elevation="0" dark small><v-icon size="18">mdi-pencil</v-icon>O’zgartirish</v-btn>
=======
              <div>{{ $t('titles.other_info') }}</div>
              <v-btn color="amber" elevation="0" dark small><v-icon size="18">mdi-pencil</v-icon>
                {{ $t('btns.change') }}</v-btn>
>>>>>>> fix all
            </div>
            <v-row class="mt-8">
              <v-col>
                <v-select
                  :label="$t('labels.select_country')"
                  outlined
                  color="#07d271"
                >
                  <template v-slot:append>
                    <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                  </template>
                </v-select>
              </v-col>
              <v-col>
                <v-select
                  :label="$t('labels.select_region')"
                  outlined
                  color="#07d271"
                >
                  <template v-slot:append>
                    <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                  </template>
                </v-select>
              </v-col>
              <v-col>
                <v-text-field
                  :label="$t('labels.add_address')"
                  outlined
                  color="#07d271"
                >
                  <template v-slot:append>
                    <v-icon color="#FAB529">mdi-map-marker</v-icon>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
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
  name: '',
  layout: 'main',
  data:() => ({
    password: false,
    user_info: {
      name: '',
      surname: '',
      phone: '',
      login: '',
      password: '',
      email: '',
    },
    rules: [
      value => !value || value.size < 5000000 || 'Avatar size should be less than 5 MB!',
    ],
  }),
  methods: {

  }
}
</script>

<style lang="scss" src="assets/profile.scss"></style>
