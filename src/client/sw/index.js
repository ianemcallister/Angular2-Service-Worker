var staticCacheName = 'transit-static-v1';

self.addEventListener('install', function(event) {
	console.log('sw installing', staticCacheName);
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'../index.html',
				'../css/main.css'
			]);
		})
	);
});

self.addEventListener('activate', function(event) {
	console.log('sw activated');
});

/*self.addEventListener('get', function(event) {
	var requestUrl = new URL(event.request.url);
	console.log(requestUrl);
	console.log(location);
	if(requestUrl.origin === location.origin) {

	}
});*/

self.addEventListener('fetch', function(event) {
	var requestUrl = new URL(event.request.url);

	console.log(requestUrl);
});