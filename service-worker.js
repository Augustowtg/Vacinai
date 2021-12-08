var cache = "vacinai-v1.0";

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(cache)
      .then((cache) =>
        cache.addAll([
          "index.html",
          "./assets/img/icon-192x192.png",
          "./assets/img/icon-256x256.png",
          "./assets/img/icon-384x384.png",
          "./assets/img/icon-512x512.png",
          "./assets/styles/descontos.css",
          "./assets/styles/index.css",
          "./assets/styles/main.css",
          "./assets/styles/reset.css",
          "./assets/styles/reset.css",
          "./assets/styles/vacina.css",
        ])
      )
  );
});

self.addEventListener("message", function (event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  event.repondWith(
    (async function () {
      try {
        return await fetch(event.request);
      } catch (err) {
        return caches.match(event.request);
      }
    })()
  );
});
