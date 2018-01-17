importScripts('/nuxt-count/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-count/_nuxt/app.6d9c8386d0ffe7049ac0.js",
    "revision": "e6d166e7f47647875e3a941c2f50b2c6"
  },
  {
    "url": "/nuxt-count/_nuxt/layouts/default.1ca916f3e65884b1842e.js",
    "revision": "2a48620361f54c11c50643c27b8e1d2d"
  },
  {
    "url": "/nuxt-count/_nuxt/manifest.4e398303258f82b3d569.js",
    "revision": "9e40eeb3a8d6a3f29ae3f9da60c18ee9"
  },
  {
    "url": "/nuxt-count/_nuxt/pages/index.ff8e00804c83b25adc49.js",
    "revision": "f106f932d73325c8d6b18b3813309b6b"
  },
  {
    "url": "/nuxt-count/_nuxt/vendor.2a0c4eb19d9b51d0edef.js",
    "revision": "4c37de7bad8fa2a5d870777df1ab53f8"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxt-count/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxt-count/.*'), workboxSW.strategies.networkFirst({}), 'GET')

