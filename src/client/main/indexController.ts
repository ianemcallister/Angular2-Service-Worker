var idb = require('idb');

export default class IndexController {
	
	constructor(container: number) { 
		console.log('got here', container);
		this.openDatabase(); 
		this.testing();
	}

	openDatabase() {
		// If the browser doesn't support service worker,
	  	// we don't care about having a database
		if(!('serviceWorker' in navigator)) {
			console.log('sw not supported, no db');
			//return Promise.resolve();
		}

		//open the db
		var dbPromise = idb.open('transit', 1, function(upgradeDb: any) {
			var keyValStore = upgradeDb.createObjectStore('systemMap');
			keyValStore.put('world', 'hello'); 
		})
		.then(function (db: any) { console.log('DB opened!', db); })
		.catch(function (e: any) { console.log('Error;', e); });
	}
	
	testing() {
		alert('does this work?');
	}	
}
