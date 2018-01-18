importScripts('/nuxt-count/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-count/_nuxt/app.59bfd6e210c29297fc60.js",
    "revision": "715aaaf6dbf1426ab5e2c72a58be99dc"
  },
  {
    "url": "/nuxt-count/_nuxt/layouts/default.1ca916f3e65884b1842e.js",
    "revision": "2a48620361f54c11c50643c27b8e1d2d"
  },
  {
    "url": "/nuxt-count/_nuxt/manifest.009ad65aa0f91d399168.js",
    "revision": "30360b7976732b62c309daa918059670"
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

