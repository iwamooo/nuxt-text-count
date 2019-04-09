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
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: '文字数・バイト数カウント' },
      { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: '文字数・バイト数カウント' },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: '文字数・バイト数カウント' },
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'テキストボックスに入力された文字数・バイト数をカウントする便利なツール・サービスです。WEBサイトのライティング作業、Twitter投稿、レポート作成など、文字数制限のある文章作成をサポートします！' }
    ],
    link: [
      { rel: 'canonical', href: 'https://iwamooo.github.io/nuxt-text-count/' },
      { rel: 'prefetch', as: 'script', href: '//fonts.googleapis.com/css?family=Montserrat' },
      { rel: 'subresource', href: '//fonts.googleapis.com/css?family=Montserrat', class: 'js-webFont' },
      { rel: 'icon', type: 'image/x-icon', href: '/nuxt-text-count/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [{
      innerHTML: `{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "文字数・バイト数カウント",
        "url": "https://iwamooo.github.io/nuxt-text-count/",
      }`,
      type: 'application/ld+json', body: true }
    ]
  },
  manifest: {
    name: '文字数・バイト数カウント',
    short_name: '文字数・バイト数カウント',
    title: '文字数・バイト数カウント',
    description: 'テキストボックスに入力された文字数・バイト数をカウントする便利なツール・サービスです。WEBサイトのライティング作業、Twitter投稿、レポート作成など、文字数制限のある文章作成をサポートします！',
    'og:title': '文字数・バイト数カウント',
    'og:description': 'テキストボックスに入力された文字数・バイト数をカウントする便利なツール・サービスです。WEBサイトのライティング作業、Twitter投稿、レポート作成など、文字数制限のある文章作成をサポートします！',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    "icons": [
      {
      "src": "/nuxt-text-count/logo192.png",
      "sizes": "192x192",
      "type": "image/png"
      },
      {
        "src": "/nuxt-text-count/logo512.png",
        "sizes": "512x512",
        "type": "image/png"
        }
    ]
  },
  loading: false,
  router: {
    base: '/nuxt-text-count/'
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
