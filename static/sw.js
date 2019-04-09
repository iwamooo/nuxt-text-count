importScripts('/nuxt-text-count/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-text-count",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-text-count/_nuxt/app.9be862d8a7148f70bf1d.js",
    "revision": "b74fbc86e500772dbb2adba8d7515a14"
  },
  {
    "url": "/nuxt-text-count/_nuxt/layouts/default.b4f1796fac307f13673c.js",
    "revision": "59dd04fc857a5760374330cef4b3872f"
  },
  {
    "url": "/nuxt-text-count/_nuxt/manifest.65356db3e317abb28c60.js",
    "revision": "feec37216fa5fa69af19f76f99ab38d0"
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

