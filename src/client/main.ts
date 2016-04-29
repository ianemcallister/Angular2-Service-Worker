import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {AppComponent} from './app/components/app.component';

function openDatabase() {
	console.log('opening the databse');
}

//define the production mode if need be
function _enableProdMode() {
	if ('<%= ENV %>' === 'prod') { enableProdMode(); }

	bootstrap(AppComponent, [
	  ROUTER_PROVIDERS,
	  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
	]);
}

//define the service worker
function _registerServiceWorker() {
	if ('serviceWorker' in navigator) {
	   (<any>navigator).serviceWorker.register('./worker.js').then((registration: any) =>
	       console.log('ServiceWorker registration successful with scope: ', registration.scope))
	     .catch((err: any) =>
	       console.log('ServiceWorker registration failed: ', err));
	}
}

//run methods
_enableProdMode();
_registerServiceWorker();
openDatabase();

