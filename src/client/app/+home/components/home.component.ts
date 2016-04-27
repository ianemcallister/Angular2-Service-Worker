import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/index';
import { NavRequest } from './navRequest'

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HomeComponent implements OnInit {
  newName: string;
  nav = {start: 0, end: 0, dirctn: 'dpt', wkday: 3, time: 1203};
  constructor(
    private _router: Router,
    public nameListService: NameListService) {

  }
  
  /* Runs specific tasks on page load
   * @param N/A
   * @returns N/A
   */
  ngOnInit() {
    console.log('testing');
    console.log(this.nav);
  }

  /* Passes the navigation paramaters to the route calculate and changes the page
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
   submitBookends(/*bookends: NavRequest*/) {
    console.log('got this..');
    //console.log(bookends);
    let link = ['Navigation', 
      { start: 1039, 
        end: 3821,
        dirctn: 'dprt', 
        wkday: 3, 
        time: 1402399821 }];

    this._router.navigate(link);
   }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  /*addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }*/

}
