import IndexController from './IndexController';

export default class Index {
	
	constructor(container: any) { 
		console.log('got here', container); 
		new IndexController(0);
	}
	
}

