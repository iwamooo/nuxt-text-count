importScripts('/_nuxt/workbox.dev.7002ba07.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e1faf59c9b21ca4cc01f.js",
    "revision": "1ce4880c6f8ea5c769f8035f0e1fa19b"
  },
  {
    "url": "/_nuxt/layouts/default.eac6e86fd8fcd4b213bc.js",
    "revision": "2b61a0571f25ca8de4fdcadea5a48dd5"
  },
  {
    "url": "/_nuxt/manifest.88fabf8e4625f2dbefd5.js",
    "revision": "81cdedc5dcbd5eeb73d89d8d39e60bbc"
  },
  {
    "url": "/_nuxt/pages/index.aceb6458a9e9f16a99a7.js",
    "revision": "f7d621015cfab6b517198de52b9774e0"
  },
  {
    "url": "/_nuxt/vendor.2a0c4eb19d9b51d0edef.js",
    "revision": "4c37de7bad8fa2a5d870777df1ab53f8"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

