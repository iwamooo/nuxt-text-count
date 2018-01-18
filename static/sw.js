importScripts('/nuxt-count/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-count/_nuxt/app.c04b19f6e1e51c3f0a3c.js",
    "revision": "1a0732ed866d8d35821ec53d315d8589"
  },
  {
    "url": "/nuxt-count/_nuxt/layouts/default.1ca916f3e65884b1842e.js",
    "revision": "2a48620361f54c11c50643c27b8e1d2d"
  },
  {
    "url": "/nuxt-count/_nuxt/manifest.909e0ecb8a22d0dbb2f4.js",
    "revision": "faf93e282ec2e5708c92c2ba7894b12e"
  },
  {
    "url": "/nuxt-count/_nuxt/pages/index.c96ebbe4c5b61c5f8992.js",
    "revision": "63a8494afd9f6ade89edbe5d9cc9c9cf"
  },
  {
    "url": "/nuxt-count/_nuxt/vendor.2a0c4eb19d9b51d0edef.js",
    "revision": "4c37de7bad8fa2a5d870777df1ab53f8"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxt-count/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxt-count/.*'), workboxSW.strategies.networkFirst({}), 'GET')

