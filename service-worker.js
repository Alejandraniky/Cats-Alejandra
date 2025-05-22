const CACHE_NAME = 'cats-app-cache-v1';

const urlsToCache = [
  '/', // Asegura el index.html
  '/index.html',
  '/js/home.js',
  '/service-worker.js',
  '/icons/huella.png',
  '/icons/pata_192.png',
  '/manifest.json'
];

// Instalar el Service Worker y guardar archivos en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar el Service Worker y limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones y responder con caché si existe
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
