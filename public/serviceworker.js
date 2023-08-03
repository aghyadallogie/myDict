const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// install serviceworker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((currentCache) => currentCache.addAll(urlsToCache))
  );
});

// listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then(() =>
        fetch(event.request).catch(() => caches.match("offline.html"))
      )
  );
});

// activate serviceworker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (!cacheWhitelist.includes(name)) return caches.delete(name);
        })
      )
    )
  );
});
