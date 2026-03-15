const CACHE_NAME = 'suraj-portfolio-cache-v3';
const urlsToCache = [
    '/',
    '/logo.png',
    '/manifest.json'
];

// Install a service worker
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Network-first for HTML, Cache-first for other assets
self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);

    // Skip non-GET requests and external resources except those we explicitly want to cache
    if (request.method !== 'GET' || !url.origin.includes(self.location.origin)) {
        return;
    }

    // For HTML files (like index.html or the root), use a Network-First strategy
    if (request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
                    return response;
                })
                .catch(() => caches.match(request))
        );
        return;
    }

    // For other assets (JS, CSS, Images), use Cache-First with Network fallback
    event.respondWith(
        caches.match(request)
            .then(response => {
                if (response) {
                    return response;
                }

                return fetch(request).then(networkResponse => {
                    if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }

                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, responseToCache);
                    });

                    return networkResponse;
                }).catch(() => {
                    // Fail gracefully
                    return new Response('Offline', { status: 503, statusText: 'Offline' });
                });
            })
    );
});

// Update a service worker and clear old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (!cacheWhitelist.includes(cacheName)) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        ])
    );
});
