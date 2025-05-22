const CACHE_NAME = 'cats-app-cache-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/home.js',
  '/js/api.js',
  '/js/lista.js',
  '/js/usuario.js',
  '/js/aleatorio.js',
  '/js/favoritos.js',
  '/js/memes.js',
  '/js/detalle.js',
  '/js/estilos.css',
  '/icons/huella.png',
  '/icons/pata_192.png',
  
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
