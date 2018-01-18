module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: '文字数・バイト数カウント',
    meta: [
      { name: 'robots', content: 'noindex, nofollow, noarchive' },
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'テキストボックスに入力された文字数・バイト数をカウントする便利なツール・サービスです。WEBサイトのライティング作業、Twitter投稿、レポート作成など、文字数制限のある文章作成をサポートします！' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'COUNT' },
      { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: 'COUNT' },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'COUNT' },
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'テキストボックスに入力された文字数・バイト数をカウントする便利なツール・サービスです。WEBサイトのライティング作業、Twitter投稿、レポート作成など、文字数制限のある文章作成をサポートします！' },
      { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', value: 'summary' },
      { hid: 'twitter:site:id', name: 'twitter:site:id', property: 'twitter:site:id', value: 'xxx' }
    ],
    link: [
      { rel: 'canonical', href: '/nuxt-count/' },
      { rel: 'prefetch', as: 'script', href: '//fonts.googleapis.com/css?family=Montserrat' },
      { rel: 'subresource', href: '//fonts.googleapis.com/css?family=Montserrat', class: 'js-webFont' },
      { rel: 'icon', type: 'image/x-icon', href: '/nuxt-count/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [{
      innerHTML: `{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "COUNT",
        "url": "xxx",
        "sameAs": [
          "https://twitter.com/xxx/"
        ]
      }`,
      type: 'application/ld+json', body: true }
    ]
  },
  loading: false,
  router: {
    base: '/nuxt-count/'
  },
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
  /*
  ** PWA
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true
  }
}
