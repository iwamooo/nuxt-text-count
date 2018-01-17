module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '文字数・バイト数カウント',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'テキストボックスに入力された文字数・バイト数をカウントする便利なツール・サービスです。WEBサイトのライティング作業、Twitter投稿、レポート作成など、文字数制限のある文章作成をサポートします！' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nuxt-count/favicon.ico' }
    ]
  },
  router: {
    base: '/nuxt-count/'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true
  }
}
