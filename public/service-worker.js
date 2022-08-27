// global constants
const APP_PREFIX = 'Budget-Tracker-';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

// files to be cached by prioirity
const FILES_TO_CACHE = [
	'./index.html',
	'./public/js/index.js',
	'./public/js/idb.js',
	'./public/css/style.css',
	'./public/manifest.json',
	'./icons/icon-72x72.png',
	'./icons/icon-96x96.png',
	'./icons/icon-128x128.png',
	'./icons/icon-144x144.png',
	'./icons/icon-152x152.png',
	'./icons/icon-192x192.png',
	'./icons/icon-384x384.png',
	'./icons/icon-512x512.png',
];

// install service worker and add files to the precache, so that the application can use the cache
self.addEventListener('install', function (e) {
	e.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('installing cache : ' + CACHE_NAME);
			return cache.addAll(FILES_TO_CACHE);
		})
	);
});

// clear out any old data from the cache and, in the same step, tell the service worker how to manage caches
self.addEventListener('activate', function (e) {
	e.waitUntil(
		caches.keys().then(function (keyList) {
			let cacheKeeplist = keyList.filter(function (key) {
				return key.indexOf(APP_PREFIX);
			});
			// add the current cache to the keeplist
			cacheKeeplist.push(CACHE_NAME);

			// returns a promise that resolves once all old versions of the cache have been deleted
			return Promise.all(
				keyList.map(function (key, i) {
					if (cacheKeeplist.indexOf(key) === -1) {
						console.log('deleting cache : ' + keyList[i]);
						return caches.delete(keyList[i]);
					}
				})
			);
		})
	);
});

// intercept fetch requests
self.addEventListener('fetch', function (e) {
	console.log('fetch request : ' + e.request.url);
	e.respondWith();
});

// determine if the resource already exists in caches
caches.match(e.request).then(function (request) {
	// If it does, log the URL to the console with a message and then return the cached resource
	if (request) {
		console.log('responding with cache : ' + e.request.url);
		return request;
	}
});

// determine if the resource is not already exists in caches
caches.match(e.request).then(function (request) {
	// If it does not, allow the resource to be retrieved from the online network as usual
	return request || fetch(e.request);
});
