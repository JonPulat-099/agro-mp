export default function ({ $axios, app, route, store, redirect, req, res }) {
  $axios.onRequest((config) => {
    const lang = app.i18n.locale

    config.headers.common["Content-Type"] =
      "application/x-www-form-urlencoded; charset=UTF-8"
    config.headers.common["X-AppLang"] = lang
  })
}
