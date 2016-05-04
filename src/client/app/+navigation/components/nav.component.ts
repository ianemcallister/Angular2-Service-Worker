import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/name-list';

@Component({
  selector: 'sd-nav',
  templateUrl: 'app/+navigation/components/nav.component.html',
  styleUrls: ['app/+navigation/components/nav.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class NavigationComponent {
  newName: string;
  constructor(public nameListService: NameListService) {
  	
  	/*fetch('../../server/JSON/systemMap.json')
  	.then(function(results) {
  		console.log(results);
  	})
  	.catch(function(error) {
  		console.log('Error:', error);
  	});*/

  }
  
}
