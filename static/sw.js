importScripts('/nuxt-text-count/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-text-count",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-text-count/_nuxt/app.47bc8880fc4b19d82b35.js",
    "revision": "f23e5a50e9dd8840745e9ffc80834cb6"
  },
  {
    "url": "/nuxt-text-count/_nuxt/layouts/default.b4f1796fac307f13673c.js",
    "revision": "59dd04fc857a5760374330cef4b3872f"
  },
  {
    "url": "/nuxt-text-count/_nuxt/manifest.0c26a2d4f4e8ed00aa99.js",
    "revision": "48d079616f1b1bd6ccec63348ae38e49"
  },
  {
    "url": "/nuxt-text-count/_nuxt/pages/index.40f09e25109dcc16eff4.js",
    "revision": "8fe3811cc64a14b28ba3d0811097f274"
  },
  {
    "url": "/nuxt-text-count/_nuxt/vendor.27be78acb51cdcb676c6.js",
    "revision": "aab58fb9e83c9959215da51e0b9dec9b"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxt-text-count/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxt-text-count/.*'), workboxSW.strategies.networkFirst({}), 'GET')

