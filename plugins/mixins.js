import Vue from "vue";

export default ({ app, store, route }, ctx, inject) => {
    Vue.mixin({
    computed: {
      formRules() {
        return {
          required: (value) => !!value || 'validate.required',
          password: (value) =>
            !!value &&
            typeof value === 'string' &&
            (value.length < 6 || value.length > 32)
              ? 'validate.invalid_password'
              : true,
          login: (value) =>
            this.isRegExp(
              value,
              '^[A-Za-z0-9_]{5,50}$',
              'validate.invalid_login'
            ),
          create_login: (value) => {
            const check_rus_alphabet_and_symbol =
              /[а-яА-ЯёЁ\ !"#$%&'()*+/:;<=>?@[\]^`{|}~«»\-\\]/.test(value)
            if (check_rus_alphabet_and_symbol) {
              return 'validate.invalid_characters'
            } else {
              let check_login = /^[A-Za-z0-9_.]{5,50}$/.test(value)
              if (check_login) return true
              return 'validate.invalid_login'
            }
          },
        }
      },
    },

    methods: {
      isRegExp(value, pattern, error_text) {
        let reg = new RegExp(pattern)
        return !!value && !reg.test(value) ? error_text : true
      },
      getFlash(type = "success", text = "") {
        this.$toast[type](text)
      }
    },
  })
}
