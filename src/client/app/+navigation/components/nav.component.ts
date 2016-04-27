import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/index';

@Component({
  selector: 'sd-nav',
  templateUrl: 'app/+navigation/components/nav.component.html',
  styleUrls: ['app/+navigation/components/nav.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class NavigationComponent {
  newName: string;
  constructor(public nameListService: NameListService) {}
  
  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }
}
