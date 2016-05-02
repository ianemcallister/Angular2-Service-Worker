import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from '../app/components/app.component';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

var idb = require('idb');

function openDatabase() {
	// If the browser doesn't support service worker,
  	// we don't care about having a database
	if(!('serviceWorker' in navigator)) {
		console.log('sw not supported, no db');
		return Promise.resolve();
	}

	//open the db
	return idb.open('transit', 1, function(upgradeDb: any) {
      var store = upgradeDb.createObjectStore('systemMap');
      //store.put('everything', 'testing');
    });
	/*
	var dbPromise = idb.open('transit', 1, function(upgradeDb: any) {
		var keyValStore = upgradeDb.createObjectStore('systemMap');
		keyValStore.put('world', 'hello'); 
	})
	.then(function (db: any) { console.log('DB opened!', db); })
	.catch(function (e: any) { console.log('Error;', e); });*/
}

export default class IndexController {
	_container: any;
	_dbPromise: any;

	constructor(container: number) { 
		
		console.log('got here', container);
		//hold over from example project
		this._container = container;
		//this is what I really care about
		this._dbPromise = openDatabase(); 
		//from the seed project
		this._enableProdMode();
		//handles the service worker
		this._registerServiceWorker();

	}

	//define the production mode if need be
	_enableProdMode() {
		if ('<%= ENV %>' === 'prod') { this._enableProdMode(); }

		bootstrap(AppComponent, [
		  ROUTER_PROVIDERS,
		  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
		]);
	}

	_registerServiceWorker() {
		
		if (!('serviceWorker' in navigator)) return
		

	   (<any>navigator).serviceWorker.register('./sw/index.js'/*'./worker.js'*/).then((reg: any) => {
	       console.log('ServiceWorker registration successful with scope: ', reg.scope);
	       if(!(<any>navigator).serviceWorker.controller) return;

	       if(reg.waiting) {
	         //indexController._updateReady(reg.waiting);
	         return;
	       }

	       if(reg.installing) {
	       	//indexController._trackInstalling(reg.installing);
	        return;
	       }

	       reg.addEventListener('updateFound', function() {
	       	//indexController._trackInstalling(reg.installing);
	       });
	     })
	     .catch((err: any) =>
	       console.log('ServiceWorker registration failed: ', err));
		
	}

	_showCachedMessages() {
		var indexController = this;

		return this._dbPromise.then(function(db: any) {

			var index = db.transaction('transit')
				.objectStore('transit');

			/*return index.getAll().then(function(messages) {
		      indexController._postsView.addPosts(messages.reverse());
		    });*/
		});

	}

}
