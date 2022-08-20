<template>
  <div class="container">
    <div class="profile">
      <div class="profile__body d-flex justify-space-between">
        <profile-menu/>

        <div class="profile__main">
          <div class="profile__main--title">
            <div>{{ $t('btns.add_product') }}</div>
          </div>
          <div class="profile__main--subtitle">
            <div>{{ $t('add.photo') }}</div>
          </div>
          <div class="profile__main--img">
            <img  src="/image.svg" alt="default image" v-if="!photo_url">
            <img class="selected" :src="photo_url" alt="photo" v-else>
          </div>
          <label for="photo" class="profile__main--btn">{{ $t('add.select_img') }}</label>
          <input type="file" id="photo" accept="image/*" hidden @change="uploadFile">
          <v-divider class="my-8"/>
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                :label="$t('add.category')"
                outlined
                color="#07d271"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                :label="$t('add.in_category')"
                outlined
                color="#07d271"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                :label="$t('add.name')"
                outlined
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                :label="$t('add.unit')"
                outlined
                color="#07d271"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>

            <v-col cols="12" md="6" class="d-flex ">
              <v-text-field
                :label="$t('add.price')"
                outlined
              />
              <v-select
                outlined
                color="#07d271"
                style="max-width: 90px;"
                class="ml-4"
                v-model="currency"
                :items="currency_list"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col>
              <v-select
                outlined
                color="#07d271"
                :label="$t('add.status')"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6" class="d-flex ">
              <v-text-field
                :label="$t('add.amount')"
                outlined
              />
              <v-select
                outlined
                color="#07d271"
                style="max-width: 90px;"
                class="ml-4"
                v-model="amount"
                :items="amount_list"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                outlined
                color="#07d271"
                :label="$t('add.type_pay')"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                outlined
                color="#07d271"
                :label="$t('add.delivery')"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                outlined
                color="#07d271"
               :label="$t('add.country')"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                outlined
                color="#07d271"
                :label="$t('add.region')"
              >
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-chevron-down</v-icon>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Manzilni kiriting" outlined>
                <template v-slot:append>
                  <v-icon color="#FAB529">mdi-map-marker</v-icon>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                name="input-7-4"
                :label="$t('add.description')"
                value=""
              ></v-textarea>
            </v-col>
          </v-row>
          <div class="profile__main--text">
            {{ $t('add.sale_title') }}
          </div>
          <v-checkbox :label="$t('add.check')" color="#07D271"/>
          <div>
            <Button :text="$t('add.add_product')" status="success_btn" :click="addProduct"/>
          </div>
        </div >
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from "@/components/ProfileMenu";

export default {
  components: {ProfileMenu},
  name: 'ProfileAdd',
  layout: 'main',
  data: () => ({
    currency: 'UZS',
    currency_list: ['UZS','USD', 'RUB'],
    photo_url: "",
    file: '',
    amount: 't',
    amount_list:['t','l','kg']
  }),
  methods: {
    async uploadFile(e) {
      this.file = e.target.files[0];
      if(this.file) this.photo_url = URL.createObjectURL(this.file);
    },
    addProduct() {
      console.log('added')
    }
  }
}
</script>

<style lang="scss" src="assets/profile.scss"></style>
