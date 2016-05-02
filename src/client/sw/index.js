var staticCacheName = 'transit-static-v1';

self.addEventListener('install', function(event) {
	console.log('sw installing');
	/*event.waitUntil(

		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'idb.js'
			]);
		})
	);*/
});

self.addEventListener('activate', function(event) {
	console.log('sw activated');
});

self.addEventListener('get', function(event) {
	var requestUrl = new URL(event.request.url);
	console.log(requestUrl);
	console.log(location);
	if(requestUrl.origin === location.origin) {

	}
});