<template>
  <div class="login d-flex flex-column align-center mt-5">
    <img src="/logo_new.svg" alt="logo" />
    <div class="login__body elevation-5 mt-8 pa-4 px-6">
      <div class="login__title text-h6 text-center mb-5 mt-5">
        Tizimga kirish
      </div>
      <v-text-field
        label="Telefon nomer"
        type="text"
        hide-spin-buttons
        outlined
        placeholder="(99) 403-68-28"
        hide-details
        prefix="+998"
        v-mask="'(##)###-##-##'"
        v-model="user_login.phone"
      />
      <div class="green--text text-right text-caption login__forgod mt-4 mb-2">
        Parolingizni unutdingizmi ?
      </div>
      <v-text-field
        label="Parolni kiriting"
        :type="eye_pass ? 'password' : 'text'"
        :append-icon="eye_pass ? 'mdi-eye' : 'mdi-eye-off'"
        outlined
        hide-details
        v-model="user_login.password"
        @click:append="eye_pass = !eye_pass"
      ></v-text-field>
      <v-checkbox
        label="Meni eslab qol"
        color="green"
        v-model="user_login.remember_me"
      />
      <div class="d-flex justify-center">
        <v-btn @click="userAuth" color="green" :to="localePath('/')" dark> Tasdiqlash </v-btn>
      </div>
      <!-- <nuxt-link to="/" class="connect"> Tadiqlash </nuxt-link> -->
      <v-row class="mt-4 mb-6" align="center">
        <v-divider />
        <div class="mx-4 mt-2 grey--text">Yoki</div>
        <v-divider />
      </v-row>
      <v-row align="center" justify="center">
        <v-icon size="42" color="#FAB529">mdi-google</v-icon>
        <v-icon size="42" color="#FAB529" class="mx-10">mdi-facebook</v-icon>
        <v-icon size="42" color="#FAB529">mdi-apple</v-icon>
      </v-row>
      <div class="text-center my-5">Sizda akkaunt mavjud emesmi ?</div>
      <v-row justify="center">
        <v-btn
          outlined
          color="green"
          class="text-center mb-5 mt-5"
          dark
          :to="localePath('/registration')"
        >
          Ro'yxatdan o'tish
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    eye_pass: true,
    user_login: {
      phone: '',
      password: '',
      remember_me: false,
    },
  }),
  methods: {
    async userAuth() {
      // try {
      //   const phone = String(this.user_login.phone).replaceAll(/[-\ ()]/g, '')
      //   let resp = (await this.$auth.loginWith('local', {
      //     data: {
      //       phone: '998'+ phone,
      //       password: this.user_login.password
      //     }
      //   })).data
      //   if (resp.state === "success" && resp.data?.token) {
      //     this.$auth.setUserToken(resp.data.token)
      //     this.$store.commit("cabinet/setUserInfo", resp.data.info)
      //     this.$router.push("/profile")
      //   }
      //   else {
      //     alert("Something went Error")
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    }
  },
}
</script>

<style lang="scss">
.login {
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
      min-width: 420px;
    }
    &__forgod {
      cursor: pointer;
    }
  }
}
</style>
