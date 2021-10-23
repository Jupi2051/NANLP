self.addEventListener('install', function(e)
{
    e.waitUntil(
        caches.open('nanlp-cache').then(function(cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/main.js"
            ]);
        })
    );
});

self.addEventListener('fetch', function(e)
{
    e.respondWith(
        caches.match(e.request).then(function(res)
        {
            return res || fetch(e.request);
        })
    );
});