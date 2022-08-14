<template>
  <div class="register d-flex flex-column align-center mt-5">
    <img src="/logo.svg" alt="logo" />
    <div class="login__body elevation-5 mt-8 pa-4 px-6">
      <div class="login__title text-h6 text-center mb-5 mt-5">
        Ro'yxatdan o'tish
      </div>
      <v-row>
        <v-col>
          <v-text-field
            outlined
            label="Ismingizni kiriting"
            v-model="user_register.name"
          />
          <v-text-field
            label="Telefon nomer"
            type="text"
            hide-spin-buttons
            outlined
            placeholder="(99) 403-68-28"
            prefix="+998"
            v-mask="'(##) ###-##-##'"
            v-model="user_register.phone"
          ></v-text-field>

          <v-text-field
            label="Parolni kiriting"
            :type="eye_pass ? 'password' : 'text'"
            :append-icon="eye_pass ? 'mdi-eye' : 'mdi-eye-off'"
            outlined
            hide-details
            v-model="user_register.password"
            @click:append="eye_pass = !eye_pass"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            outlined
            label="Familiyangizni kiriting"
            v-model="user_register.lastname"
          />
          <v-text-field
            outlined
            label="Emailni kiriting"
            v-model="user_register.email"
          />
          <v-select
            label="Hududni tanlang*"
            outlined
            :items="regions"
            v-model="user_register.region"
          />
        </v-col>
      </v-row>

      <v-checkbox
        label="Saytdan foydalanish shartlariga roziman*"
        color="green"
        v-model="user_register.remember_me"
      />
      <nuxt-link to="" class="connect"> Ro'yxatdan o'ting </nuxt-link>

      <div class="text-center my-5">Allaqachon ro'yxatdan o'tganmisiz ?</div>
      <v-row justify="center">
        <v-btn outlined color="green"  to="/login" class="text-center mb-5 mt-5" dark>
          Kirish
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    regions: [
      'Toshkent',
      'Samarqand',
      'Buxoro',
      'Namangan',
      'Termiz',
      'Jizzax',
      'Qashqadaryo',
    ],
    eye_pass: true,
    user_register: {
      email: '',
      region: '',
      lastname: '',
      phone: '',
      password: '',
      name: '',
      offerta: false,
    },
  }),
  methods: {},
}
</script>

<style lang="scss">
.register {
  .connect {
    padding: 13px 30px;
    background: #00cd6b;
    box-shadow: 0 12px 24px rgba(0, 205, 107, 0.3);
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    color: #fff !important;
    display: block;
    text-align: center;
  }
  .login {
    margin-bottom: 50px;
    &__body {
      border-radius: 15px;
      background: #fff;
      width: min(100%, 770px);
    }
    &__forgod {
      cursor: pointer;
    }
  }
}
</style>
