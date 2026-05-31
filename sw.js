const CACHE_NAME = 'calcolatore-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Installa il service worker e salva i file nella cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Recupera i file dalla cache se non c'è connessione
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
