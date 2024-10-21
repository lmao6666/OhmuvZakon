self.addEventListener('install', event => {
   console.log('Service Worker se instaluje...');
   event.waitUntil(
   caches.open('my-cache').then(cache => {
   return cache.addAll([
   '/',
   '/index.html',
   '/style.css',
   '/app.js',
   '/manifest.json',
   '/cannabis.webp',
   '/diktator1.png',
   '/diktator2.png',
   ]);
   })
   );
   });
   // Aktivace service workeru
   self.addEventListener('activate', event => {
   console.log('Service Worker byl aktivován');
   });
