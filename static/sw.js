importScripts('/nuxt-count/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-count/_nuxt/app.cb8e73a78e68a8e30017.js",
    "revision": "2a99ccab7ce41f5ea4b6f863034e9961"
  },
  {
    "url": "/nuxt-count/_nuxt/layouts/default.cce3b11dbde8b0476ddc.js",
    "revision": "84db8be8b1c539c1c15d4e3f3d74944e"
  },
  {
    "url": "/nuxt-count/_nuxt/manifest.b62fcc13f306ab3d0440.js",
    "revision": "84f43d8508b4bf55281aba037d2d86c7"
  },
  {
    "url": "/nuxt-count/_nuxt/pages/index.aceb6458a9e9f16a99a7.js",
    "revision": "f7d621015cfab6b517198de52b9774e0"
  },
  {
    "url": "/nuxt-count/_nuxt/vendor.2a0c4eb19d9b51d0edef.js",
    "revision": "4c37de7bad8fa2a5d870777df1ab53f8"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxt-count/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxt-count/.*'), workboxSW.strategies.networkFirst({}), 'GET')

